import {PORT} from './constants';
import axios from "axios/index";
export default {
    namespaced: true,

    state: {
        role:   localStorage.getItem('role') || '',
        userId: localStorage.getItem('userId') || '',
        user:   localStorage.getItem('user') || '',
        msg: ''
    },

    getters: {
        isLoggedIn: state => !!state.role,
        isRole: state => state.role,
        isMsg: state => state.msg
    },
    actions: {
        login({commit}, user) {
            return new Promise((resolve, reject) => {
                commit('AUTH_REQUEST');
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
                                commit('AUTH_SUCCESS', userInDB);
                            } else {
                                let msg = 'Wrong  password or login';
                                commit('AUTH_ERROR', msg);
                                console.log('the user did not autorised!')
                            }

                        }
                        else {
                            let msg = 'Wrong login';
                            commit('AUTH_ERROR', msg)
                        }
                    })
                    .catch(err => {
                        let msg = 'Some error';
                        commit('AUTH_ERROR', msg);
                        console.log('err',err)
                    })
            })
        },
        logout({commit}){
            return new Promise((resolve, reject) => {
                commit('LOGOUT');
                localStorage.removeItem('role');
                localStorage.removeItem('user');
                localStorage.removeItem('userId');
                 resolve();

            })
        }
    },
    mutations: {
        AUTH_REQUEST(state){
            state.status = 'loading';
        },
        AUTH_SUCCESS(state, user){
            state.status = 'success';
            state.role = user.role;
            state.userId = user.id;
            state.user = user.login;
            state.msg = '';
        },
        AUTH_ERROR(state, msg){
            state.status = 'error';
            state.msg = msg;
        },
        LOGOUT(state){
            state.status = '';
            state.role = '';
            state.userId = '';
            state.user = '';
            state.msg = '';
        },
        PREPAREEDIT(state, post){
            state.post = post

        }
    },
}
