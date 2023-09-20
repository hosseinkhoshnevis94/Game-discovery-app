import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client'

const useGames = () => {
    interface Game{
        id:number,
        name:string
      }
      interface GamesResponse{
        count:number,
        results:Game[]
      }
    const [games,setGames] = useState<Game[]>([])
const [error,setError] = useState<string>('')
useEffect(()=>{
   const controller = new AbortController()
apiClient.get<GamesResponse>('/games',{signal:controller.signal})
.then(res=> setGames(res.data.results))
.catch(err => {
    // if(err instanceof CanceledError) return;
    setError(err.message)})
return () => controller.abort()
},[])
return{games,setGames,error,setError}
}

export default useGames