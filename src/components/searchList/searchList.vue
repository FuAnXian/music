<template>
  <div class="box">
    <div v-if="isShow || Object.keys(searchData).length < 1" class="box-host">
      <div class="host-div">
        <div class="host-title">热门搜索</div>
        <ul style="overflow:auto">
          <li v-for="(item,index) in hostList" :key="index">
            <div  :class="['ranking',{'ranlingAc':index < 3 }]">{{index + 1}}</div>
            <div>
              <span>{{item.searchWord}}</span>
              <small style="color:rgb(175, 175, 175);margin-left:5px">{{item.score}}</small>
            <!-- //  <img width="20px" :src="item.iconUrl" alt /> -->
              <p>{{item.content}}</p>
            </div>
          </li>
        </ul>
      </div>
      <div class="host-div">
        <div class="host-title">历史搜索</div>
        <ul>
          <li>
            <span>永不失联的爱</span>
            <span>116万</span>
          </li>
        </ul>
      </div>
    </div>
    <div v-else class="box-value">
      <div class="host-title">在线音乐</div>
      <div class="box-item" v-for="(item,index) in searchData.order" :key="index">
        <div class="box-item-title">{{item | filterNmae}}</div>
        <ul>
          <li :data-id="itmes.picId" v-for="itmes in searchData[item]" :key="itmes.id">
            <img v-show="itmes.img1v1Url" :src="itmes.img1v1Url" class="imge" alt="网易云" />
            <span>{{itmes.name}}</span>
            <span style="float:right" v-if="itmes.playCount">{{(itmes.playCount / 10000 )+"万"}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchList",
  props: {
    hostList: {
      type: Array,
      dafault:()=> {
        return [];
      }
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    searchData: {
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      songData: this.searchData,
    };
  },
  filters: {
    filterNmae(value) {
      switch (value) {
        case "songs":
          return "单曲";
          break;
        case "artists":
          return "歌手";
          break;
        case "albums":
          return "专辑";
          break;
        case "playlists":
          return "歌曲";
      }
    },
  },
};
</script>

<style scoped>
.box {
  position: absolute;
  z-index: 9999;
  top: 33px;
  background-color: #fff;
  border: solid 1px rgb(235, 235, 235);
  border-radius: 8px;
  box-shadow: 0px 3px 10px rgb(224, 224, 224);
  font-size: 14px;
}
.imge {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 8px;
  border: solid 1px rgb(175, 175, 175);
}
.box-host {
  display: flex;
  width: 450px;
  height: 400px;
  padding: 0 13px;
}
.ranking {
  margin-right: 10px;
  font-size: 18px;
  font-weight: 500;
}
.ranlingAc {
  color: rgb(233, 49, 49);
}

.box-value {
  width: 350px;
  padding: 0 13px;
}
.host-div {
  flex: 1;
  font-size: 14px;
}
.host-div:nth-child(1) {
  border-right: 1px solid rgb(235, 235, 235);
}
.host-title {
  padding: 10px 0px 8px 10px;
  border-bottom: 1px solid rgb(235, 235, 235);
}
.host-div ul {
  padding: 5px 0;
 overflow: auto;
 max-height:340px;
}
.host-div ul li {
  padding: 10px 0;
  font-size: 13px;
  color: rgb(42, 42, 42);
  padding-left: 10px;
  cursor: default;
  transition: all 0.2s;
  display: flex;
}
.host-div ul li p {
  line-height: 20px;
  font-size: 12px;
  color: rgb(144, 144, 144);
}
.host-div ul li:hover {
  background: rgb(235, 234, 234);
}
.host-div ul li span:nth-child(1) {
  text-align: left;
}
.host-div ul li span:nth-child(2) {
  text-align: right;
}
.box-item {
  display: flex;
  padding: 10px;
}
.box-item ul {
  flex: 1;
}
.box-item ul li {
  line-height: 40px;
  padding: 0 8px;
}
.box-item ul li:hover {
  background: rgb(235, 234, 234);
}

.box-item-title {
  line-height: 40px;
  padding-left: 10px;
  padding-right: 3px;
}
</style>>


