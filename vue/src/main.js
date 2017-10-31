import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import mock from './mock'
import http from './http/'
import store from './store/'

import './static/lib/zepto.min'

import directives from './directive'

for (let key in directives) {
  Vue.directive(key, directives[key])
}
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: {App}
})

