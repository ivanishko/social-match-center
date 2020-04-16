import Vue from 'vue';
import Router from 'vue-router';

import Matches from '../assets/pages/Matches'
import About from '../assets/pages/About'
import Match from '../assets/pages/Match'
import Login from '../assets/pages/Login'
import Tournaments from '../assets/pages/Tournaments'
import Tournament from '../assets/pages/Tournament'
import E404 from '../assets/pages/E404'
Vue.use(Router);




const routes = [
  {
      path: '/',
      name: 'Main',
      component: Matches
  },
    {
        path: '/about',
        name: 'About',
        component: About
    },
  {
    name: 'Matches',
    path: '/matches',
    component: Matches
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Match',
    path: '/match/:id',
    component: Match
  },
  {
    name: 'Tournaments',
    path: '/tournaments',
    component: Tournaments
  },
  {
    name: 'Tournament',
    path: '/tournament/:id',
    component: Tournament
  },
  {
    path: '*',
    component: E404
  }
];



export const router = new Router({
  routes,
  mode: 'history'
});

router.afterEach((to, from) => {
  console.log('afterEach')
})