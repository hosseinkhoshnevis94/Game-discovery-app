import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { Platform } from './usePlatforms'
import ApiClient, { FetchResponse } from '../services/api-client'
import useGameStore from '../../store'

export interface Game{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:Platform}[],
    rating:number,
    rating_top:3|4|5
  }
const apiClient = new ApiClient<Game>('/games')
// const useGames = (gameQuery:GameQuery) =>
//  useData<Game>('games',{params:{genres:gameQuery.selectedGenre?.id,platforms:gameQuery.selectedPlatform?.id,ordering:gameQuery.selectedSort,search:gameQuery.searchInput }}
//  ,[gameQuery])
const useGames = () =>{
  const gameQuery = useGameStore(s=>s.gameQuery)
  
  return (useInfiniteQuery<FetchResponse<Game>,Error>({
queryKey:['games',gameQuery],
queryFn:({pageParam = 1}) => apiClient.get({params:{
  genres:gameQuery.genreId,
  parent_platforms:gameQuery.platformId,
  ordering:gameQuery.selectedSort,
  search:gameQuery.searchText,
  page:pageParam
}}),
staleTime:24*60*60*1000,
getNextPageParam:(lastPage,allPages) => {
  return lastPage.next ?  allPages.length + 1 : null
}
}))
}

export default useGames