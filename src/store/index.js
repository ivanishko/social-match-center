import Vue from "vue";
import Vuex from 'vuex';
import matches from './modules/matches';
import tournaments from './modules/tournaments';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
      matches,
      tournaments
  }
});
