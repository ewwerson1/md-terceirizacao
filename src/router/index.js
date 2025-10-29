import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/sobre',
      name: 'sobre',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/servicos',
      name: 'servicos',
    
      component: () => import('../views/ServicosView.vue'),
    },
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/ContatoView.vue'),
    },
    {
      path: '/trabalhe-conosco',
      name: 'trabalhe-conosco',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/TrabalheConosco.vue'),
    },
  ],
})

export default router
