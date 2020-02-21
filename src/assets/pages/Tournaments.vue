<template>
  <div>
      <h1>{{name}}</h1>
      <div class="list-group match-items">
        <a v-for="tournament in tournamentItems" :key="tournament.id" :href="'../tournament/' + tournament.id" class="list-group-item list-group-item-action match-item">
          <span class="tournament"><p>{{tournament.reg_translate}}  {{tournament.name_translate}} {{tournament.loc_translate}}</p> </span>
        </a>
      </div>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapMutations} from 'vuex';
    export default {
        name: "Tournaments",
        computed: {
            ...mapGetters('tournaments', {
                tournamentItems: 'tournaments'
            }

            )

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
