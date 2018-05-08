import Vue from 'vue'
import App from './App.vue'

import store  from './store'

const vueApp = new Vue({
  el: '#app',
  render: h => h(App),
  store,
})
