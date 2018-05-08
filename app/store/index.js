import Vue from 'vue'
import Vuex from 'vuex'

import labels from './labels'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    labels,
  },
})

export default store