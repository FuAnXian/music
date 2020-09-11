<template>
  <div class="home">
    <el-container style="height:100%">
      <el-aside width="200px">
        <div class="menu">
          <nav class="p-left">
            <div class="logo">
              <img
                width="70%"
                src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599825671000&di=ffb1ee5ead6a492a65503f120d162cfc&imgtype=0&src=http%3A%2F%2Fkfwimg.ikafan.com%2Fupload%2F3e%2F78%2F3e78c5fca49d59b1ce826ffb094d488a_thumb.png"
                alt
              />
            </div>
            <p class="nav-title">在线音乐</p>
            <ul class="nav-ul">
             <li 
              :class="{'active':isActiveClass === item.id}"
               v-for="item in menuList.slice(0,3)" 
               :key="item.id" 
               @click="handle(item.id,item.path)"> 
               <i :class="['iconfont', item.icon]"></i> {{item.name}}</li>
            </ul>
            <p class="nav-title">我的音乐</p>
            <ul class="nav-ul inIcon">
              <li  
              :class="{'active':isActiveClass === item.id}"
              @click="handle(item.id,item.path)"
               v-for="item in menuList.slice(3)" 
               :key="item.id"> 
               <i :class="['iconfont', item.icon]"></i> {{item.name}}</li>
            </ul>
          </nav>
        </div>
      </el-aside>
      <el-container>
        <el-header style="padding-top:10px;height:60px;">
          <el-row class="header">
            <el-col :offset="2" :span="8">
              <el-input size="sm" :border="5" placeholder="搜索音乐" prefix-icon="el-icon-search" v-model="searchSong"></el-input>
            </el-col>
            <el-col :offset="4" :span="10">
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
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      searchSong: "",
      isActiveClass:1,
      menuList:[
        {name:"音乐馆",id:1,path:"/music",icon:"icon-yinle"},
        {name:"视频",id:2,path:"/video",icon:"icon-shipin"},
        {name:"电台",id:3,path:"/music",icon:"icon-icon-"},
        {name:"我喜欢",id:4,path:"/music",icon:"icon-xihuan"},
        {name:"本地下载",id:5,path:"/music",icon:"icon-diannao"},
        {name:"播放历史",id:6,path:"/music",icon:"icon-lishi"},
        {name:"试听列表",id:7,path:"/music",icon:"icon-liebiao"},
      ],
    };
  },
  components: {},
  mounted() {
    console.log();
  },
  methods: {
    handle(id,path){
      this.isActiveClass = id;
    }
  },
};
</script>

<style lang="css" scoped>
.el-aside {
  background-color: #fff;
}
.home {
  width: 80%;
  min-width: 800px;
  margin: 50px auto;
  border-radius: 5px;
  box-shadow: 1px 1px 5px #f1f1f1;
  background-color: #fff;
  height: 80vh;
}
.p-left {
  padding-left: 10px;
}
.menu {
  padding: 20px 20px 10px 30px;
}
.el-container {
  background: #f7f3f3;
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
