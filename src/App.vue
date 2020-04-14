<template>
  <div id="app">
      <main id="page-wrap">

      <!--<Header msg="Social Match Center" />-->
      <div class="container">
          <Menu />
      <div class="row">

        <div class="col-lg-12 col-sm-12">
            <router-view>

            </router-view>


        </div>


      </div>
    </div>
    </main>

  </div>

</template>

<script>
  import Header from "./assets/components/Header";
  import Menu from "./assets/components/Menu";
 
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
    body {
        background: #ebe8e8;
      max-width: 350px;
      margin: 0 auto;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 12px;
        .container {
            margin: 0 auto;
            background-color: #fff;
            border-radius: 3px;
            padding: 10px;

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
    .card-content {
        margin: 0;
        padding: 0;
    }
    .content {
        width: 100%;
    }
    .card-header {
        background-color: #006699;
        border-radius: 0;

    }
    .card-header-title {
        padding: 0;
        color: #fff;
    }

    #blink {
        -webkit-animation: blink 1.4s linear infinite;
        animation: blink 1.4s linear infinite;
    }
    @-webkit-keyframes blink {
        50% { color: rgb(256, 0, 0); }
        51% { color: rgba(256, 0, 0, 0); }
        100% { color: rgba(256, 0, 0, 0); }
    }
    @keyframes blink {
        50% { color: rgb(256, 0, 0); }
        51% { color: rgba(256, 0, 0, 0); }
        100% { color: rgba(256, 0, 0, 0); }
    }
    .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
    }
</style>
