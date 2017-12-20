import Vue from 'vue';
import Router from 'vue-router';
import userItem from '../components/user/user.vue';
import cityItem from '../components/city/city.vue';
Vue.use(Router);
export default new Router({
    routes: [
        {
            path: '/',
            name: 'users',
            component: userItem
        },
        {
            path: '/user',
            name: 'user',
            component: userItem
        },
        {
            path: '/city',
            name: 'citys',
            component: cityItem
        }
    ]
});
