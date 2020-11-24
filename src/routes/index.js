import VueRouter from 'vue-router'

import Users from '@/components/Users'
import About from '@/components/About'

const routes = [
  { path: '/users', component: Users },
  { path: '/about', component: About }
]

const router = new VueRouter({
  mode: 'history',
  routes 
})

export default router
