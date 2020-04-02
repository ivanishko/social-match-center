import Vue from "vue";
import Vuex from 'vuex';
import axios from 'axios';
import router from "vue-router";

Vue.use(Vuex);
const baseUrl = `http://localhost:3000`;
export default {
    namespaced: true,



    state: {
        role: localStorage.getItem('role') || '',
        userId:localStorage.getItem('userId') || '',
        user: localStorage.getItem('user') || '',


    },
    mutations: {
        auth_request(state){
            state.status = 'loading';
        },
        auth_success(state, user){
            state.status = 'success';
            state.role = user.role;
            state.userId = user.id;
            state.user = user.login;
            state.msg = '';
        },
        auth_error(state, msg){
            state.status = 'error';
            state.msg = msg;
        },
        logout(state){
            state.status = '';
            state.role = '';
            state.userId = '';
            state.user = '';
            state.msg = '';
        },
        prepareEdit(state, post){
            state.post = post

        }
    },
    getters: {
        isLoggedIn: state => !!state.role,
        isRole: state => state.role,
    },
    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request');
                let email = user.email;
                let password = user.password;


                axios.get(baseUrl + `/users/?login=` + email)
                    .then(resp => {
                        if (resp.data.length !== 0) {
                            this.user = resp.data;
                            console.log('this.user', ...this.user);

                            let userInDB = {...this.user[0]};
                            const role = userInDB.role;
                            const user = userInDB.login;

                            if (password == userInDB.password) {
                                console.log('the user has autorised!');
                                localStorage.setItem('role', role);
                                localStorage.setItem('user', user);
                                localStorage.setItem('userId', userInDB.id);
                                commit('auth_success', userInDB);
                                router.push('/')
                            } else {
                                let msg = 'Wrong  password or  login';
                                commit('auth_error', msg);
                                console.log('the user did not autorised!')
                            }

                        }
                        else {
                            let msg = 'Wrong login';
                            commit('auth_error', msg)
                        }
                    })
                    .catch(err => {
                        commit('auth_error')
                        console.log(err)
                    })
            })
        },
    }
}
