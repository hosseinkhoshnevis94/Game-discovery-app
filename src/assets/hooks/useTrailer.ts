import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"

interface Trailer{
    id:number,
    name:string,
    preview:string,
    data:{480:string,max:string}
}
const useTrailer = (gameId:any) => {
    const apiClient = new ApiClient<Trailer>(`/games/${gameId}/movies`)
    return useQuery({
        queryKey:['trailer'],
        queryFn:apiClient.get
    })
}

export default useTrailer