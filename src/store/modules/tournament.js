import axios from "axios";


export default {
  namespaced: true,

  state: {
    tournament: {}
  },
  mutations: {
    initTournament(state, data){
      state.tournament = data;
    },
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
      axios.get(`http://localhost:3000/tournaments/` + id)
        .then(response => {
          //console.log(response)
          console.log(response.data);
          store.commit('initTournament',response.data)
        })
    },
  }

}
