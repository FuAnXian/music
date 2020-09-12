import http from "./index";

const request = {
  //搜索
 search(keywords){
   return http({
        url:'/search/suggest',
        params:{
            keywords
        }
    })
 },
 //热搜列表
 searchHot(){
     return http({
         url:"/search/hot/detail"
     })
 }
}
export default request
