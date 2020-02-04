import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import {router} from './assets/router.js'
import {store} from './store/'

import VueResource from 'vue-resource'


Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.use(VueResource);

Vue.http.options.root = 'http://192.168.64.2/dashboard/api/';


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
