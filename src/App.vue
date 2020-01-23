<template>
  <div id="app">
    <app-header></app-header>
   <h1>{{msg}}</h1>
    <ul v-for="match in matches">
      <li>{{match.id}}. {{match.team1.translate}} - {{match.team2.translate}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
        msg: 'Social match center',

        matches: [
            {
                "id" : 1,
                "tournament": "1liga",
                "ligue": "1zona",
                "team1": {
                    "name" : "Kuban",
                    "totalScore:" : "2",
                    "translate" : "Кубань"
                },
                "team2": {
                    "name" : "Urojay",
                    "totalScore:" : "2",
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
                    "totalScore:" : "2",
                    "translate" : "Локомотив"
                },
            }
        ]
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
