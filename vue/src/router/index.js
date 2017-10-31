import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/views/Movie'
import MovieMain from '@/views/MovieMain'
import Zoom from '@/views/Zoom'
import login from '@/views/login'
import detailed from '@/views/detailed'
import pix from '@/views/pix'
import xiangqing from '@/views/xiangqing'

Vue.use(Router)
let newRouter = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x:0, y:0}
    }
  },
  routes: [
    {
      path: '/',
      redirect: '/movie'
    },
    {
      path: '/movie',
      name: 'Movie',
      component: Movie
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/MovieMain',
      name: 'MovieMain',
      component: MovieMain
    },
    {
      path: '/zoom',
      name: 'Zoom',
      component: Zoom,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/detailed',
      name: 'detailed',
      component: detailed
    },
    {
      path: '/pix',
      name: 'pix',
      component: pix
    }
  ]
})
newRouter.beforeEach((to, from, next) => {
  let userInformation = JSON.parse(window.localStorage.getItem('userInformation'))
  if (to.meta.isLogin && !userInformation) {
    window.localStorage.setItem('toPath', to.path)
    next('login')
  } else {
    next()
  }
})

export default newRouter
