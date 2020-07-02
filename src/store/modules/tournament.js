import axios from "axios";


export default {
  namespaced: true,

  state: {
    tournament: {}
  },
  mutations: {},

  getters: {
    item(state) {
      return state.match;
    },
  },

  actions: {},

}
