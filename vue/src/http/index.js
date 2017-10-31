import Vue from 'vue'
import axios from 'axios'
import loading from '../plugin/loading'
var instance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
})

Vue.use(loading)
instance.interceptors.request.use(function (config) {
  Vue.prototype.$loading.show()
  return config;
}, function (error) {
  return Promise.reject(error);
})
instance.interceptors.response.use(function (response) {
  Vue.prototype.$loading.hide()
  return response;
}, function (error) {
  return Promise.reject(error);
})
Vue.prototype.$axios = instance

export default instance
