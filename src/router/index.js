import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Anima from '@/pages/Anima.vue';
//Импорт проектов
import CrownBed from '@/pages/projects/CrownBed.vue';
import SpaceJam from '@/pages/projects/SpaceJam.vue';
import Fennel from '@/pages/projects/Fennel.vue';
import Alien from '@/pages/projects/Alien.vue';
import Ufo from '@/pages/projects/Ufo.vue';

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
  // Другие маршруты вашего приложения
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
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
  },
  {
    path: '/alien',
    component: Alien,
  },
  {
    path: '/ufo',
    component: Ufo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

import i18n from '../i18n'

router.beforeEach((to, from, next) => {
  let title = "";
  if (to.path === '/') {
    title = i18n.global.messages[i18n.global.locale].header.home;
  } else {
    let lastPathPart = to.path.substring(1);
    if (lastPathPart in i18n.global.messages[i18n.global.locale].header) {
      title = i18n.global.messages[i18n.global.locale].header[lastPathPart];
    } else if (lastPathPart in i18n.global.messages[i18n.global.locale].projects) {
      title = i18n.global.messages[i18n.global.locale].projects[lastPathPart];
    }
  }

  document.title = `${title} | ${i18n.global.messages[i18n.global.locale].surname}`;
  next();
});

export default router;