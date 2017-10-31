<template>
  <div id="app">
  <keep-alive include="movie">
    <router-view></router-view>
  </keep-alive>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import '@/static/fonts/iconfont.css'
import '@/static/css/swiper.min.css'
import { mapGetters } from 'vuex'

export default {
  name: 'app'
}
</script>
<style>
</style>