<template>
  <div>
    <h1>Matches</h1>
            <div class="list-group match-items">
              <a v-for="match in matches" :key="match.id" :href="'../match/' + match.id" class="list-group-item list-group-item-action match-item">
                <span class="team1">{{match.team1.translate}}</span>
                <span class="count">{{match.team1["totalScore:"]}} - {{match.team2["totalScore:"]}}</span>
                <span class="team2">{{match.team2.translate}}</span>
              </a>

          </div>
  </div>
</template>

<script>
    export default {
        name: "Matches",
        data() {
            return {
                matches: [
                    {
                        "id" : 1,
                        "tournament": "1liga",
                        "ligue": "1zona",
                        "team1": {
                            "name" : "Kuban",
                            "totalScore:" : "3",
                            "translate" : "Кубань"
                        },
                        "team2": {
                            "name" : "Urojay",
                            "totalScore:" : "0",
                            "translate" : "Урожай"
                        },
                    },
                    {
                        "id" : 2,
                        "tournament": "1liga",
                        "ligue": "1zona",
                        "team1": {
                            "name" : "Benec",
                            "totalScore:" : "2",
                            "translate" : "Венец"
                        },
                        "team2": {
                            "name" : "Loko",
                            "totalScore:" : "1",
                            "translate" : "Локомотив"
                        },
                    }
                ]
            }
        }

    }
</script>

<style>
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
    display: flex;
    border: 1px solid #2c3e50;
    flex-grow: 1;
align-items: center
  }
  .count {
    font-size: 40px;
  }
</style>
