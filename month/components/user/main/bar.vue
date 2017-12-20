<template>
      <div class="bar">
        <div v-for="(v,k) in arr" :key="k">
           <h3>{{v.tit}}</h3>
           <p>{{v.txt}}</p>
            <img :src="v.src" alt="">
        </div>
      </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'dls',
    data () {
        return {
            arr: []
        };
    },
    mounted () {
        axios({
            url: '/bar/msg',
            method: 'GET'
        }).then((res) => {
            this.arr = res.data;
        });
    }
};
</script>

<style scoped>
   .bar{
       background: #fff;
       height:1.2rem;
       display: flex;
       padding: 0.1rem 0;
   }
   .bar div{
       flex:1;
       text-align: center;
   }
   .bar div h3{
       color: blue;
       font-size: 0.18rem;
   }
</style>
