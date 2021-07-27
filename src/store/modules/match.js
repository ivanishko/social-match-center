import axios from "axios";
const PORT = '3004'

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
          axios.get(`http://localhost:` + `${PORT}` + `/matches/` + id)
              .then(response => {
                  //console.log(response)
                  console.log(response.data);
                  store.commit('INITMATCH',response.data)
              })
          },
          upPoint1(store, item){
              store.commit('UP_POINT1',item);
          },
          upPoint2(store, item){
              store.commit('UP_POINT2',item);
          },
          downPoint1(store, item){
              store.commit('DOWN_POINT1',item);
          },
          downPoint2(store, item){
              store.commit('DOWN_POINT2',item);
          },
          editStatus(store,item){
              store.commit('EDIT_STATUS',item);
          },
          toSaveMatch(store,payload){
              store.commit('TO_SAVE_MATCH',payload);
          }


      },

    mutations: {
        INITMATCH(state, data){
            state.match = data
        },

        UP_POINT1(state) {
            state.match.team1.totalScore++
        },
        UP_POINT2(state){
            state.match.team2.totalScore++
        },
        DOWN_POINT1(state){
            if (state.match.team1["totalScore"] !== 0){
                state.match.team1.totalScore--
            }
        },
        DOWN_POINT2(state){
            if (state.match.team2["totalScore"] !== 0){
                state.match.team2.totalScore--
            }
        },
        EDIT_STATUS(state,status) {
            console.log('status', status)
            state.match.match_status  = status;
            console.log(state.match.match_status )

        },
        TO_SAVE_MATCH(state, payload){
            console.log('payload', payload)
            state.match.match_status  = payload.match_status
        }

    }

}
