import Vue from 'vue';
import App from './App';
import router from './router';
import './fonts/iconfont.css';
import datas from './Mock/index.js';
import MIntUi from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';
Vue.use(MIntUi);
if (process.env.NODE_ENV === 'development') {
    datas.bootstrop();
};
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
