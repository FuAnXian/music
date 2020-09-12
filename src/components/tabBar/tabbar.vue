<template>
  <div>
    <ul class="tabbar">
      <li class="progress" :style="{left:offsetLeft + 'px'}"></li>
      <li
        :class="{'active':isActive === index}"
        v-for="(item,index) in listData"
        :key="index"
        @click="handle(index,item.path)"
        ref="li"
      >
      <!-- <router-link :to="'/musicHeall'+item.path">{{item.name}}</router-link> -->
        <a style="transition: all 0.3s;" href="javascript:;">{{item.name}}</a>
      </li>
    </ul>
    <div>
      <keep-alive>
        <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  props: {
    list: {
      type: Array,
      default() {
        return []
      },
    },
    indexAc: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      activeName: "first",
      offsetLeft: 0,
      listData: this.list,
      isActive: this.indexAc,
    };
  },
  mounted() {
    this.handle(this.indexAc - 1,this.listData[this.indexAc-1].path);
  },
  methods: {
    handle(index,name) {
      let ele = this.$refs.li[index];
      let x = ele.offsetLeft;
      let totalX = ele.offsetWidth / 2 + x;
      this.offsetLeft = totalX;
      this.isActive = index;
      if(this.$route.name === name)return;
      this.$router.push({
          name
      })
    },
  },
};
</script>

<style scoped>
.tabbar {
  display: flex;
  padding: 0 0 10px 0px;
  position: relative;
}
.tabbar li {
  padding: 0 20px;
  font-size: 13px;
}
.tabbar li.active a {
    font-weight: 600;
    color: var(--primary-color);
}
.tabbar .progress {
  position: absolute;
  left: 0px;
  bottom: 0px;
  height: 3px;
  border-radius: 5px;
  padding: 0;
  width: 20px;
  background-color: var(--primary-color);
  transition: 0.3s all ease-in-out;
  transform: translateX(-50%);
}
</style>