import Vue from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faUser, faSort, faCalendarDay, faStarOfLife, faStar, faCalendar, faClock, faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faCheckCircle, faInfoCircle, faExclamationTriangle, faExclamationCircle,
  faArrowUp, faAngleRight, faAngleLeft, faAngleDown,
  faEye, faEyeSlash, faCaretDown, faCaretUp, faUpload, faUser, faSort, faCalendarDay, faStarOfLife, faStar, faCalendar,faClock, faChevronUp, faChevronDown);

Vue.component('vue-fontawesome', FontAwesomeIcon);


import Buefy from 'buefy';
import 'buefy/dist/buefy.css';

import "./assets/filters"


import {router} from './router'
import {store} from './store/'

import VueResource from 'vue-resource'


Vue.use(VueResource);
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fas',
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
