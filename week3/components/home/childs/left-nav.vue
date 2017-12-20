<template>
   <ul>
       <li v-for="(v, k) in arr" :key="k" :class="{active: col}">{{v.tit}}</li>
   </ul>
</template>

<script>
export default {
    name: 'lefts',
    data () {
        return {
            arr: [
                {
                    path: 'slide1',
                    tit: '首页'
                },
                {
                    path: 'slide2',
                    tit: '美妆'
                },
                {
                    path: 'slide3',
                    tit: '餐饮'
                }
            ],
            col: false
        };
    }
};
</script>

<style scoped>
  ul{
      position: fixed;
      width:70px;
      background: #eee;
      height: 100%;
      top:0px;
      left:0;
  }
  ul li{
      text-align: center;
      line-height: 30px;
      border-bottom: 1px solid #ccc;
  }
  ul li.active{
      border-bottom-color: red;
  }
</style>
