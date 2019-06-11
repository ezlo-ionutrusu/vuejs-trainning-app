import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/main/containers/Page/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/devices',
      name: 'devices',
      component: () => import('@/devices/containers/Page/index'),
    },
  ],
});
