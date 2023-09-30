import axios, { AxiosRequestConfig } from "axios";
export interface FetchResponse<T> {
    count:number,
    results:T[]
}
const axiosInstance =  axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"7f6750fb20054f7986b8581309b6ff41"
    }
    
})

class ApiClient <T>{
    eindpoint:string;

    constructor(eindpoint:string){
        this.eindpoint=eindpoint
    }
    get = (config:AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.eindpoint,config)
        .then(res => res.data)

    }

}

export default ApiClient