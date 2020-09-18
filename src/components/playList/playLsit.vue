<template>
  <div style="padding: 20px 0 0">
    <table style="width:100%;" cellspacing="0">
      <tr class="hader">
        <th colspan="2">歌曲</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </tr>
      <tr class="list" v-for="(item,index) in list" :key="item.id">
        <td>{{index | foamtIndex}}</td>
        <td>
          <div class="paly-control" style="width:100%">
            <div
              style="width:250px; 
              overflow: hidden;
          text-overflow: ellipsis;
  white-space: nowrap;"
            >{{item.name}}</div>
            <div style="width:130px;" class="contorl">
              <span @click="palySong(item)" class="el-icon-video-play"></span>
              <span class="el-icon-circle-plus-outline"></span>
              <span class="el-icon-download"></span>
              <span class="el-icon-chat-dot-round"></span>
            </div>
          </div>
        </td>
        <td>
          <div>{{formattingName(item.ar)}}</div>
        </td>
        <td>
          <div>{{item.al.name}}</div>
        </td>
        <td>{{item.dt | foramTime}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "playList",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  created() {
  },
  data() {
    return {};
  },
  filters: {
    //格式化序号
    foamtIndex(index) {
      return index < 9 ? "0" + (index + 1) : index + 1;
    },
    //格式化时间
    foramTime(tiems) {
      let time = Math.round(tiems / 1000);
      let miute = Math.floor(time / 60);
      let second = time % 60;
      if (miute < 10) {
        miute = "0" + miute;
      }
      if (second < 10) {
        second = "0" + second;
      }
      return miute + ":" + second;
    },
  },
  methods: {
    //格式化名字
    formattingName(ar) {
      let index = ar.length;
      let name = "";
      ar.map((item) => {
        name += item.name + "-";
      });
      return name.slice(0, -1);
    },
    palySong(params){
      this.$event.$emit("play",params);
    }
  },
};
</script>

<style scoped>
.hader th {
  font-weight: 500;
  color: rgb(117, 117, 117);
  font-size: 14px;
  text-align: left;
}
.list {
  transition: 0.2s all;
}
.list td {
  padding: 10px 0;
  font-size: 14px;
  line-height: 25px;
}
.list td > div {
  width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.list:hover {
  border-radius: 10px;
  background-color: rgb(223, 255, 233);
  color: rgb(47, 47, 47);
}
.list td:nth-child(1) {
  width: 5%;
  column-span: 2;
}
.hader th:nth-child(1) {
  width: 40%;
}
.hader th:nth-child(2) {
  width: 25%;
}
.hader th:nth-child(3) {
  width: 25%;
}
.hader th:nth-child(4) {
  width: 10%;
}
.paly-control {
  display: flex;
  justify-content: space-between;
}
.contorl {
  opacity: 0;
  transition: all 0.1s;
}
.list:hover .contorl {
  opacity: 1;
}
.contorl span {
  font-size: 20px;
  margin: 0 5px;
  cursor: pointer;
}
.contorl span:hover {
  color: var(--primary-color);
}
</style>