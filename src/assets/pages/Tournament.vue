<template>
  <div>
    <p>Tournament - {{id}}</p>
    <router-link :to="{name: 'Tournaments'}">Back to tournaments list</router-link>

    <h1> {{Name}}  - {{Region}}</h1>
    <h2>  {{Local}}</h2>

  </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    import {mapActions} from 'vuex';

    export default {
        name: "Tournament",
        data(){
            return {

            }
        },
        created(){
            console.log('tournament');
            this.$store.dispatch('tournament/loadTournament',this.id);

        },
        computed: {
            id() {
                return this.$route.params.id;
            },
            ...mapGetters('tournament', {
                tournamentItem: 'item',
                Name: 'name',
                Local: 'local',
                Region: 'region',

            }),
        },
        methods: {
            ...mapActions('tournament', {
                load: 'loadMatch'
            }
            )
        }
    }
</script>

<style scoped>

</style>
