import axios from "axios"
//qq音乐:https://api.qq.jsososo.com/
const req  = axios.create({
    baseURL:"https://autumnfish.cn/",//https://autumnfish.cn/
    timeout:9000,
    method: "post",
    withCredentials:true
});

req.interceptors.request.use(function(config,req){
    return config;
})
req.interceptors.response.use(function(data,e){
    return data.data
})
export default req