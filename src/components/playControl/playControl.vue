<template>
  <div class="control">
      <audio src="" ref="audio"></audio>
      <div class="progress" ref="pro" @click="locati($event)">         
          <div class="progerss-active" ref="progerss" :style="{width:(widthX ) + 'px'}">
              <a draggable="false"  @mousedown="down($event)"  href="javascript:;"></a>
          </div>
          <div class="progress-bg" ref="circle"></div>
      </div>
      <div class="contorl-body">
          <div class="songInfo" v-if="!Object.keys(list) == []">
             <div class="songInfo-img">
                 <img style="width:100%;display:block;border-radius:5px;" :src="singer.picUrl" :alt="singer.id">
            </div> 
            <div class="songInfo-info">
                <p>{{list.name}}-{{ar.name}}</p>
                <p class="icon">
                    <span class="iconfont icon-xihuan"></span>
                    <span class="iconfont icon-download"></span>
                    <span class="iconfont icon-gengduo"></span>
                </p>
            </div>   
          </div> 
          <div class="control-center">
              <div class="iconfont icon-shangyiqu"></div>
              <div style="font-size:45px;color:var(--primary-color)" 
              :class="isplay ? 'el-icon-video-pause': 'el-icon-video-play'"
              @click="play"></div>
              <div class="iconfont icon-xiayiqu"></div>
           </div> 
          <div class="control-right">
              <div class=""></div>
              <div></div>
              <div></div>
        </div> 
      </div>
  </div>
</template>

<script>
export default {
  name:"playControl",
  props:{
      song:{
          type:Object,
          default(){
              return{}
          }
      }
  },
  data(){
      return{
         widthX:0,
         list:{},
         singer:{},
         ar:[],
         audio:{},
         time:null,
         isplay:false,
         duration:0,
         proWidth:0
      }
  },
  mounted(){
      //鼠标清楚放心清楚移动事件
      document.addEventListener("mouseup",function(e){
         this.onmousemove = null;
         this.onmousedown = null;
      });
       this.audio =  this.$refs.audio;
    //拿到保存歌曲
      if(localStorage.getItem("song")){
         this.list = JSON.parse(localStorage.getItem("song"));
         this.singer = this.list.al;
         this.ar = this.list.ar[0];
         this.getUrl(this.list.id,true);
      } 
      //当前播放歌曲保存起来
      this.$event.$on("play",params =>{
           localStorage.setItem("song",JSON.stringify(params));
           this.list = params;
           this.singer = this.list.al;
           this.ar = this.list.ar[0];
           this.getUrl(params.id);
    })
  },
  methods:{
      //按下
      down(e){
          let target = e.target;
          let x = e.clientX;
          this.move(x);
      },
      //移动
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
             if(newx >= (circle - 5)){
                 $.widthX  = (circle - 5);
                 return;
             } 
             $.widthX = newx;           
          }
      },
      //点击快进
      locati(e){
        if(e.offsetX <= 5) return;
        this.widthX = e.offsetX;
        let time =  (this.widthX / this.proWidth) * this.duration;
        this.audio.currentTime = time;
      },
      //播放
      play(){
          this.isplay = !this.isplay;
          if(this.isplay){
             this.$refs.audio.play();  
             this.progerss(this.duration);
          }else{
            this.$refs.audio.pause();  
          } 
      },
      //获取url
      getUrl(id,isPlay){
          this.request.songUrl(id).then(res=>{
              let  $ = this;
              $.audio.src = res.data[0].url;      
              //监听音频加载完毕，保存总时长    
              $.audio.oncanplay = function(e){
                    $.duration = this.duration
                    if(isPlay) return; 
                    $.isplay = false;            
                    $.play();
              };        
          })
      },
      //播放音乐进度滚动
      progerss(time){      
         this.audio.addEventListener("timeupdate",(e)=>{
             this.proWidth =  this.$refs.pro.offsetWidth;
            let scale = this.audio.currentTime / time;
            this.widthX = scale * this.proWidth;
         });
      }
  }
}
</script>

<style scoped>
.control{
    position: relative;
    padding: 5px 0 15px 0;
}
.icon{
    width: 100px;
    display: flex;
    justify-content: space-start;
    font-size: 16px;
    line-height: 20px;
    color: rgba(95, 95, 95, 0.8);
    margin-top: 5px;   
}
.icon span{margin-right: 20px}
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
.contorl-body{
    padding: 0 30px;
    display:flex;
    justify-content:space-between;
    align-items:center;
}
.songInfo{
    width: 30%;
    display: flex;
}
.songInfo-img{
   width: 40px; 
}
.songInfo-info{
    overflow: hidden;
    margin-left: 15px;
    font-size: 12px;
    color: rgb(46, 46, 46);
}
.control-center{
    width: 40%;
    display: flex;
    color: rgb(83, 83, 83);
    justify-content: center;
}
.control-center div{
    margin: 0 10px;
    font-size: 40px;
    cursor: pointer;
}
.control-right{
    width: 30%;
}
</style>