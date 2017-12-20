<template>
  <ul>
      <li v-for="(v,k) in arr" :key="k">
          <i :class="v.icon"></i>
          <span>{{v.tit}}</span>
      </li>
  </ul>
</template>

<script>
import axios from 'axios';
export default {
    name: 'myPro',
    data () {
        return {
            arr: []
        };
    },
    mounted () {
        let that = this;
        axios({
            url: '/mylist',
            method: 'POST'
        }).then((res) => {
            that.arr = res.data;
        });
    }
};
</script>

<style scoped>
    ul{
        display: flex;
        flex-wrap: wrap;
        background: #fff;
    }
    ul li{
        width:33.3%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 1.2rem;
        border:1px solid #ccc;
        border-left: none;
        border-bottom: none;
    }
    ul li i{
        font-size: 0.35rem;
    }
    ul li span{
        line-height: 0.25rem;
    }
</style>
