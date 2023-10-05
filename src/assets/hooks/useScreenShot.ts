import { useQuery } from "@tanstack/react-query"
import ApiClient from "../services/api-client"

interface screenShot{
    id:number,
    image:string,
    width:number,
    height:number
}
const useScreenShot = (gameId?:number) => {
const apiClient = new ApiClient<screenShot>(`/games/${gameId}/screenshots`)
return useQuery({
    queryKey:['screenShot',gameId],
    queryFn: apiClient.get
})

}
export default useScreenShot