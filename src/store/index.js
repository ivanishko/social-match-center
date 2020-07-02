import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

import matches from './modules/matches';
import match from './modules/match';
import users from './modules/users';
import tournaments from './modules/tournaments';
import tournament from './modules/tournament';




export const store = new Vuex.Store({
    modules: {
        matches,
        tournaments,
        tournament,
        match,
        users
  },
    strict: process.env.NODE_ENV !== 'production'
});
