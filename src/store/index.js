import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
   state: {
     cnt: 0,
     price: 1000,
     orderState: null,
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
    }
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

  }
});
