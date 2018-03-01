import Vue from 'vue'
import Router from 'vue-router'

let comps = {
  Home: () => require('@/pages/home/Home.vue').default
}

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: comps.Home()
    },
    {
      path: '/find',
      name: 'Find',
      component: comps.Home()
    },
    {
      path: '/order',
      name: 'Order',
      component: comps.Home()
    },
    {
      path: '/my',
      name: 'My',
      component: comps.Home()
    },
    {
      path: '/search',
      name: 'Search',
      component: comps.Home()
    }
  ]
})
