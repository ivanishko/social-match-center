import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  namespaced: true,

state : {
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
    }
    ]
},
    mutations: {

},
getters: {
  tournaments(state) {
    return state.tournaments
  },
},
actions: {

}
}
