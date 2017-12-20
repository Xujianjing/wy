import Vue from 'vue';
import Router from 'vue-router';
import loginItem from '../components/login/login.vue';
import homeItem from '../components/home/home.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'logins',
            component: loginItem
        },
        {
            path: '/home',
            name: 'homes',
            component: homeItem,
            children: [
            ]
        }
    ]
});
