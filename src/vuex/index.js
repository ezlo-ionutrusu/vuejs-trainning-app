import Vue from 'vue';
import Vuex from 'vuex';

import main from '@/main/vuex/index';
import devices from '@/devices/vuex/index';
import users from '@/users/vuex/index';
import login from '@/login/vuex/index';
import settings from '@/settings/vuex/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    main,
    devices,
    users,
    login,
    settings
  },
  strict: process.env.NODE_ENV !== 'production',
});
global.store = store;
export default store;
