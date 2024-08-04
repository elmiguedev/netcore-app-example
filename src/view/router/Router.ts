import { createMemoryHistory, createRouter } from 'vue-router'

import Home from '../pages/home/Home.vue';
import Empleados from '../pages/empleados/Empleados.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/empleados', component: Empleados },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router