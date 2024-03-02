import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/Home.vue'),
  },
  {
    path: '/aboutme',
    component: () => import('@/pages/About.vue'),
  },
  {
    path: '/anima',
    component: () => import('@/pages/Anima.vue'),
  },
  // Другие маршруты вашего приложения
  {
    path: '/:pathMatch(.*)*',
    redirect: () => import('@/pages/Home.vue'),
  },
  //Пути проектов
  {
    path: '/crownbed',
    component: () => import('@/pages/projects/CrownBed.vue'),
  },
  {
    path: '/spacejam',
    component: () => import('@/pages/projects/SpaceJam.vue'),
  },
  {
    path: '/fennel',
    component: () => import('@/pages/projects/Fennel.vue'),
  },
  {
    path: '/alien',
    component: () => import('@/pages/projects/Alien.vue'),
  },
  {
    path: '/ufo',
    component: () => import('@/pages/projects/Ufo.vue'),
  },
  {
    path: '/bubble',
    component: () => import('@/pages/projects/Bubble.vue'),
  },
  {
    path: '/dragonfly',
    component: () => import('@/pages/projects/Dragonfly.vue'),
  },
  {
    path: '/firefly',
    component: () => import('@/pages/projects/Firefly.vue'),
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