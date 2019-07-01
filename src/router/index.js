import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/login/containers/Page/index';
import store from "../vuex/index";

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/dashboard/containers/Page/index'),
      children: [{
          path: '/',
          component: () => import('@/main/containers/Page/index'),
        }, {
          path: '/dashboard/devices',
          name: 'devices',
          component: () => import('@/devices/containers/Page/index'),
        }, {
          path: '/dashboard/devices/:id',
          name: 'category-models',
          component: () => import('@/devices/containers/CategoryModels/index'),
        }, {
          path: '/dashboard/users',
          name: 'users',
          component: () => import('@/users/containers/Page/index'),
        }, {
          path: '/dashboard/users/add',
          name: 'users-add',
          component: () => import('@/users/containers/AddUser/index'),
        },
        {
          path: '/dashboard/settings',
          name: 'settings',
          component: () => import('@/settings/containers/Page/index'),
        }
      ]
    },
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '*',
      name: 'notfount',
      component: Login,
    },
  ],
});

export default router;
router.beforeEach(async (to, from, next) => {
  if (!store.getters["login/getLoginData"].isAuth && to.path !== "/") {
    return next("/");
  }

  next();
});
