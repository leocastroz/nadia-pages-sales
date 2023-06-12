import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../pages/AboutView.vue')
    },
    {
      path: '/pex',
      name: 'pex',
      component: () => import('../pages/PexPage.vue')
    }
  ]
})

const rewriteRoutes = [
  { source: '/', destination: '/' },
  { source: '/pex', destination: '../pages/PexPage.vue' }
]

rewriteRoutes.forEach(route => {
  router.addRoute(route)
})

export default router
