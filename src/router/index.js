import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/news',
  },
  {
    path: '/news',
    component: () => import('@/views/NewsView'),
  },
  {
    path: '/ask',
    component: () => import('@/views/AskView'),
  },
  {
    path: '/jobs',
    component: () => import('@/views/JobsView'),
  },
  {
    path: '/item',
    component: () => import('@/views/ItemView'),
  },
  {
    path: '/user',
    component: () => import('@/views/UserView'),
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
