import Vue from 'vue'
import Vuex from 'vuex'

import movie from './modules/movie'
import movieMain from './modules/movieMain'
import zoom from './modules/zoom'

Vue.use( Vuex )

const store = new Vuex.Store({
  state: {
    count: 1,
    num: 10
  },
  modules: {
    movie,
    movieMain,
    zoom
  }
})

export default store