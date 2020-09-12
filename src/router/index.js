import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//页面路由
import auditionList from "../views/auditionList/auditionList.vue";
import broad from "../views/broad/broad.vue";
import localDown from "../views/localDown/loaclDown.vue";
import musicHeall from "../views/musicHeall/musicHeall.vue";
import myLove from "../views/myLove/myLove.vue";
import playHistory from "../views/palyHistory/playHistory.vue";
import videoView from "../views/videoView/videoView.vue";
Vue.use(VueRouter)
const routes = [ 
  { 
    path: '/musicHeall',
    name: 'musicHeall',
    component: musicHeall,
    children:[
      {
        path:"/",
        redirect:"jingxuan"
      },
      {
        path:"jingxuan",
        name:"jingxuan",
        component:()=> import("../views/musicHeall/children/jingxuan.vue")
      },
      {
        path:"fenlei",
        name:"fenlei",
        component:()=> import("../views/musicHeall/children/fenlei.vue")
      },
      {
        path:"geshou",
        name:"geshou",
        component:()=>import("../views/musicHeall/children/geshou.vue")
      },
      {
        path:"paihang",
        name:"paihang",
        component:()=>import("../views/musicHeall/children/paihang.vue")
      },
      {
        path:"yinyue",
        name:"yinyue",
        component:()=>import("../views/musicHeall/children/yinyue.vue")
      },
      {
        path:"zhuanji",
        name:"zhuanji",
        component:()=>import("../views/musicHeall/children/zhuanji.vue")
      },
    ]
  },
  { 
    path: '/',
    redirect: '/musicHeall'
  },
  { 
    path: '/auditionList',
    name: 'auditionList',
    component: auditionList
  },
  { 
    path: '/broad',
    name: 'broad',
    component: broad
  },
  { 
    path: '/localDown',
    name: 'localDown',
    component: localDown
  },
  { 
    path: '/myLove',
    name: 'myLove',
    component: myLove
  },
  { 
    path: '/playHistory',
    name: 'playHistory',
    component: playHistory
  },
  { 
    path: '/videoView',
    name: 'videoView',
    component: videoView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
