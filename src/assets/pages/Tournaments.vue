<template>
  <div>
      <h1>{{name}}</h1>
      <div class="list-group match-items">
          <ul>
              <li v-for="tournament in tournamentsLoad" :key="tournament.id" >
                  <router-link  class="tournament" :to="'../tournament/' + tournament.id">
                      {{tournament.reg_translate}} - {{tournament.name_translate}} {{tournament.loc_translate}}
                  </router-link>
              </li>
          </ul>

      </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        name: "Tournaments",
        computed: {
            ...mapGetters('tournaments', {
                tournamentsLoad: 'tournamentItems'
            }

            )

        },
        created() {
            console.log('2');
            this.$store.dispatch('tournaments/initTournaments');
        },
        methods: {
            ...mapActions('tournaments', {
                initTournaments: 'tournamentsLoad'
            }),
        },
        data() {
            return {
                name: "Турниры",
            }
        }
    }
</script>

<style scoped>

</style>
