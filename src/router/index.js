import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import AboutView from '../pages/AboutView.vue';
import PexPage from '../pages/PexPage.vue';
import NotFound from '../components/NotFound.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/pex',
      name: 'pex',
      component: PexPage,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFound,
      beforeEnter: (to, from, next) => {
        if (to.path === '/') {
          next('/pex');
        } else {
          next();
        }
      },
    },
  ],
});

export default router;
