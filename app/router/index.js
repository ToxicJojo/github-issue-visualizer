import Vue from 'vue'
import Router from 'vue-router'

import Presentation from './../components/Presentation.vue'
import Playground from './../components/Playground.vue'


Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Presentation,
    },
    {
      path: '/playground',
      name: 'presentation',
      component: Playground,
    },
  ]
})

export default router
