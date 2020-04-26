<template>
  <div id="app">
      <main id="page-wrap">

      <!--<Header msg="Social Match Center" />-->
      <div class="container">

            <router-view></router-view>
          <Footer/>
    </div>
    </main>

  </div>

</template>

<script>
  import Footer from "./assets/components/Footer";

  export default {
  name: 'app',
    components: {
        Footer
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
        max-width: 375px;
        margin: 0 auto;
        border: 1px solid #bebebe;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        font-size: 12px;
        .container {
            margin: 0 auto;
            background-color: #fff;
            border-radius: 3px;
            padding: 10px;
            height: calc(100vh + 100px);
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
        background-color: #6e7b99;
        border-radius: 0;
        &:first-child {
            margin-top: 10px ;
        }

    }
    .card-header-title {
        padding-left: 10px;
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
