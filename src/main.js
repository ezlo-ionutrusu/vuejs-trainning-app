import Vue from 'vue';
import Buefy from 'buefy';
import axios from 'axios';
import VueAxios from 'vue-axios';
import NProgress from 'nprogress';

import App from './App.vue';
import router from './router/index';

import store from './vuex/index';
import './registerServiceWorker';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios);
Vue.use(Buefy);

global.NProgress = NProgress;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
