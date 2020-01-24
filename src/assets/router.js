import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Matches from './pages/Matches'
import Tournaments from './pages/Tournaments'
import E404 from './pages/E404'

const routes = [
  {
    path: '',
    component: Matches
  },
  {
    path: '/matches',
    component: Matches
  },
  {
    path: '/tournaments',
    component: Tournaments
  },
  {
    path: '*',
    component: E404
  }
];

export const router = new VueRouter({
  routes,
  mode: 'history'
});
