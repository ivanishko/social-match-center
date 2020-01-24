import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import {router} from './assets/router.js'

import {store} from './store/'

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
