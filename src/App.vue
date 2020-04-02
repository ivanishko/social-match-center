<template>
  <div id="app">

    <Menu />

    <main id="page-wrap">
<!--      <Header msg="Social Match Center" />-->

      <div class="container">
      <div class="row">
        <div class="col-lg-12 col-sm-12">
            <router-view>

            </router-view>


        </div>


      </div>
    </div>
    </main>
      <footer class="footer">
          <div class="content has-text-centered">
              <p>
                  <strong>Social Match Center</strong>
              </p>
          </div>
      </footer>
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
    /*body {*/
        /*margin: 0 auto;*/
        /*max-width: 375px;*/
    /*}*/
    #app {



        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        margin-top: 60px;
        font-size: 12px;
        .container {
            margin: 0 auto;

        }


    }

    h1, h2 {
      font-weight: bold;
        text-align: center;
      color: #2c3e50;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }
    a {
      color: #42b983;
    }

    .datetime {
        white-space: pre-line;
        color: #777;
        font-size: 11px;
        font-weight: bold;
        text-align: center;
    }

</style>
