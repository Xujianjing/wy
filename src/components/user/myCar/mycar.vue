<template>
    <div class="stars">
        <head-item/>
        <div>
            <dls-item  v-for="(v,k) in arr" :key="k" :items="v" @getAll="result"/>
        </div>
        <p class="account">
           <span>￥ {{sums}}</span>  <button>去结算</button>
        </p>
    </div>
</template>

<script>
import headItem from './head.vue';
import axios from 'axios';
import dlsItem from './dls/dls.vue';
export default {
    name: 'mycars',
    components: {
        headItem,
        dlsItem
    },
    data () {
        return {
            arr: [],
            sums: 0,
            pris: []
        };
    },
    methods: {
        result (val) {
            this.pris[val.id] = val.price;
            let allPri = 0;
            for (let i in this.pris) {
                allPri += this.pris[i];
            };
            this.sums = allPri;
        }
    },
    mounted () {
        axios({
            url: '/mycar',
            method: 'POST'
        }).then((res) => {
            this.arr = res.data;
        });
    }
};
</script>

<style scoped>
.stars{
    width:100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
.stars>div{
   flex: 1;
   overflow-y: scroll;
}
p.account{
    line-height: 0.45rem;
    padding-left: 0.2rem;
}
p span{
    font-size: 0.2rem;
}
p button{
    width:1rem;
    height: 0.45rem;
    background: orange;
    float: right;
    border:none;
    font-size: 0.2rem;
    color: #fff;
}
</style>
