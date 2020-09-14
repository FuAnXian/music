<template>
  <div class="home">
    <el-container style="height:100%">
      <el-aside width="200px">
        <div class="menu">
          <nav class="p-left">
            <div class="logo">
              <img
                width="70%"
                src="../assets/img/logo.jpg"
              />
            </div>
            <p class="nav-title">在线音乐</p>
            <ul class="nav-ul">
             <li 
              :class="{'active':isActiveClass.indexOf(item.path) > 0}"
               v-for="item in menuList.slice(0,3)" 
               :key="item.id" 
               @click="handle(item.id,item.path)"> 
               <i :class="['iconfont', item.icon]"></i> {{item.name}}</li>
            </ul>
            <p class="nav-title">我的音乐</p>
            <ul class="nav-ul inIcon">
              <li  
              :class="{'active':isActiveClass.indexOf(item.path) > 0}"
              @click="handle(item.id,item.path)"
               v-for="item in menuList.slice(3)" 
               :key="item.id"> 
               <i :class="['iconfont', item.icon]"></i> {{item.name}}</li>
            </ul>
          </nav>
        </div>
      </el-aside>
      <el-container>
        <el-header style="padding:10px 30px 10px 30px ;height:53px;">
          <el-row class="header">
            <el-col :span="3" class="historyControl">
              <div @click="up"><i style="font-size:16px;font-weight:500;" class="el-icon-arrow-left"></i></div>
              <div @click="next"><i style="font-size:16px;font-weight:500;"  class="el-icon-arrow-right"></i></div>
            </el-col>
            <el-col   :span="8" style="max-width:370px">
              <el-input size="small" :border="5"
               placeholder="搜索音乐" 
               prefix-icon="el-icon-search" 
               v-model="searchSong"
               @input="Sinput"
               @focus="Sfocus"
               @blur="Sblur"
               @change="Schange"></el-input>
               <search-list 
               :host-list="hostList"
               :is-show="isHost" 
               :search-data="searchData" 
               v-show="isSearch"/>
            </el-col>
            <el-col :offset="4" :span="11">
               <ul class="header-nav">
                 <li><i class="el-icon-s-custom"></i></li>
                 <li><i class="iconfont icon-pifu"></i> </li>
                 <li><i class="iconfont icon-liebiao1"></i></li>
                 <li><i class="iconfont icon-vertical_line"></i></li>
                 <li style="transform:rotateZ(90deg)"><i class="iconfont icon-vertical_line"></i></li>
                 <li><i style="font-size:14px;" class="iconfont icon-juxing"></i></li>
                 <li><i style="font-size:20px;" class="iconfont icon-biaoqing"></i></li>
               </ul>
            </el-col>
          </el-row>      
        </el-header>
        <el-main style="padding:20px 30px 20px 0px;">
        <transition :name="skioName" mode="out-in">
          <router-view/>
        </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import searchList from "../components/searchList/searchList"
export default {
  name: "Home",
  data() {
    return {
      isHost:true,
      searchData:{},
      searchSong: "",
      isSearch:false,
      skioName:"view-out",
      isActiveClass:[],
      menuList:[
        {name:"音乐馆",id:1,path:"musicHeall",icon:"icon-yinle"},
        {name:"视频",id:2,path:"videoView",icon:"icon-shipin"},
        {name:"电台",id:3,path:"broad",icon:"icon-icon-"},
        {name:"我喜欢",id:4,path:"myLove",icon:"icon-xihuan"},
        {name:"本地下载",id:5,path:"localDown",icon:"icon-diannao"},
        {name:"播放历史",id:6,path:"playHistory",icon:"icon-lishi"},
        {name:"试听列表",id:7,path:"auditionList",icon:"icon-liebiao"},
      ],
      hostList:[]
    };
  },
  watch:{
    $route(path){
       let arr = this.$route.path.split("/");
        this.isActiveClass = arr;
    }
  },
  components: {searchList},
  created(){
    this.request.searchHot()
    .then(res => {
      this.hostList = res.data
    })
  },
  mounted() {
    this.handle(null,this.$route.name)
    let arr = this.$route.path.split("/");
    this.isActiveClass = arr; 
  },
  methods: {
    handle(id,path){  
      if(this.$route.name === path) return;
      this.$router.push({name:path});   
    },
    up(){
       this.$router.back();
    },
    next(){
        this.$router.go(1);
    },
   Sfocus(){
     this.isSearch  = true;
   },
   Sblur(){
    this.isSearch  = false;
   },
   Schange(){

   },
   Sinput(){
     this.isHost = this.searchSong === "";
     if(this.searchSong === "")return;
    this.request
    .search(this.searchSong)
    .then(res =>{
      this.searchData = res.result;
    })
   }
  },
};
</script>

<style lang="css" scoped>
.view-out-enter-active, .view-out-leave-active{ 
      transition: all 0.2s;  
      opacity: 1;
}
.view-out-enter{
   transform: translateX(10%);
   opacity: 0;
}
 .view-out-leave-to{
     transform: translateX(0%);
     opacity: 0;
}
.el-aside {
  background-color: #fff;
}
.home {
  width: 70%;
  min-width: 1120px;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #f1f1f1;
  background-color: #fff;
  height: 80vh;
}
.p-left {
  padding-left: 10px;
}
.historyControl{
  display: flex;
  justify-content: space-between;
}
.historyControl div{
  flex: 1;
  text-align: left;
}
.historyControl div i{
  cursor: pointer;
}
.menu {
  padding: 20px 20px 10px 30px;
}
.el-container {
  background: #f6fffe;
  box-shadow: 0px 0px 10px rgb(230, 230, 230);
  border-radius: 10px;
}
.nav-title {
  margin-top: 25px;
  margin-bottom: 8px;
  color: rgb(100, 100, 100);
  font-size: 14px;
  cursor: default;
}
.nav-ul > li.active{
     background-image: linear-gradient(to right, #32d8b3, #17cda2);
  color: #fff;
  border-radius:5px ;
}
.active i{
  color: #fff;
}
.nav-ul > li.active:hover{
  color: #fff;
    background-image: linear-gradient(to right, #32d8b3, #17cda2);
}
.nav-ul,
.nav-ul > li {
  font-size: 15px;
  line-height: 35px;
  width: 100%;
  padding-left: 20px;
  transform: translateX(-20px);
  cursor: pointer;
}
.inIcon li i{
  font-size: 14px;
}
.nav-ul > li:hover {
  background-color: #f7f3f3;
  border-radius: 5px;
}
.header {
  display: flex;
  align-items: center;
}
.header-nav{
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.header-nav li{   
  padding: 0 10px;
}
.header-nav li:hover i{
  color: var(--primary-color);
}
.header-nav li i{
  transition: all 0.3s;
   font-size: 18px;
}
</style>
