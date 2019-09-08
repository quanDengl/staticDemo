import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './stores';

// 引入axios请求模块
import axios from 'axios';
Vue.prototype.axios = axios;

// 定义一个图片过滤器
Vue.filter('setWH', (url, arg) => {
  return url.replace(/w\.h/, arg);
})

// 定义一个全局组件
import scroller from '@/components/scroll';
Vue.component('scroller', scroller);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
