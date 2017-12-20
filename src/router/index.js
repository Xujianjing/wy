import Vue from 'vue';
import Router from 'vue-router';
import userItem from '../components/user/user.vue';
import loginItem from '../components/login/login';
import kindItem from '../components/user/kind/kind.vue';
import shouyeItem from '../components/user/home/home.vue';
import typeItem from '../components/user/type/type.vue';
import mycarItem from '../components/user/myCar/mycar.vue';
import personItem from '../components/user/person/person.vue';
import tuijianItem from '../components/user/home/main/tuijian.vue';
import meizhuangItem from '../components/user/home/main/meizhuang.vue';
import meishiItem from '../components/user/home/main/meishi.vue';
import muyingItem from '../components/user/home/main/muying.vue';
import peijianItem from '../components/user/home/main/peijian.vue';
import shengxianItem from '../components/user/home/main/shengxian.vue';
import xielvItem from '../components/user/home/main/xielv.vue';
import shumaItem from '../components/user/home/main/shuma.vue';
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'toLogin',
            component: loginItem
        },
        {
            path: '/login',
            name: 'toLogin',
            component: loginItem
        },
        {
            path: '/user',
            name: 'userMsgs',
            component: userItem,
            children: [
                {
                    path: 'home',
                    name: 'home',
                    component: shouyeItem,
                    children: [
                        {
                            path: 'tuijian',
                            name: 'tuijian',
                            component: tuijianItem
                        },
                        {
                            path: 'meizhuang',
                            name: 'meizhuang',
                            component: meizhuangItem
                        },
                        {
                            path: 'meishi',
                            name: 'meishi',
                            component: meishiItem
                        },
                        {
                            path: 'muying',
                            name: 'muying',
                            component: muyingItem
                        },
                        {
                            path: 'peijian',
                            name: 'peijian',
                            component: peijianItem
                        },
                        {
                            path: 'shengxian',
                            name: 'shengxian',
                            component: shengxianItem
                        },
                        {
                            path: 'xielv',
                            name: 'xielv',
                            component: xielvItem
                        },
                        {
                            path: 'shuma',
                            name: 'shuma',
                            component: shumaItem
                        }
                    ]
                },
                {
                    path: 'type',
                    name: 'type',
                    component: typeItem
                },
                {
                    path: 'kind',
                    name: 'kind',
                    component: kindItem
                },
                {
                    path: 'mycar',
                    name: 'mycar',
                    component: mycarItem
                },
                {
                    path: 'person',
                    name: 'person',
                    component: personItem
                }
            ]
        }
    ]
});
