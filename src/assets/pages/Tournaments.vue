<template>
  <div>
      <h1>{{name}}</h1>
      <div class="list-group match-items">
        <a v-for="tournament in tournaments" :key="tournament.id" :href="'../tournament/' + tournament.id" class="list-group-item list-group-item-action match-item">
          <span class="tournament"><p>{{tournament.reg_translate}}  {{tournament.name_translate}} {{tournament.loc_translate}}</p> </span>
        </a>
      </div>
  </div>
</template>

<script>
    export default {
        name: "Tournaments",
        data() {
            return {
                name: "Турниры",
                tournaments: [
                    {
                        "id":1,
                        "name": "liga1",
                        "local": "zona1",
                        "name_translate": "1 лига",
                        "loc_translate": "1 зона",
                        "region": "Krasnodarsky kray",
                        "reg_translate": "Краснодарский край"
                    },
                    {
                        "id":2,
                        "name": "liga1",
                        "local": "zona2",
                        "name_translate": "1 лига",
                        "loc_translate": "2 зона",
                        "region": "Krasnodarsky kray",
                        "reg_translate": "Краснодарский край"
                    },
                    {
                        "id":3,
                        "name": "liga1",
                        "local": "zona3",
                        "name_translate": "1 лига",
                        "loc_translate": "3 зона",
                        "region": "Krasnodarsky kray",
                        "reg_translate": "Краснодарский край"
                    },
                    {
                        "id":4,
                        "name": "liga1",
                        "local": "zona4",
                        "name_translate": "1 лига",
                        "loc_translate": "4 зона",
                        "region": "Krasnodarsky kray",
                        "reg_translate": "Краснодарский край"
                    },
                    {
                        "id":5,
                        "name": "vishaya",
                        "local":  "",
                        "name_translate": "Высшая лига",
                        "loc_translate": "",
                        "region": "Krasnodarsky kray",
                        "reg_translate": "Краснодарский край"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
