<template>
<header>
  <div class="header">
    <h2>{{msg}}</h2>
  </div>
</header>
</template>

<script>

    export default {
        data() {
            return {

            }
        },
        components: {

        },
        props: {
            msg: {

            }
        }
    }

</script>

<style lang="scss">
.header {
  margin: 10px 0;
  width: 100%;
 // background: #42b983;
  height: 60px;
}
</style>
