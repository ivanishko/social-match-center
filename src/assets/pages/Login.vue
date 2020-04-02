<template>
    <div>
        <b-field label="Пользователь">
            <b-input
                     type="email"
                     value=""
                     v-model="email"
                     placeholder="login"
                     maxlength="30">
            </b-input>
        </b-field>

        <b-field label="Пароль">
            <b-input type="password"
                     v-model="password"
                     value=""
                     placeholder="Password"
                     password-reveal>
            </b-input>
        </b-field>
        <b-button type="is-info" @click="login" expanded>Войти</b-button>
        {{msg}}
    </div>

</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';


    export default {
        name: "Login",
        data() {
            return {
                msg:"",
                email: "",
                password: ""
            }
        },
        
        methods: {
            login: function () {
                console.log('login!');
                let email = this.email;
                let password = this.password;
                if (email && password) {
                    this.msg='';
                    this.$store.dispatch('users/login', {email, password});
                } else
                {
                    this.msg = 'One or more fields are empty';
                }
            }
        }
    }
</script>

<style scoped>

</style>