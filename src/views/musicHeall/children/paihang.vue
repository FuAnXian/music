<template>
  <div>
    <div class="ranking">
      <div class="ranking-item" v-for="(item,index) in ranking" :key="index">
        <div class="ranking-left">
          <div class="shade">
            <i class="iconfont icon-bofang"></i>
          </div>
          <span><i class="el-icon-headset"></i> {{item.playCount | count}}</span>
          <img :src="item.coverImgUrl" :alt="item.name" />
        </div>
        <div class="ol" @click="getid(item.id)">
          <h3>{{item.name}}</h3>
          <ol>
            <li v-for="(items,i) in item.tracks" :key="i"><span>{{i + 1}} {{items.first}}</span>&nbsp;
             <i class="el-icon-minus"></i>  &nbsp;{{items.second}}</li>
          </ol>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "paihang",
  data() {
    return {
      ranking: [],
    };
  },
  created() {
    this.request.toplist().then((res) => {
      let artis = res.artistToplist;
      this.ranking = res.list.filter((item) => item.tracks.length > 0);
    });
  },
  filters:{
    count(value){
      return Math.round(value / 10000)+"万"
    }
  },
  methods:{
    getid(id){
      this.$router.push({
        name:"songList",
        params:{
          id
        }
      })
    }
  }
};
</script>

<style scoped>
.ranking {
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  justify-content: space-between;
}
.ranking-item {
  width: 48%;
  display: flex;
  margin-bottom: 2%;
  background: rgb(243, 243, 243);
  border-radius: 10px;
  cursor: pointer;
}
.ranking-left {
  width: 250px;
  border-radius: 10px;
  position: relative;
}
.ranking-left:hover .shade{
  opacity: 1;
}
.shade{
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(20, 20, 20, 0.438);
  border-radius: 10px;
  transition: opacity 0.3s;
  opacity: 0;
}
.shade i{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  color: #fff;
  font-size: 40px;
}
.shade i:hover{
  color: var(--primary-color);
}
.ranking-left > span{
    position: absolute;
    right: 10px;
    bottom: 10px;
    display: block;
    border-radius: 50px;
    background-color: #2a2a2a;
    color: #fff;
    padding: 2px 8px;
    font-size: 12px;
}
.ranking-left img {
  width: 100%;
  border-radius: 10px;
  display: block;
}
ol,
li {
  color: rgb(133, 133, 133);
  font-size: 15px;
   white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}
.ol > h3 {
  margin: 5px 0;
}
.ol {
  width: 100%;
  padding: 10px 15px 5px 20px;
}
.ol li {
  padding: 2% 0;
}
</style>