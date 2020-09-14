<template>
  <div>
    <div class="banner">
      <el-carousel type="card" :autoplay="true" :interval="3500" height="200px">
        <el-carousel-item v-for="(item,index) in bannerImg" :key="index">
          <img height="100%" width="100%" :src="item.imageUrl" :alt="index" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <paenl :countItem="5" :list-item="persongList" title="歌单"/>
      <paenl :countItem="5" :list-item="broadList" title="电台"/>
      <paenl :countItem="3" :list-item="exclusive" title="独家"/>
    </div>
  </div>
</template>

<script>
import paenl from "../../../components/panel/panel";
export default {
  name: "jingxuan",
  data() {
    return {
      bannerImg: [],
      persongList:[],
      broadList:[],
      exclusive:[]
    };
  },
  created() {
    this.personalized();
    this.getBanner();
    this.privatecontent();
    this.djprogram();
  },
  methods: {
    personalized() {
      this.request.personalized().then((res) => {     
        this.persongList = res.result;
      });
    },
    getBanner() {
      this.request.getBanner().then((res) => {
        this.bannerImg = res.banners;
      });
    },
    personalizedMv(){
      this.request.personalizedMv().then(res =>{
      //  console.log(res)
      })
    },
    djprogram(){
      this.request.djprogram().then(res =>{
        this.broadList = res.result;
      })
    },
    privatecontent(){
      this.request.privatecontent().then(res =>{
        this.exclusive = res.result;
      })
    }
  },
  components: {
    paenl,
  },
};
</script>

<style>
</style>