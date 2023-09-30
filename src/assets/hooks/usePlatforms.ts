import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

export interface Platform{
    id:number,
    slug:string,
    name:string
  }

const apiClient = new ApiClient<Platform>('/platforms/lists/parents')
const usePlatforms = () => useQuery({
    queryKey:['platforms'],
    queryFn:apiClient.get,
    staleTime:24*60*60*1000
})

export default usePlatforms