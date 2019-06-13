import Vue from 'vue';
import Vuex from 'vuex';

import main from '@/main/vuex/index';
import devices from '@/devices/vuex/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    main,
    devices,
  },
  strict: process.env.NODE_ENV !== 'production',
});
global.store = store;
export default store;
