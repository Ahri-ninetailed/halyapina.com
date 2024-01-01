import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Project from '@/pages/Project.vue';

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
    path: '/lines',
    component: Project,
    props: { projectName: 'lines' }
  },
  {
    path: '/dragonfly',
    component: Project,
    props: { projectName: 'dragonfly' }
  },
  {
    path: '/firefly',
    component: Project,
    props: { projectName: 'firefly' }
  },
  {
    path: '/fennel',
    component: Project,
    props: { projectName: 'fennel' }
  },
  {
    path: '/alien',
    component: Project,
    props: { projectName: 'alien' }
  },
  {
    path: '/ufo',
    component: Project,
    props: { projectName: 'ufo' }
  },
  {
    path: '/spacejam',
    component: Project,
    props: { projectName: 'spacejam' }
  },
  {
    path: '/bubble',
    component: Project,
    props: { projectName: 'bubble' }
  },
  {
    path: '/crownbed',
    component: Project,
    props: { projectName: 'crownbed' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;