import { useQuery } from "@tanstack/react-query"
import useData, { FetchResponse } from "./useData"
import apiClient from "../services/api-client"
export interface Genre{
    id:number,
    name:string,
    slug:string,
    image_background:string,
    games_count:number
  }
const useGenres = () => useQuery({
  queryKey:['genres'],
  queryFn: () => apiClient.get<FetchResponse<Genre>>('genres')
  .then(res => res.data
  ),
  staleTime:10000,
  cacheTime:100000
})
export default useGenres