import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Matches from './pages/Matches'
import Match from './pages/Match'
import Tournaments from './pages/Tournaments'
import Tournament from './pages/Tournament'
import E404 from './pages/E404'

const routes = [
  {
    path: '',
    component: Matches
  },
  {
    name: 'matches',
    path: '/matches',
    component: Matches
  },
  {
    name: 'match',
    path: '/match/:id',
    component: Match
  },
  {
    name: 'tournaments',
    path: '/tournaments',
    component: Tournaments
  },
  {
    name: 'tournament',
    path: '/tournament/:id',
    component: Tournament
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
