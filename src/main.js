import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import lazyLoadImg from './plugins/lazy-loading';
import ApiService from './core/api';
import '@/assets/main.scss';
// import 'vue-pagination-tw/styles';

Vue.config.productionTip = false;
Vue.use(lazyLoadImg);
Vue.prototype.$axios = axios;
ApiService.init();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
