import Vue from 'vue'
import Vuex from 'vuex'

import settings from './settings'
import repository from './repository'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    settings,
    repository,
  },
})

export default store