import { GameQuery } from '../../App'
import useData from './useData'
import { Genre } from './useGenres'
export interface Platform{
  id:number,
  slug:string,
  name:string
}
export interface Game{
    id:number,
    name:string,
    background_image:string,
    parent_platforms:{platform:Platform}[],
    rating:number,
    rating_top:3|4|5
  }

const useGames = (gameQuery:GameQuery) =>
 useData<Game>('games',{params:{genres:gameQuery.selectedGenre?.id,platforms:gameQuery.selectedPlatform?.id,ordering:gameQuery.selectedSort,search:gameQuery.searchInput }}
 ,[gameQuery])

export default useGames