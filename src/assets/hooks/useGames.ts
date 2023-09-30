import { useQuery } from '@tanstack/react-query'
import { GameQuery } from '../../App'
import apiClient from '../services/api-client'
import { FetchResponse } from './useData'
import { Platform } from './usePlatforms'

export interface Game{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:Platform}[],
    rating:number,
    rating_top:3|4|5
  }

// const useGames = (gameQuery:GameQuery) =>
//  useData<Game>('games',{params:{genres:gameQuery.selectedGenre?.id,platforms:gameQuery.selectedPlatform?.id,ordering:gameQuery.selectedSort,search:gameQuery.searchInput }}
//  ,[gameQuery])
const useGames = (gameQuery:GameQuery) => useQuery<FetchResponse<Game>,Error>({
queryKey:['games',gameQuery],
queryFn: () => apiClient.get<FetchResponse<Game>>('games',{
  params:{
    genres:gameQuery.selectedGenre?.id,
    parent_platforms:gameQuery.selectedPlatform?.id,
    ordering:gameQuery.selectedSort,
    search:gameQuery.searchInput
  }
})
.then(res => res.data),
staleTime:24*60*60*1000
})

export default useGames