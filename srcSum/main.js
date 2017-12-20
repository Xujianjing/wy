import Vue from 'vue';
import App from './App';
import router from './router';
import './fonts/iconfont.css';
import datas from './Mock/index.js';
if (process.env.NODE_ENV === 'development') {
    datas.toRun();
};
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
