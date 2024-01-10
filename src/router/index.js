import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import CrownBed from '@/pages/CrownBed.vue';
import Anima from '@/pages/Anima.vue';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/aboutme',
    component: About,
  },
  {
    path: '/anima',
    component: Anima,
  },
  {
    path: '/crownbed',
    component: CrownBed,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;