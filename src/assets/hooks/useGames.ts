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
    rating:number
  }

const useGames = (selectedGenre?:Genre | null,selectedPlatform?:Platform | null) => useData<Game>('games',{params:{genres:selectedGenre?.id,platforms:selectedPlatform?.id }},[selectedGenre?.id,selectedPlatform?.id])

export default useGames