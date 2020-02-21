<template>
  <div>
    <router-link :to="{name: 'matches'}">Back to match list</router-link>

    <div class="match-item border">
        <span class="team1 border"><p>{{matchItem.team1name}}</p>
          <p>{{matchItem.team1.loc_translate}}</p>
        </span>
        <div class="count border">
          <div v-show="editable" class="buttons">
            <div class="button_up">
              <button class="edit_button btn btn-success" @click="up1">up</button>
            </div>
            <div class="button_up">
              <button class="edit_button btn btn-success" @click="up2">up</button>
            </div>
          </div>

          <div class="count__items">
            <span>{{matchItem.team1["totalScore"]}} - {{matchItem.team2["totalScore"]}}</span>
            <span class="match_status">{{matchItem.match_status}}</span>
          </div>
          <div v-show="editable" class="buttons">
            <div class="button_down">
              <button class="edit_button btn btn-danger"  :disabled="matchItem.team1['totalScore'] == 0" @click="down1">dw</button>
            </div>
            <div class="button_down">
              <button class="edit_button btn btn-danger"  :disabled="matchItem.team2['totalScore'] == 0" @click="down2">dw</button>
            </div>
          </div>
        </div>
      <span class="team2 border"><p>{{matchItem.team2.name_translate}}</p><p> {{matchItem.team2.loc_translate}} </p></span>
    </div>
    <div v-show="editable" class="statuses">
      <label for="not_started">Не начался<input id="not_started" v-model="match_status" type="radio" name="field" value="not_started" @click="checkS('not_started')"></label>
      <label for="1time">1 тайм<input id="1time"  v-model="match_status" type="radio" name="field" value="1time" @click="checkS('1time')"></label>
      <label for="halftime">Перерыв<input id="halftime" v-model="match_status" type="radio" name="field" value="halftime" @click="checkS('halftime111')"></label>
      <label for="2time">2 тайм<input id="2time" v-model="match_status" type="radio" name="field" value="2time" @click="checkS('2time')"></label>
      <label for="finished">Окончен<input id="finished" v-model="match_status" type="radio" name="field" value="finished" @click="checkS('finished')"></label>
    </div>
    <button v-if="!editable" class="edit_button btn btn-primary" @click="editable = !editable" >Править</button>
    <button v-else class="edit_button btn btn-primary" @click="editable = !editable" >Готово</button>
  </div>

</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: "Match",
        data(){
            return {
                editable: false,
                match_status: ""
            }
        },
        computed: {
            id() {
                return this.$route.params.id;
            },
            matchItem(){
                return this.$store.getters['matches/item'](this.id);
            },
            ...mapGetters('matches',{
                // matchItem: 'item'
            }),

        },
            methods: {
                ...mapActions('matches', {
                        up1: 'upPoint1',
                        up2: 'upPoint2',
                        down1 :'downPoint1',
                        down2 :'downPoint2',
                        checkS: 'checkStatus'
                }),
            }
    }
</script>

<style  lang="scss" scoped>
  .match-item {
    display: flex;
    justify-content: space-between;

  }
  .team1, .team2, .count {
    display: flex;
    flex-direction: column;
  //border: 1px solid #2c3e50;
    width: 33%;
    align-items: center;
    justify-content: center;

  p {
    margin-bottom: 0;
  }

  }
  .buttons {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
  }

  .count {
    display: flex;
    flex-direction: column;
    height: 130px;
    align-items: center;
    justify-content: center;
    &__items {
      font-size: 36px;
      display: flex;
      flex-direction: column;
    }
    .match_status{
      font-size: 12px;
      color: red;
      line-height: 0;
      margin: 0;

  }

  }
  .edit_button {
    width: 75px;
    height: 25px;
    margin: 5px;
    line-height: 0;
    font-size: 12px;

  }
  .statuses{
    label {
      display: inline-block;
      border-radius: 3px;
      width: 18%;
      background: #42b983;
      color: aliceblue;
      text-align: center;
      cursor: pointer;

    }
    input {
      display: none;
      &:checked {
        background: #2c3e50;
      }

    }

  }


</style>
