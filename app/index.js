import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'

import 'buefy/lib/buefy.css'

import store  from './store'
import router from './router'

Vue.use(Buefy)

const vueApp = new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router,
})
