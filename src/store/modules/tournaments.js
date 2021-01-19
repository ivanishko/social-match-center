import axios from "axios/index";


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
            axios.get(`http://localhost:3000/tournaments`)
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
