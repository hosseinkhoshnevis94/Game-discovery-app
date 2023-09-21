import { useEffect, useState } from "react"
import apiClient from "../services/api-client"



interface FetchResponse<T> {
    count:number,
    results:T[]
}
const useData =  <T>(endpoint:string) =>{
    const[data,setDate] = useState<T[]>([])
    const[error,setError] =useState<string>('')
    const[isLoading,setLoading] = useState(true)

    useEffect(()=>{
        const controller = new AbortController()
        apiClient.get<FetchResponse<T>>(endpoint,{signal:controller.signal})
        .then(res => setDate(res.data.results))
        .catch(err => setError(err.message))
        .finally(()=>setLoading(false))
        return () => controller.abort()
    },[])
    return{data,setDate,error,setError,isLoading,setLoading}
}

export default useData