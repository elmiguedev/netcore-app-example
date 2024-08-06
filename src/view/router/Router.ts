import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/home/Home.vue';
import Empleados from '../pages/empleados/Empleados.vue';
import Login from '../pages/login/Login.vue';
import { AuthService } from '../../core/services/AuthService';

const routes = [
  { path: '/', component: Home },
  { path: '/empleados', component: Empleados },
  { path: '/login', component: Login },
]


const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path !== '/login' && !AuthService.isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
})

export default router