import Vue from 'vue';
import Router from 'vue-router';
import userItem from '../components/user/user.vue';
import loginItem from '../components/user/login';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'toLogin',
            component: loginItem
        },
        {
            path: '/user',
            name: 'userMsgs',
            component: userItem
        },
        {
            path: '/',
            name: 'user',
            component: userItem
        }
    ]
});
