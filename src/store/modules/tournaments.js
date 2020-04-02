import Vue from "vue";
import Vuex from 'vuex';
import axios from "axios/index";

Vue.use(Vuex);

export default {
  namespaced: true,

state : {
    tournaments: []
  },
    mutations: {
        loadTournaments(state, data) {
            state.tournaments = data;
        }
  },
    getters: {
        tournamentItems: (state) => state.tournaments
  },
    actions: {
        initTournaments(store) {
            //store.commit('clearItems');
            axios.get(`http://localhost:3000/tournaments`)
                .then(response => {
                    //console.log(response)
                    store.commit('loadTournaments',response.data)
                })
        },
  }
}
