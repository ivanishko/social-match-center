<template>
  <div>
    <router-link :to="{name: 'matches'}">Back to match list</router-link>

    <div class="match-item border">
        <span class="team1 border"><p>{{match.team1.name_translate}}</p> <p> {{match.team1.loc_translate}}</p> </span>
        <div class="count border">
          <div v-show="editable" class="buttons">
            <div class="button_up">
              <button class="edit_button btn btn-success" @click="upPoint1">up</button>
            </div>
            <div class="button_up">
              <button class="edit_button btn btn-success" @click="upPoint2">up</button>
            </div>
          </div>

          <div class="count__items">
            <span>{{match.team1["totalScore"]}} - {{match.team2["totalScore"]}}</span>
            <span class="match_status">{{match.match_status}}</span>
          </div>
          <div v-show="editable" class="buttons">
            <div class="button_down">
              <button class="edit_button btn btn-danger"  :disabled="match.team1['totalScore'] == 0" @click="downPoint1">dw</button>
            </div>
            <div class="button_down">
              <button class="edit_button btn btn-danger"  :disabled="match.team2['totalScore'] == 0" @click="downPoint2">dw</button>
            </div>
          </div>
        </div>
      <span class="team2 border"><p>{{match.team2.name_translate}}</p><p> {{match.team2.loc_translate}} </p></span>
    </div>
    <div v-show="editable" class="statuses">
      <label for="not_started">Не начался<input id="not_started" v-model="match_status" type="radio" name="field" value="not_started" @click="checkStatus('not_started')"></label>
      <label for="1time">1 тайм<input id="1time"  v-model="match_status" type="radio" name="field" value="1time" @click="checkStatus('1time')"></label>
      <label for="halftime">Перерыв<input id="halftime" v-model="match_status" type="radio" name="field" value="halftime" @click="checkStatus('halftime111')"></label>
      <label for="2time">2 тайм<input id="2time" v-model="match_status" type="radio" name="field" value="2time" @click="checkStatus('2time')"></label>
      <label for="finished">Окончен<input id="finished" v-model="match_status" type="radio" name="field" value="finished" @click="checkStatus('finished')"></label>
    </div>
    <button class="edit_button btn btn-primary" @click="editable = !editable" >{{ButtonText}}</button>
    <br>

<!--    <h2>Product title</h2>-->
<!--    <div class="price"> Price: {{price}}</div>-->
<!--    <div class="total">Total: {{total}}</div>-->
<!--    <div class="total">Count:  {{ cnt }}</div>-->
<!--    <hr>-->
<!--    <button class="btn btn-warning" @click="minus">-1</button>-->
<!--    <button class="btn btn-success" @click="plus">+1</button>-->
<!--    <button class="btn btn-primary"-->
<!--            :disabled="btnDisabled"-->
<!--            @click="send"-->
<!--    >Order now</button>-->
<!--    <div class="alert alert-success" v-if="orderState == 'done'">-->
<!--      Your order is done!-->
<!--    </div>-->
  </div>

</template>

<script>
    import {mapMutations} from 'vuex';
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
            match() {
                return this.$store.getters['item'](this.id)
            },
            /**
             * @return {string}
             */
            ButtonText() {
                return this.editable ? "Done" : "Edit"
            },
            ...mapGetters([
                'cnt',
                'price',
                'total',
                'orderState',
            ]),
            btnDisabled() {
                return this.cnt < 1;
            },


        },
            methods: {
                ...mapMutations([
                    'minus',
                    'plus',
                    'send',
                ]),
                upPoint1(){
                       this.match.team1.totalScore++;

                },
                upPoint2(){
                        this.match.team2.totalScore++;
                },
                downPoint1(){
                    if (this.match.team1["totalScore"] !== 0){
                        this.match.team1.totalScore--;
                    }
                },
                downPoint2(){
                    if (this.match.team2["totalScore"] !== 0){
                        this.match.team2.totalScore--;
                    }
                },
                checkStatus(status) {
                    this.match.match_status  = status;
                    console.log(this.match.match_status );

                }

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
