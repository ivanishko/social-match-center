<template>
  <div>
    <div class="match-item">
        <span class="team1"><p>{{match.team1.name_translate}}</p> {{match.team1.loc_translate}}</span>
        <span class="count">{{match.team1["totalScore:"]}} - {{match.team2["totalScore:"]}}</span>
        <span class="team2"><p>{{match.team2.name_translate}}</p> {{match.team2.loc_translate}}</span>
    </div>
    <router-link :to="{name: 'matches'}">Back to match list</router-link>
  </div>

</template>

<script>
    export default {
        name: "Match",
        computed: {
            id() {
                return this.$route.params.id;
            },
            match(){
                return this.$store.getters['item'](this.id)
            }
        }
    }
</script>

<style  lang="scss">
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

</style>
