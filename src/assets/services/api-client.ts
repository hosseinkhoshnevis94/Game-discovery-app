import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:"7f6750fb20054f7986b8581309b6ff41"
    }
    
})