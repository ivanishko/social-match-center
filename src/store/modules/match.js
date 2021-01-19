import axios from "axios";


export default {
  namespaced: true,

  state: {
      match: {}
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
                      store.commit('INITMATCH',response.data)
                  })
          },

            checkStatus() {
              console.log('checkStatus')
            }
      },

    mutations: {
        INITMATCH(state, data){
            state.match = data;
        },

        UPPOINT1(state) {
            state.match.team1.totalScore++;
        },
        UPPOINT2(state){
            state.match.team2.totalScore++;
        },
        DOWNPOINT1(state){
            if (state.match.team1["totalScore"] !== 0){
                state.match.team1.totalScore--;
            }
        },
        DOWNPOINT2(state){
            if (state.match.team2["totalScore"] !== 0){
                state.match.team2.totalScore--;
            }
        },
        CHECKSTATUS(status) {
            state.match.match_status  = status;
            console.log(state.match .match_status );

        }

    }

}
