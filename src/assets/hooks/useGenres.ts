import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"
export interface Genre{
    id:number,
    name:string,
    slug:string,
    image_background:string,
    games_count:number
  }
const apiClient = new ApiClient<Genre>('/genres')

const useGenres = () => useQuery({
  queryKey:['genres'],
  queryFn:apiClient.get,
  staleTime:24*60*60*1000
})
export default useGenres