<template>
  <div>
    <p>mmmatch - {{id}}</p>
    <router-link :to="{name: 'matches'}">Back to match list</router-link>
  </div>

</template>

<script>
    export default {
        name: "Match",
        computed: {
            id() {
                return this.$route.params.id;
            }
        }
    }
</script>

<style scoped>

</style>
