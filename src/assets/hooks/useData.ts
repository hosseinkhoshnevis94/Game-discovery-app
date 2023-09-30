// import { useEffect, useState } from "react"
// import apiClient from "../services/api-client"
// import { AxiosRequestConfig } from "axios"



// export interface FetchResponse<T> {
//     count:number,
//     results:T[],
//     next:string | null,
//     previuos:string | null
// }
// const useData =  <T>(endpoint:string,requestConfig?: AxiosRequestConfig,deps?:any[]) =>{
//     const[data,setDate] = useState<T[]>([])
//     const[error,setError] =useState<string>('')
//     const[isLoading,setLoading] = useState(true)

//     useEffect(()=>{
//         setLoading(true)
//         const controller = new AbortController()
//         apiClient.get<FetchResponse<T>>(endpoint, {signal:controller.signal,...requestConfig})
//         .then(res =>  setDate(res.data.results))
//         .catch(err => setError(err.message))
//         .finally(()=>setLoading(false))
//         // return () => controller.abort()
//     },deps ? [...deps]: [])
//     return{data,setDate,error,setError,isLoading,setLoading}
// }

// export default useData