import Vue from 'vue';
import App from './App.vue';
import router from './routers';
import store from './stores';

// 引入axios请求模块
import axios from 'axios'
Vue.prototype.axios = axios

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
