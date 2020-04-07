<template>
    <div>
        <b-message v-if="msg" title="Danger" type="is-danger" aria-close-label="Close message">
            {{msg}}
        </b-message>
        <b-message v-if="isMsg" title="Danger" type="is-danger" aria-close-label="Close message">
            {{isMsg}}
        </b-message>
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
            },
            isMsg: function () {
                return this.$store.getters.isMsg
            }
        }
    }
</script>

<style scoped>

</style>