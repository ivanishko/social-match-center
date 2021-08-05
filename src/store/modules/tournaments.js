import axios from "axios/index";
import {PORT} from './constants';


export default {
  namespaced: true,

    state : {
        tournaments: []
    },

    getters: {
        tournamentItems: (state) => state.tournaments
  },
    actions: {
        initTournaments(store) {
            //store.commit('clearItems');
            axios.get(`${BASE_URL}/tournaments`)
                .then(response => {
                    //console.log(response)
                    store.commit('LOAD_TOURNAMENTS',response.data)
                })
        },
    },

    mutations: {
        LOAD_TOURNAMENTS(state, data) {
            state.tournaments = data;
        }
    },
}
