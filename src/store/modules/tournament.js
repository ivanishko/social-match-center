import axios from "axios";
import {PORT} from './constants';


export default {
  namespaced: true,

  state: {
    tournament: {}
  },


  getters: {
    item(state) {
      return state.tournament;
    },
    name(state) {
      return state.tournament.name_translate;
    },
    local(state) {
      return state.tournament.loc_translate;
    },
    region(state) {
      return state.tournament.reg_translate;
    },
  },

  actions: {
    loadTournament(store,id)  {
      axios.get(`${BASE_URL}/tournaments/` + id)
        .then(response => {
          //console.log(response)
          console.log(response.data);
          store.commit('INIT_TOURNAMENT',response.data)
        })
    },
  },
  mutations: {
    INIT_TOURNAMENT(state, data){
      state.tournament = data;
    },
  },

}
