<template>
  <div style="padding-bottom:15px;">
    <div class="header">
      <h5 style="font-size:22px;font-weight:500;">{{title}}</h5>
      <slot name="body"></slot>
      <slot name="control">
        <span class>
          更多
          <i class="el-icon-arrow-right"></i>
        </span>
      </slot>
    </div>
    <div class="panel-body">
      <span @click="preva" class="left but">
        <i class="el-icon-d-arrow-left"></i>
      </span>
      <span @click="next" class="right but">
        <i class="el-icon-d-arrow-right"></i>
      </span>
      <div :style="{width:scaleWidth+'%'}" class="item" v-for="(item,index) in list" :key="index">
        <div class="ww">
          <div class="shade">
            <i class="iconfont icon-bofang"></i>         
          </div>
           <span>
              <em class="el-icon-headset"></em>
              {{item.playCount | playnum}}
           </span>
          <img width="100%" :src="item.picUrl" :alt="item.name" />
        </div>
        <p>{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "panel",
  props: {
    listItem: {
      type: Array,
      default() {
        return [];
      },
    },
    title: {
      type: String,
      default: "",
    },
    countItem: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      indexPage: 0,
    };
  },
  methods: {
    preva() {
      this.indexPage =
        this.indexPage === 0
          ? Math.ceil(this.listItem.length / this.countItem) - 1
          : this.indexPage - 1;
    },
    next() {
      let num = Math.ceil(this.listItem.length / this.countItem);
      if (this.indexPage < num - 1) {
        this.indexPage++;
      } else {
        this.indexPage = 0;
      }
    },
  },
  computed: {
    list() {
      let count = this.indexPage * this.countItem;
      return this.listItem.slice(count, count + this.countItem);
    },
     scaleWidth(){
      return (100 / this.countItem) - 1;
  }
  },
  filters:{
      playnum(value){
          return Math.round(value / 10000) + "万"         
      }
  },
};
</script>

<style scoped>
.header {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}
.header span {
  color: rgb(92, 91, 91);
  font-size: 14px;
  cursor: pointer;
}
.header span:hover {
  color: var(--primary-color);
}
.panel-body {
  display: flex;
  position: relative;
  justify-content: space-between;
}
.item {
  width: 18%;
  font-size: 13px;
  color: rgb(49, 49, 49);
  cursor: pointer;
}
img {
  border-radius: 10px;
  display: block;
}
.item p {
  margin: 8px 0;
}
.item p:hover {
  color: var(--primary-color);
}
.ww {
  position: relative;
  transition: all 0.3s;
}
.ww:hover {
  transform: translateY(-10px);
}
.ww:hover span{
    display: none;
}
.ww:hover .shade {
  opacity: 1;
}
.shade {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(49, 49, 49, 0.507);
  transition: 0.3s opacity;
  opacity: 0;
  border-radius: 10px;
}
.ww > span {
  position: absolute;
  right: 10px;
  bottom: 10px;
  display: block;
  border-radius: 50px;
  background-color: #2a2a2a;
  color: #fff;
  padding:2px 8px;
}
.shade i {
  position: absolute;
  left: 50%;
  font-size: 50px;
  top: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.shade i:hover {
  color: var(--primary-color);
}
.item p {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.panel-body:hover .but {
  opacity: 1;
}
.but {
  position: absolute;
  top: 35%;
  font-size: 25px;
  color: rgb(34, 34, 34);
  z-index: 3;
  opacity: 0;
  transition: 0.3s opacity;
}
.but:hover {
  cursor: pointer;
  color: var(--primary-color);
}
.left {
  left: -25px;
}
.right {
  right: -25px;
}
</style>