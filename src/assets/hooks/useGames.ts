import { useInfiniteQuery } from '@tanstack/react-query'
import { Platform } from './usePlatforms'
import ApiClient, { FetchResponse } from '../services/api-client'
import useGameStore from '../../store'
import { Genre } from './useGenres'

interface Publisher {
  id:number,
  name:string
}
export interface Game{
    id:number,
    name:string,
    slug:string,
    genres:Genre[],
    publishers:Publisher[],
    background_image:string,
    description_raw:string,
    parent_platforms:{platform:Platform}[],
    rating:number,
    rating_top:3|4|5
  }
const apiClient = new ApiClient<Game>('/games')
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