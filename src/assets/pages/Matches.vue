<template>
  <div>
    <h1>Matches</h1>
            <div class="match-items">
              <router-link v-for="match in matchesItems" :key="match.id" :to="'../match/' + match.id" class="match-item">
                  <div class="datetime"> {{match.datetime | filterTime}} </div>
                  <div class="teams">
                    <div class="team1">
                      {{match.team1.name_translate}} {{match.team1.local}}
                    </div>
                    <div class="team2">
                      {{match.team2.name_translate}} {{match.team2.local}}
                    </div>
                  </div>
                  <div class="count">
                    <p>{{match.team1["totalScore"]}}</p>
                    <p>{{match.team2["totalScore"]}}</p>
                  </div>

                  <div class="status">{{match.match_status | filterStatus }}</div>
              </router-link>
            </div>

  </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        name: "Matches",
        data() {
            return {
                matches: []
            }
        },

        created(){
            console.log('1');
            this.$store.dispatch('matches/initMatches');

        },

        methods: {
            ...mapActions('matches', {
                initMatches: 'loadMatches'
        }),

        },

        computed: {
            ...mapGetters('matches',{
                matchesItems: 'matches'
            })

        },
        filters: {
            filterTime: function(d) {
                let date = new Date(d);
                  let dd = date.getDate();
                  if (dd < 10) dd = '0' + dd;

                  let mm = date.getMonth() + 1;
                  if (mm < 10) mm = '0' + mm;

                  let yy = date.getFullYear() % 100;
                  if (yy < 10) yy = '0' + yy;

                    let hh = date.getHours() % 24 ;
                    if (hh < 10) hh = '0' + hh;

                    let mi = date.getMinutes() % 60 ;
                    if (mi < 10) mi = '0' + mi;

                return dd + '.' + mm + '.' + yy + " \n " + hh + ':' + mi;
            },
            filterStatus: function (s) {
                return(s);
            }
        }

    }
</script>

<style lang="scss" scoped>
  a {
    color: #000;
  }
  .match-items {

    display: flex;
    flex-direction: column;
    align-items: baseline;

  }
  .match-item {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid #2c3e50;
      line-height: 2em;

    .teams {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      margin-left: 5px;
    }

    .datetime {
      display: flex;
      align-items: center;

    }
    .team1 {
      border-bottom: 1px solid #aaa ;
    }

    .team1, .team2, .count {
       display: block;
       //border: 1px solid #2c3e50;

       p {
         margin-bottom: 0;
       }


     }
    .status {
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }

  }
  .count {
      color: #333;
      font-weight: bold;
  }
  .alert {
    margin: 10px;
  }
</style>
