import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/pages/home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/film/:id(\\d+)',
    name: 'Film',
    props: true,
    component: () => import(/* webpackChunkName: "about" */ '@/pages/film.vue'),
  },
  {
    path: '*',
    name: 'error',
    component: () => import('@/pages/error.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
