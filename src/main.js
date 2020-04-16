import Vue from 'vue'
import App from './App.vue'


import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import "./assets/filters"


import {router} from './router'
import {store} from './store/'

import VueResource from 'vue-resource'


Vue.use(VueResource);
Vue.use(Buefy);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
