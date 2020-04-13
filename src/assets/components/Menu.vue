<template>
  <Push>
    <router-link v-for="item in items" id="item.home" :to="item.href" :key="item.id">
      <span>{{item.link}}</span>
    </router-link>
  </Push>
</template>

<script>
    import  {Push} from 'vue-burger-menu'

    export default {
        name: "Menu",
        data() {
          return {
                items: [
                      {
                      "id": "home",
                      "link": "Home",
                      "href": "/"
                    },
                    {
                        "id": "home",
                        "link": "Matches",
                        "href": "/matches"
                    },
                    {
                        "id": "tournaments",
                        "link": "Tournaments",
                        "href": "/tournaments"
                    },
                    {
                        "id": "login",
                        "link": "Login",
                        "href": "/login"
                    },
              ]
          }
        },
        computed: {
          isLoginned() {
              return true
          }
        },
        components: {
            Push
        }
    }
</script>

<style >

  .bm-menu {
    background-color: #0e2141;
  }
  .bm-burger-button {
    position: fixed;
    width: 36px;
    height: 30px;
    left: 24px;
    top: 24px;
    cursor: pointer;
  }

  .bm-cross {
    background: #bdc3c7;
    width: 36px;
  }
</style>
