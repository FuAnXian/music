import http from "./index";

const request = {
    //搜索
    search(keywords) {
        return http({
            url: '/search/suggest',
            params: {
                keywords
            }
        })
    },
    //热搜列表
    searchHot() {
        return http({
            url: "/search/hot/detail"
        })
    },
    //banner
    getBanner() {
        return http({
            url: "/banner",
            params: {
                type: 0
            }
        })
    },
    //推荐歌单
    personalized(){
        return http({
            url:"/personalized"
        })
    },
    //推荐电台
    djprogram(){
        return http({
            url:"/personalized/djprogram"
        })
    },
    //推荐MV
    personalizedMv(){
        return http({
            url:"/personalized/mv"
        })
    },
    //独家放送
    privatecontent(){
        return http({
            url:"/personalized/privatecontent/list",
            params:{
                limit :30
            }
        })
    },
    //排行榜
    toplist(){
        return http({
            url:"/toplist/detail"
        })
    }
}
export default request
