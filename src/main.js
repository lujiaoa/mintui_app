import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入axios
import axios from 'axios'
import TheTabbar from './components/TheTabbar'
import MintUI from "mint-ui"
import "mint-ui/lib/style.min.css";
// 注册为vue组件
Vue.use(MintUI)
axios.defaults.baseURL= 'http://127.0.0.1:3000';
Vue.prototype.axios = axios;

Vue.config.productionTip = false
Vue.config.devtools=true;

// 全局组件
Vue.component("tabbar",TheTabbar)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
