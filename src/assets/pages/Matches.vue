<template>
  <div>
    <h1>Matches</h1>
            <div class="list-group match-items">
              <a v-for="match in matchesItems" :key="match.id" :href="'../match/' + match.id" class="list-group-item list-group-item-action match-item">
                <span class="team1"><p>{{match.team1.name_translate}}</p> {{match.team1.loc_translate}}</span>
                <span class="count">{{match.team1["totalScore"]}} - {{match.team2["totalScore"]}}</span>
                <span class="team2"><p>{{match.team2.name_translate}}</p> {{match.team2.loc_translate}}</span>
                <span class="status">{{match.match_status}}</span>
              </a>
            </div>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
    export default {
        name: "Matches",

        created(){
            this.$http.get('matches.php')
                .then(response => response.json())
                .then(data  => {
                    console.log(data)
                });
        },

        methods: {
            ...mapGetters('matches', {

        }),

        },

        computed: {
            ...mapGetters('matches',{
                matchesItems: 'matches'
            })

        },
        data() {
            return {

            }
        }

    }
</script>

<style lang="scss" scoped>
  .match-items {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }
  .match-item {
    display: flex;
    justify-content: space-between;

  }
  .team1, .team2, .count {
    display: block;
    //border: 1px solid #2c3e50;
    width: 33%;
    align-items: center;

    p {
      margin-bottom: 0;
    }

  }

  .count {
    font-size: 36px;
  }
  .alert {
    margin: 10px;
  }
</style>
