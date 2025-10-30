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
      component: () => import('../views/TrabalheConosco.vue'),
    },
  ],

  // ✅ Faz com que a página volte ao topo ao mudar de rota
  scrollBehavior(to, from, savedPosition) {
    // Se o usuário usou o botão de voltar/avançar, restaura a posição anterior
    if (savedPosition) {
      return savedPosition
    } else {
      // Caso contrário, sempre volta ao topo
      return { top: 0, behavior: 'smooth' } // "smooth" deixa a rolagem animada
    }
  },
})

export default router
