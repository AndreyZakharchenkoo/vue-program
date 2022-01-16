import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lazyLoadImg from './plugins/lazy-loading.js'
import axios from 'axios'
import ApiService from './core/api'
import '@/assets/main.scss'

Vue.config.productionTip = false
Vue.use(lazyLoadImg)
Vue.prototype.$axios = axios
ApiService.init()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
