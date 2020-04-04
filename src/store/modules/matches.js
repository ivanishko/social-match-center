import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default {
  namespaced: true,

  state : {
    matches: []
  },
  mutations: {
    loadMatches(state, data) {
      state.matches = data;
    },
},
  getters: {
      matchesMap(state) {
        let matchesMap = {};
        for (let i = 0; i < state.matches.length; i++) {
          let match = state.matches[i];
          matchesMap[match.id] = match;
        }
        return matchesMap;
    },
      matches(state) {
        return state.matches
    },

    item: (state, getters) => (id) => {
      return getters.matchesMap[id];
  },

},

  actions: {
    initMatches(store) {
        //store.commit('clearItems');
            axios.get(`http://localhost:3000/matches`)
                .then(response => {
                  //console.log(response)
                  store.commit('loadMatches',response.data)
                })
    },






  upPoint1(store, item){
    store.commit('upPoint1',item);
  }
  // upPoint2:
  // downPoint1:
  // downPoint2:
  // checkStatus:
}
}
