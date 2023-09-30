import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { GameQuery } from '../../App'
import { Platform } from './usePlatforms'
import ApiClient, { FetchResponse } from '../services/api-client'

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
const useGames = (gameQuery:GameQuery) => useInfiniteQuery<FetchResponse<Game>,Error>({
queryKey:['games',gameQuery],
queryFn:({pageParam = 1}) => apiClient.get({params:{
  genres:gameQuery.selectedGenre?.id,
  parent_platforms:gameQuery.selectedPlatform?.id,
  ordering:gameQuery.selectedSort,
  search:gameQuery.searchInput,
  page:pageParam
}}),
staleTime:24*60*60*1000,
getNextPageParam:(lastPage,allPages) => {
  return lastPage.next ?  allPages.length + 1 : null
}
})

export default useGames