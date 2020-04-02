<template>
  <div>
    <router-link :to="{name: 'matches'}">Back to match list</router-link>

    <div class="match-item">

        <span class="team1 ">
          <p>{{matchItem.team1.name_translate}}</p>
          <p>{{matchItem.team1.local}}</p>
        </span>
        <div class="count ">
          <div v-show="editable" class="buttons">
            <div class="button_up">
              <b-button class="edit_button btn btn-success" @click="up1">up</b-button>
            </div>
            <div class="button_up">
              <b-button class="edit_button btn btn-success" @click="up2">up</b-button>
            </div>
          </div>

          <div class="count__items">
            <span class="datetime">{{matchItem.datetime | filterTime}}</span>
            <span>{{matchItem.team1.totalScore}} - {{matchItem.team2.totalScore}}</span>
            <span class="match_status">{{matchItem.match_status}}</span>
          </div>
          <div v-show="editable" class="buttons">
            <div class="button_down">
              <b-button class="edit_button btn btn-danger"  :disabled="matchItem.team1['totalScore'] === 0" @click="down1">dw</b-button>
            </div>
            <div class="button_down">
              <b-button class="edit_button btn btn-danger"  :disabled="matchItem.team2['totalScore'] === 0" @click="down2">dw</b-button>
            </div>
          </div>
        </div>
      <span class="team2 ">
        <p>{{matchItem.team2.name_translate}}</p>
        <p> {{matchItem.team2.local}} </p>
      </span>
    </div>
    <div v-show="editable" class="statuses">
      <label for="not_started">Не начался<input id="not_started" v-model="match_status" type="radio" name="field" value="not_started" @click="checkS('not_started')"></label>
      <label for="1time">1 тайм<input id="1time"  v-model="match_status" type="radio" name="field" value="1time" @click="checkS('1time')"></label>
      <label for="halftime">Перерыв<input id="halftime" v-model="match_status" type="radio" name="field" value="halftime" @click="checkS('halftime111')"></label>
      <label for="2time">2 тайм<input id="2time" v-model="match_status" type="radio" name="field" value="2time" @click="checkS('2time')"></label>
      <label for="finished">Окончен<input id="finished" v-model="match_status" type="radio" name="field" value="finished" @click="checkS('finished')"></label>
    </div>
    <b-button v-if="isRole == 'writer' && !editable"  @click="editClick" type="is-warning" expanded>Править</b-button>
    <b-button v-if="editable" type="is-success" @click="editClick" expanded>Готово</b-button>
  </div>

</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: "Match",
        data() {
            return {
                editable: false,
                match_status: "",
                inEdit: false
            }
        },
        created() {
            console.log(3);
            this.$store.dispatch('match/loadMatch',this.id);
        },
        computed: {
            id() {
                return this.$route.params.id;
            },
            ...mapGetters('match',{
                matchItem: 'item'
            }),
            // matchItem() {
            //     return this.$store.getters['match/item'];
            // },
            ...mapGetters('users', {
                isRole: 'isRole'
            }),

        },
        methods: {
            ...mapActions('match', {
                up1: 'upPoint1',
                up2: 'upPoint2',
                down1: 'downPoint1',
                down2: 'downPoint2',
                checkS: 'checkStatus',
                load: 'loadMatch'
            }),

            editClick: function () {
                this.editable = !this.editable;
            }
        },
        filters: {
            filterTime: function (d) {
                let date = new Date(d);
                let dd = date.getDate();
                if (dd < 10) dd = '0' + dd;

                let mm = date.getMonth() + 1;
                if (mm < 10) mm = '0' + mm;

                let yy = date.getFullYear() % 100;
                if (yy < 10) yy = '0' + yy;

                let hh = date.getHours() ;
                if (hh < 10) hh = '0' + hh;

                let mi = date.getHours() ;
                if (mi < 10) mi = '0' + mi;

                return dd + '.' + mm + '.' + yy + ' ' + hh + ':' + mi;
            }
        }
    }
</script>

<style  lang="scss" scoped>
  .match-item {
    display: flex;
    justify-content: space-between;
    min-height: 175px;

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
      text-align: center;

  }

  }
  .edit_button {
    height: 25px;
    margin: 5px;
    line-height: 0;
    font-size: 12px;

  }
  .statuses{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    justify-content: space-between;
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
