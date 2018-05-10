import Vue from 'vue'
import Vuex from 'vuex'

import labels from './labels'
import repository from './repository'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    repository,
  },
})

export default store