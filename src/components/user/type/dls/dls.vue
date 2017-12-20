<template>
    <div class="colths">
        <h3>为你推荐</h3>
        <div v-for="(v,k) in arr" :key="k">
                <img :src="v.banner" alt="">
                <h6>{{v.tit}}</h6>
                <p>{{v.txt}}</p>
                <dl v-for="(val, keys) in v.childs" :key="keys">
                    <dt>
                        <h6>{{val.tit}}</h6>
                        <p>{{val.txt}}</p>
                    </dt>
                    <dd>
                        <img :src="val.src" alt="">
                    </dd>
                </dl>
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
            url: '/msg',
            method: 'GET'
        }).then((res) => {
            this.arr = res.data;
        });
    }
};
</script>

<style scoped>
.colths{
    width:100%;
    background: #fff;
    margin-top: .1rem;
    padding: 0.15rem;
}
.colths>div{
    width:100%;
    margin-top: 0.2rem;
}
.colths>div>img{
    width:100%;
    border-radius: 5px;
}
p{
    line-height: 0.25rem;
}
h3{
    text-align: center;
    line-height: .35rem;
    font-size: .18rem;
    font-weight: normal;
}
h6{
    font-size: 0.18rem;
    font-weight: normal;
}
dl{
    position: relative;
    margin-top: 0.1rem;
}
dl dt{
    float: left;
    width: 50%;
    margin-right: 8%;
}
dl dt h6{
   font-size: .16rem;
   line-height: 0.4rem;
   text-align: center;
   font-weight: normal;
}
dl dt p{
    line-height: 0.25rem;
}
dl dd img{
    width: 40%;
}

</style>
