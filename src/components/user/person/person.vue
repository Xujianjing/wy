<template>
    <div>
        <div class="conTop">
            <img :src="src" alt="">
            <span>{{userName}}</span> 
            <span @click="openCity"><i class="icon iconfont icon-dingwei"></i>北京</span>
            <city-item @change="result" v-show="flag"></city-item>
        </div>
        <nav-item/>
        <p><button @click="cancelLogin">退出登录</button></p>
    </div>
</template>

<script>
import navItem from './nav.vue';
import cityItem from './city.vue';
export default {
    name: 'geren',
    components: {
        navItem,
        cityItem
    },
    data () {
        return {
            userName: localStorage.getItem('userName'),
            src: './src/assets/images/banner/1.jpg',
            flag: false
        };
    },
    methods: {
        cancelLogin () {
            localStorage.setItem('userName', '');
            this.$router.push({name: 'toLogin'});
        },
        result (val) {
            this.flag = val;
        },
        openCity () {
            this.flag = true;
        }
    }
};
</script>

<style scoped>
    .conTop{
        background: #333;
        padding: 0.4rem 0.1rem;
        color: #fff;
        padding-left: 1rem;
        position: relative;
        font-weight: normal;
    }
    .conTop img{
        position: absolute;
        top:0.3rem;
        left: 0.15rem;
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
    }
    .conTop span{
        display: block;
        line-height: 0.3rem;
        font-size: 0.18rem;

    }
    p{
        margin-top: 0.15rem;
        background: #fff;
        width:100%;
        padding: 0.1rem;
    }
    p button{
        width:100%;
        line-height: 0.35rem;
        border:none;
        background: #eee;
    }
</style>
