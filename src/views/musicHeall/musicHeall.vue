<template>
<div>
    <tabbar :list="list"/>
</div>
</template>

<script>
import tabbar from "../../components/tabBar/tabbar"
export default {
  name:"musicHeall",
  data(){
      return{
          list:[
              {
              name:"精选",
              path:"jingxuan"
          },{
              name:"排行",
              path:"paihang"
          }, {
              name:"歌手",
              path:"geshou"
          }, {
              name:"分类歌单",
              path:"fenlei"
          }, {
              name:"数字专辑",
              path:"zhuanji"
          }, {
              name:"最新音乐",
              path:"yinyue"
          }]
      }
  },
  components:{
      tabbar
  }
}
</script>

<style scoped>

</style>>