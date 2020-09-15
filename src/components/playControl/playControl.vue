<template>
  <div class="control">
      <div class="progress" @click="locati($event)">         
          <div class="progerss-active" ref="progerss" :style="{width:(widthX - 5) + 'px'}">
              <a draggable="false"  @mousedown="down($event)"  href="javascript:;"></a>
          </div>
          <div class="progress-bg" ref="circle"></div>
      </div>
      <h1>黄焖鸡</h1>
  </div>
</template>

<script>
export default {
  name:"playControl",
  data(){
      return{
         widthX:0
      }
  },
  mounted(){
      document.addEventListener("mouseup",function(e){
         this.onmousemove = null;
         this.onmousedown = null;
      })
  },
  methods:{
      down(e){
          let target = e.target;
          let x = e.clientX;
          this.move(x);
      },
      move(x){         
         let progress = this.$refs.progerss.offsetWidth;
         let circle = this.$refs.circle.offsetWidth;
         let $ = this;
          document.onmousemove = function(e){
             let newx = progress + (e.clientX - x);
             if(newx <= 0){
               $.widthX  = 0;
               return;
             }
             if(newx >= circle){
                 $.widthX  = circle;
                 return;
             } 
             $.widthX = newx;           
          }
      },
      locati(e){
        if(e.offsetX <= 5) return;
        this.widthX = e.offsetX;
      }
  }
}
</script>

<style scoped>
.control{
    position: relative;
    padding: 10px 0;
}
.progress{
    position: absolute;
    height: 10px;
    transform: translateY(-10px);
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
}
.progress-bg{
    position: absolute;
    height: 2px;
    width: 100%;
    background-color: rgb(202, 202, 202);
    top: 0;
    left: 0;
}
.progerss-active{
    height: 2px;
    background-color: var(--primary-color);
    position: relative;
    z-index: 9;
    left: 0;
    top: 0;
    right: 0;
    width: 10%;
}
.progerss-active > a{
    position: absolute;
    top: -5px;
    right: 0px; 
    transform: translateX(5px);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    z-index: 10;
    background: var(--primary-color);
}
</style>