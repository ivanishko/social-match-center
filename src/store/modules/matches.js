import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  namespaced: true,

  state : {

    matches:[
    {
      "id": 1,
      "tournament": "1liga",
      "ligue": "1zona",
      match_status: "Не начался",
      "team1": {
        "name": "Kuban2",
        "totalScore": "0",
        "name_translate": "Кубань2",
        "loc_translate": "Усть-Лабинск"
      },
      "team1name": "Кубань2",
      "team2": {
        "name": "Urojay",
        "totalScore": "0",
        "name_translate": "Урожай",
        "loc_translate": "Ивановская"
      },
    },
    {
      "id": 2,
      "tournament": "1liga",
      "ligue": "1zona",
      match_status: "Не начался",
      "team1": {
        "name": "Benec",
        "totalScore": "0",
        "name_translate": "Венец",
        "loc_translate": "Гулькевичи"
      },
      "team2": {
        "name": "Loko",
        "totalScore": "0",
        "name_translate": "Локомотив",
        "loc_translate": "Кропоткин"
      },
    }
    ]
  },
mutations: {

  upPoint1(state, match){
    state.team1.totalScore++;

  },
  // upPoint2(state){
  //   state.team2.totalScore++;
  // },
  // downPoint1(state){
  //   if (state.team1["totalScore"] !== 0){
  //     state.team1.totalScore--;
  //   }
  // },
  // downPoint2(state){
  //   if (state.team2["totalScore"] !== 0){
  //     state.team2.totalScore--;
  //   }
  // },
  // checkStatus(status) {
  //   state.match_status  = status;
  //   console.log(state.match_status );
  //
  // }

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
  upPoint1(store, item){
    store.commit('upPoint1',item);
  }
  // upPoint2:
  // downPoint1:
  // downPoint2:
  // checkStatus:
}
}
