import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
     cnt: 0,
     price: 1000,
     orderState: null,
     matches:[
       {
         "id": 1,
         "tournament": "1liga",
         "ligue": "1zona",
         match_status: "Не начался",
         "team1": {
           "name": "Kuban",
           "totalScore": "0",
           "name_translate": "Кубань",
           "loc_translate": "Усть-Лабинск"

         },
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
     ],
     tournaments: [
       {
         "id":1,
         "name": "liga1",
         "local": "zona1",
         "name_translate": "1 лига",
         "loc_translate": "1 зона",
         "region": "Krasnodarsky kray",
         "reg_translate": "Краснодарский край"
       },
       {
         "id":2,
         "name": "liga1",
         "local": "zona2",
         "name_translate": "1 лига",
         "loc_translate": "2 зона",
         "region": "Krasnodarsky kray",
         "reg_translate": "Краснодарский край"
       },
       {
         "id":3,
         "name": "liga1",
         "local": "zona3",
         "name_translate": "1 лига",
         "loc_translate": "3 зона",
         "region": "Krasnodarsky kray",
         "reg_translate": "Краснодарский край"
       },
       {
         "id":4,
         "name": "liga1",
         "local": "zona4",
         "name_translate": "1 лига",
         "loc_translate": "4 зона",
         "region": "Krasnodarsky kray",
         "reg_translate": "Краснодарский край"
       },
       {
         "id":5,
         "name": "vishaya",
         "local":  "",
         "name_translate": "Высшая лига",
         "loc_translate": "",
         "region": "Krasnodarsky kray",
         "reg_translate": "Краснодарский край"
       },
     ]
   },
  mutations: {
      minus(state){
        if (state.cnt > 0){
          state.cnt--;
        }
     },
      plus(state){
          state.cnt++;
     },
      send(state){
       state.orderState = 'done';
    },

  },
  getters: {
      cnt(state) {
       return  state.cnt;
     },
      price(state){
       return state.price;
    },
      total(state){
       return state.price * state.cnt;
    },
      orderState(state){
      return state.orderState;
    },
      matches(state){
        return state.matches
    },
      matchesMap(state){
        let matchesMap = {};
        for (let i = 0; i < state.matches.length; i++){
          let match = state.matches[i];
          matchesMap[match.id] = match;
        }
        return matchesMap;
    },
      item: (state,  getters) => (id) => {
      return getters.matchesMap[id];
    },
      tournaments(state){
      return state.tournaments
    },

  }
});
