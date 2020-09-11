import axios from "axios"

const req  = axios.create({
    baseURL:"http://musicapi.leanapp.cn",
    timeout:9000,
    method: "post",
});

req.interceptors.request.use(function(config,req){
    console.log(config)
    return config;
})
req.interceptors.response.use(function(data,e){
    return data.data
})
export default req