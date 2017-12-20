<template>
<div>
   <header>
      <p><router-link to="/">返回</router-link><span>选择城市</span><span><i class="icon iconfont icon-shouye"></i><i class="icon iconfont icon-fangdajing"></i></span></p>
   </header>
   <section>
       <p><b> <router-link to="/city"> {{cityname}}</router-link> </b></p>
     <p>定位城市 : {{cityname}}</p>
     <h3>热门城市</h3>
     <ul>
         <li v-for="(v,k) in hotCity" :key="k" @click="changeCity(v.hots)">{{v.hots}}</li>
     </ul>
     <h3>全部城市</h3>
     <div>
     <div v-for="(v,k) in citys" :key="k">
         <p>{{v.pri}}</p>
        <ul>
            <li v-for="(val,keys) in v.citys" :key="keys" @click="changeCity(val.city)">{{val.city}}</li>
        </ul>
     </div>
     </div>
   </section>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'citys',
    data () {
        return {
            cityname: '',
            hotCity: [],
            citys: []
        };
    },
    methods: {
        cityName () {
            this.cityname = localStorage.getItem('cityName');
        },
        changeCity (val) {
            localStorage.setItem('cityName', val);
            this.cityName();
        }
    },
    mounted () {
        axios({
            url: '/citys/msg',
            method: 'POST'
        }).then((res) => {
            this.hotCity = res.data.hotCity;
            this.citys = res.data.province;
        });
    }
};
</script>

<style scoped>
header{
    height: 0.5rem;
    background: #01C8B3;
    color: #fff;
}
header p{
    line-height: 0.5rem;
    padding: 0 0.1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
section{
    flex:1;
    overflow-y: scroll;
    width:100%;
    padding: 0 0.1rem;
}
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
   ul li{
       width:30%;
       background: #fff;
       text-align: center;
       line-height: 0.3rem;
   }
   p,h3{
       line-height: 0.3rem;
   }
</style>
