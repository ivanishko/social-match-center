<template>
  <Push>
    <a v-for="item in items" id="item.home" :href="item.href">
      <span>{{item.link}}</span>
    </a>
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

              ]


          }
        },
        components: {
            Push
        }
    }
</script>

<style >
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
