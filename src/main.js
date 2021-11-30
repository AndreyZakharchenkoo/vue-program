import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LazyLoadDirective from './directives/LazyLoadDirective.js'
import '@/assets/main.scss'

Vue.config.productionTip = false

Vue.directive('lazyload', LazyLoadDirective)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
