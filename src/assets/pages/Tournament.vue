<template>
  <div>
    <p>Tournament - {{id}}</p>
    <router-link :to="{name: 'Tournaments'}">Back to tournaments list</router-link>

    <h1> {{tournamentItem.name}}</h1>


  </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        name: "Tournament",
        computed: {
            id() {
                return this.$route.params.id;
            },
            ...mapGetters('tournament', {
                tournamentItem: 'item'
            }),
        }
    }
</script>

<style scoped>

</style>
