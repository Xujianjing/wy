<template>
  <header>
      <b> <router-link to="/city"> {{cityname ? cityname : '北京'}}</router-link> </b>
      <span> <i class="icon iconfont icon-fangdajing"></i> <input type="text"> </span>
      <span>
          <i class="icon iconfont icon-zanting"></i>
          我的
      </span>
  </header>
</template>

<script>
export default {
    name: 'heads',
    data () {
        return {
            cityname: ''
        };
    },
    methods: {
        cityName () {
            this.cityname = localStorage.getItem('cityName');
        }
    },
    mounted () {
        this.cityName();
    }
};
</script>

<style scoped>
   header{
       height: 0.43rem;
       background: #00CAB3;
       color: #fff;
       padding: 0 0.1rem;
       display: flex;
       justify-content: space-between;
       align-items: center; 
   }
   header b a{
       font-size: 0.18rem;
       color: #fff;
   }
   header span{
       text-align: center;
   }
   header span:nth-child(2){
       flex: 1;
       position: relative;
   }
   header span:nth-child(2) i.icon{
       position: absolute;
       left:13%;
       top:0.05rem;

   }
   header span:nth-child(3) i{
       display: block;

   }
   header span input{
       border:none;
       width:80%;
       line-height: 0.3rem;
       border-radius: 5px;
       background: #01AA97;
   }
</style>
