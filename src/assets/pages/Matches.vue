<template>
  <div>
    <h1>Матчи</h1>
      <Calendar />
      <b-collapse
              class="card"
              animation="slide"
              v-for="(collapse, index) of collapses"
              :key="index"

              @open="isOpen = !isOpen"
              >
          <div slot="trigger"
                  slot-scope="props"
                  class="card-header"
                  role="button">
              <p class="card-header-title">
                  {{ collapse.title }}
              </p>

              <a class="card-header-icon">
                  <b-icon
                         >
                  </b-icon>
              </a>
          </div>


          <div class="match-items card-content">
              <div class="content">
              <router-link v-for="match in matchesItems" :key="match.id" :to="'../match/' + match.id" class="match-item">
                  <div class="forward">
                      <p>Star</p>
                  </div>
                  <div class="teams">
                      <div class="team1">
                          {{match.team1.name_translate}} {{match.team1.local}}
                      </div>
                      <div class="team2">
                          {{match.team2.name_translate}} {{match.team2.local}}
                      </div>
                  </div>
                  <div class="count" v-if="match.match_status != 'ns'">
                      <p>{{match.team1["totalScore"]}}</p>
                      <p>{{match.team2["totalScore"]}}</p>
                  </div>
                  <div class="count" v-else>
                      <p>-</p>
                      <p>-</p>
                  </div>
                  <div class="status" v-if="match.match_status != 'ns'"  :class="{intime : statusMatch(match.match_status)}" > {{match.match_status | formatStatusList }} </div>
                  <div class="status" v-else>  {{match.datetime | formatTime}}  </div>
              </router-link>
            </div>
          </div>

      </b-collapse>


  </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';
    import Calendar from "../components/Calendar";


    export default {
        name: "Matches",
        components: {
            Calendar
        },
        data() {
            return {
                matches: [],
                isOpen: 0,
                collapses: [
                    {
                        title: 'Title 1',
                        text: 'Text 1'
                    },

                    {
                        title: 'Title 2',
                        text: 'Text 2'
                    },
                    {
                        title: 'Title 3',
                        text: 'Text 3'
                    }
                    ]
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
            statusMatch(status){
                if (status == '1t' || status == '2t' || status == 'ht'   )
                return true;
            }
        },

        computed: {
            ...mapGetters('matches',{
                matchesItems: 'matches'
            }),


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
      border-bottom: 1px dotted #aaa ;
    }

    .team1, .team2, .count {
       display: block;
       //border: 1px solid #2c3e50;

       p {
         margin-bottom: 0;
       }


     }
    .status,.forward {
      width: 10%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
      .intime {
          color: red;
      }

  }
  .count {
      color: #333;
      font-weight: bold;
      width: 15px;
  }
  .alert {
    margin: 10px;
  }
  .collapse:not(.show) {
      display: block;
  }
</style>
