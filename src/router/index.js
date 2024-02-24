import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Anima from '@/pages/Anima.vue';
//Импорт проектов
import CrownBed from '@/pages/projects/CrownBed.vue';
import SpaceJam from '@/pages/projects/SpaceJam.vue';
import Fennel from '@/pages/projects/Fennel.vue';

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
  //Пути проектов
  {
    path: '/crownbed',
    component: CrownBed,
  },
  {
    path: '/spacejam',
    component: SpaceJam,
  },
  {
    path: '/fennel',
    component: Fennel,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;