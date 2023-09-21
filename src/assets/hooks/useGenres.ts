import  { useEffect, useState } from 'react'
import apiClient from '../services/api-client'



export interface Genre{
    id:number,
    name:string,
    slug:string,
    image_background:string,
    games_count:number
  }
  interface GenresResponse{
    count:number,
    results:Genre[]
  }
const useGenres = () => {
const [genres,setGenres] = useState<Genre[]>([])
const [error,setError] = useState<string>('')
const [isLoading,setLoading] = useState(true)
useEffect(()=>{
   const controller = new AbortController()
apiClient.get<GenresResponse>('/genres',{signal:controller.signal})
.then(res=> setGenres(res.data.results))
.catch(err => {
// if(err instanceof CanceledError) return;
setError(err.message)})
.finally(()=>setLoading(false))
return () => controller.abort()
},[])
return{genres,setGenres,error,setError,isLoading}
}

export default useGenres