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

export default router
