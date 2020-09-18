import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import "./assets/css/index.css"
import "./assets/fontIcon/iconfont.css"
import request from "./network/request"
Vue.use(element)
Vue.config.productionTip = false
Vue.prototype.request = request;
Vue.prototype.$event = new Vue();
const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

