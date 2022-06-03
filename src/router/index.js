import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('@/views/NewsView'),
  },
  {
    path: '/ask',
    name: 'ask',
    component: () => import('@/views/AskView'),
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: () => import('@/views/JobsView'),
  },
  {
    path: '/item/:id',
    component: () => import('@/views/ItemView'),
  },
  {
    path: '/user/:id',
    component: () => import('@/views/UserView'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
