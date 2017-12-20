import Vue from 'vue';
import App from './App';
import router from './router';
import './fonts/iconfont.css';
import datas from './Mock/index.js';
import MIntUi from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
import Vuex from 'vuex';
Vue.use(MIntUi);
if (process.env.NODE_ENV === 'development') {
    datas.toRun();
};
Vue.config.productionTip = false;

/* eslint-disable no-new */
let store = new Vuex.Store({
    state: {
        count: 10
    },
    mutations: {
        add (state) {
            console.log(state.count);
        }
    }
});
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});
