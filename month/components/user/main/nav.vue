<template>
    <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(v,k) in arr" :key="k">
            <p v-for="(val,keys) in v" :key="keys">
                <b><i :class="val.icon"></i></b>
                <span>{{val.tit}}</span>
            </p>
        </mt-swipe-item>
   </mt-swipe>
</template>

<script>
import axios from 'axios';
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    name: 'navs',
    data () {
        return {
            arr: []
        };
    },
    components: {
        Swipe,
        SwipeItem
    },
    mounted () {
        axios({
            url: '/navs',
            method: 'GET'
        }).then((res) => {
            this.arr = res.data;
        });
    }
};
</script>

<style scoped>
   .mint-swipe{
       height: 1.6rem;
       background: #fff;
       margin-bottom: 0.1rem;
   }
   .mint-swipe-item{
       display: flex;
       height: 1.6rem;
       flex-wrap: wrap;
   }
   .mint-swipe-item p{
       width:20%;
       text-align: center;
       align-items: center;
       height: 0.8rem;
       padding: 0.2rem 0;
       display: inline-block
   }
   .mint-swipe-item p b{
       display: block;
       width:0.4rem;
       height: 0.4rem;
       border-radius: 50%;
       background: #F9515E;
       margin-left: 0.15rem;
   }
   .mint-swipe-item p i.icon{
       font-size: 0.25rem;
       color: #fff;
       line-height: 0.4rem;
       font-weight: normal;
   }
   
</style>
