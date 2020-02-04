<template>
  <div id="app">

    <Menu />

    <main id="page-wrap">
      <Header msg="Social Match Center" />

      <div class="container">
      <div class="row">
        <div class="col-lg-8 col-sm-12">
            <router-view>

            </router-view>


        </div>
        <div class="col-lg-4 col-sm-12">
          <p>БАННЕР</p>
        </div>

      </div>
    </div>
    </main>
  </div>

</template>

<script>
  import Header from "./assets/components/Header";
  import Menu from "./assets/components/Menu";
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
  name: 'app',
    components: {
        Header,
        Menu
    },
  data () {
    return {
        msg: 'Social match center',


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
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}


</style>
