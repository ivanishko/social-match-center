import axios from "axios";


export default {
  namespaced: true,

  state: {
      match: {}
  },
  mutations: {
      initMatch(state, data){
          state.match = data;
      },

      upPoint1(state) {
          state.match.team1.totalScore++;
      },
      upPoint2(state){
        state.match.team2.totalScore++;
      },
      downPoint1(state){
        if (state.match.team1["totalScore"] !== 0){
          state.match.team1.totalScore--;
        }
      },
      downPoint2(state){
        if (state.match.team2["totalScore"] !== 0){
          state.match.team2.totalScore--;
        }
      },
      checkStatus(status) {
        state.match.match_status  = status;
        console.log(state.match .match_status );

      }

  },
  getters: {
      item(state) {
            return state.match;
      },
      progress(state){
          if (state.match.match_status === '1t' || state.match.match_status === '2t' || state.match.match_status === 'ht')
          return true
      },
      time (state) {
          if (state.match.match_status === '1t' || state.match.match_status === '2t')
              return true
      },
      fulltime (state) {
          if (state.match.match_status === 'ft')
              return true
      }
  },
  actions: {
      loadMatch(store,id)  {
          axios.get(`http://localhost:3000/matches/` + id)
              .then(response => {
                  //console.log(response)
                  console.log(response.data);
                  store.commit('initMatch',response.data)
              })
      },

        checkStatus() {
          console.log('checkStatus')
        }
  }

}