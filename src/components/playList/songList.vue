<template>
  <div style="padding-left:30px" >
    <div class="box">
      <div class="header-left">
        <img :src="palyList.coverImgUrl" alt />
      </div>
      <div class="header-right">
        <div class="right-title">
          <h1 style="font-size:30px">{{palyList.name}}</h1>
          <div class="right-div">
            <div style="border-right:solid 1px #ddd">
              <p>歌曲数</p>
              <p>{{playListData.length}}</p>
            </div>
            <div>
              <p>播放数</p>
              <p>{{Math.round(palyList.playCount / 1000)+"万"}}</p>
            </div>
          </div>
        </div>
        <p>{{palyList.description}}</p>
        <div class="play-control">
          <div class="play-all active">
            <i class="el-icon-video-play"></i>
            <span>播放全部</span>
          </div>
          <div class="download">
            <i class="el-icon-download"></i>
            <span>下载歌曲</span>
          </div>
          <div class="batch-handle">
            <i class="el-icon-s-operation"></i>
            <span>批量操作</span>
          </div>
        </div>
      </div>
    </div>
    <playList  :list="playListData"/>
  </div>
</template>

<script>
import playList from "./playLsit";
export default {
  name: "songList",
  components: {
    playList,
  },
  data() {
    return {
      playListData: [],
      palyList: {},
      loading:true
    };
  },
  created() {
    this.playList(this.$route.params.id);
  },
  methods: {
    playList(id) {
      this.request.playList(id).then((res) => {
        let ids = res.playlist.trackIds.map((item)=>{
            return item.id
        }).join(",");
        this.songDetail(ids)
        this.palyList = res.playlist;
      });
    },
    //获取歌曲详情
    songDetail(ids){
        this.request.songDetail(ids).then(res=>{
            this.playListData = res.songs;
            this.loading = false;
        })
    }
  },
};
</script>

<style scoped>
.box {
  display: flex;
}
.header-left {
  width: 200px;
}
.header-left > img {
  width: 100%;
  border-radius: 10px;
  display: block;
}
.header-right {
  flex: 1;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.header-right p {
  color: rgb(105, 105, 105);
  font-size: 12px;
}
.play-control {
  display: flex;
}
.play-control > div {
  padding: 5px 20px;
  border-radius: 50px;
  background-color: rgb(235, 235, 235);
  margin-right: 20px;
  font-size: 14px;
  color: #2a2a2a;
  cursor: pointer;
}
.play-control div.active {
  background-color: var(--primary-color);
  color: #fff;
}
i {
  margin-right: 3px;
}
.right-title {
  display: flex;
  justify-content: space-between;
}
.right-div {
  display: flex;
  text-align: right;
}
.right-div > div {
  padding: 0 10px;
}
.right-div p {
  line-height: 20px;
}
</style>