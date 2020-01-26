<template>
    <p>Tournament - {{id}}</p>
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
