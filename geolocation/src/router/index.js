import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import GMap from '@/components/GMap'
import Signup from '../components/auth/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },

    {
      path: '/gmap',
      name: 'GMap',
      component: GMap
    },

    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ]
})
