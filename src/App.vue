<template>
  <div id="app">
    <home/>
  </div>
</template>

<script>
import home from "./views/Home"
import htpp from "./network/index";
export default {
  name: "app",
  data() {
    return {
    }
  },
  mounted(){
    this.$store.state.song = this.$refs.audio;
  },
  components:{
    home
  }
};
</script>>
<style>

</style>
