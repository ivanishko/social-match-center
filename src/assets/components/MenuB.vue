<template>
    <section>
        <b-sidebar
                type="is-light"
                :fullheight="fullheight"
                :fullwidth="fullwidth"
                :overlay="overlay"
                :right="right"
                :open.sync="open"
        >
            <div class="p-1">
                <router-link to="/"><img
                        src="#"
                /></router-link>
                <b-menu>
                    <b-menu-list label="Menu">
                        <b-menu-item icon="information-outline" label="Главная"  tag="router-link" to="/" ></b-menu-item>
                        <b-menu-item icon="information-outline" label="Матчи"  tag="router-link" to="/matches" ></b-menu-item>
                        <b-menu-item icon="information-outline" label="Турниры"  tag="router-link" to="/tournaments" ></b-menu-item>
                    </b-menu-list>
                    <b-menu-list label="Actions">
                        <b-menu-item v-if="!isLogined" label="Login" tag="router-link" to="/login" ></b-menu-item>
                        <b-menu-item v-else label="Logout" @click="logoutF"></b-menu-item>
                    </b-menu-list>
                </b-menu>
            </div>
        </b-sidebar>
        <b-button @click="open = true">Меню</b-button>
    </section>
</template>

<script>
    import {mapActions} from 'vuex';
    import {mapGetters} from 'vuex';

    export default {
        name: "MenuB",
        data() {
            return {
                open: false, // TODO Нужно сдеалат скрытие меню, добавить хук в роутинг 
                overlay: true,
                fullheight: true,
                fullwidth: false,
                right: false
            }
        },
        computed: {
            ...mapGetters('users', {
                isLogined: 'isLoggedIn'
            })
        },
        methods: {
            closeMenu() {
                console.log('close');
                this.open = false;
            },
            ...mapActions('users',{
                logoutF: 'logout'
            })
        }
    }
</script>

<style scoped>

</style>
