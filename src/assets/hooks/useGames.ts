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

const useGames = (selectedGenre?:Genre | null) => useData<Game>('games',{params:{genres:selectedGenre?.id }},[selectedGenre?.id])

export default useGames