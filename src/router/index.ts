import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },

  {
    path: '/login',
    component: () => import('@/views/LoginPage.vue')
  },

  {
    path: '/cadastro',
    component: () => import('@/views/CadastroPage.vue')
  },

  {
    path: '/termos',
    component: () => import('@/views/TermosPage.vue')
  },

  {
    path: '/privacidade',
    component: () => import('@/views/PrivacidadePage.vue')
  },

  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1'
      },

      {
        path: 'tab1',
        component: () => import('@/views/HomePage.vue')
      },

      {
        path: 'tab2',
        component: () => import('@/views/SobrePage.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

localStorage.removeItem('logado');

router.beforeEach((to) => {

  const logado = localStorage.getItem('logado');

  const paginaProtegida = to.path.startsWith('/tabs');

  if (paginaProtegida && logado !== 'true') {
    return '/login';
  }

  if (to.path === '/login' && logado === 'true') {
    return '/tabs/tab1';
  }

  return true;
});

export default router;