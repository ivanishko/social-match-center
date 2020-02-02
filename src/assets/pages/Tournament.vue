<template>
  <div>
    <p>Tournament - {{id}}</p>
    <router-link :to="{name: 'tournaments'}">Back to tournaments list</router-link>
  </div>
</template>

<script>
    export default {
        name: "Tournament",
        computed: {
            id() {
                return this.$route.params.id;
            }
        }
    }
</script>

<style scoped>

</style>
