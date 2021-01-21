<template>
    <div class="footer">
        <nav class="links">
            <router-link active-class="active-link" :to="{name: 'Main'}" >Главная</router-link>
            <router-link active-class="active-link" :to="{name: 'About'}">О нас</router-link>
            <router-link active-class="active-link" :to="{name: 'Matches'}">Матчи</router-link>
            <router-link active-class="active-link" :to="{name: 'Tournaments'}">Турниры</router-link>
            <router-link  v-if="!isLogined"  active-class="active-link" :to="{name: 'Login'}">Войти</router-link>
            <router-link  v-else active-class="active-link" :to="{name: 'Login'}">
<!--              <b-icon :type="{ 'is-primary': isLogined  }" icon="user"></b-icon>-->
<!--              <br>-->
              Аккаунт
            </router-link>
        </nav>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: "Footer",
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters('users', {
                isLogined: 'isLoggedIn'
            })
        },
        methods: {
            ...mapActions('users',{
                logoutF: 'logout'
            })
        }
    }
</script>

<style scoped lang="scss">
.footer {
    position: fixed;
    padding: 0;
    height: 50px;
    max-width: 375px;
    bottom: 0;
    margin: 0 -10px;
    background: #c3c8c8;

    a {
        display: block;
        color: #3c8c99;
        min-width: 65px;
        padding: 15px 0;
        text-align: center;
        text-transform: uppercase;
    }
        .router-link-exact-active {
            color: #fff;
            font-weight: bold;
            background: #42a5b2;
            border: 0;
        }
}
    .links  {
        display: flex;
        height: 100%;
        justify-content: space-between;
        align-items: center;

    }



</style>
