import axios from 'axios';
import {PORT} from './constants';


export default {
  namespaced: true,

  state : {
    matches: []
  },

  getters: {
      matchesMap(state) {
        let matchesMap = {};
        for (let i = 0; i < state.matches.length; i++) {
          let match = state.matches[i];
          matchesMapgi[match.id] = match;
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
      axios.get(`http://localhost:${PORT}/matches`)
          .then(response => {
            //console.log(response)
            store.commit('LOAD_MATCHES', response.data)
          })
    },



  },


  mutations: {
    LOAD_MATCHES(state, data) {
      state.matches = data;
    },

  },
}
