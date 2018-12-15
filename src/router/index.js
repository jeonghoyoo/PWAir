import Vue from 'vue';
import VueRouter from 'vue-router';

import LoginPage from '../views/LoginPage.vue';
import MainPage from '../views/MainPage.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode : 'history',
    routes : [
        {
            path : '/',
            redirect : '/login'
        },
        {
            //로그인 페이지
            path : '/login',
            component : LoginPage,
        },
        {
            //메인 페이지
            path : '/main',
            component : MainPage,
        }
    ],
})
