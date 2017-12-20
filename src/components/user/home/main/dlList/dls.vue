<template>
    <div class="colths">
        <h3>品牌制造商直供</h3>
        <div>
            <div v-for="(v,k) in arr" :key="k">
                <p>Adisas制造商</p>
                <dl>
                    <dd>
                        <span>{{v.txt}}</span>
                        <p>{{v.price}}元起</p>

                    </dd>
                    <dt>
                        <img :src="v.src" alt="">
                    </dt>
                </dl>
            </div>
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
    methods: {
        randerList () {
            axios({
                url: '/shouye/dls',
                method: 'GET'
            }).then((res) => {
                this.arr = this.arr.concat(res.data);
            });
        }
    },
    mounted () {
        this.randerList();
        let scrollBtm = document.body.scrollHeight;
        let that = this;
        let startY, endY;
        document.addEventListener('touchstart', function (e) {
            startY = e.touches[0].pageY;
        });
        document.addEventListener('touchmove', (e) => {
            endY = e.touches[0].pageY;
        });
        document.addEventListener('touchend', (e) => {
            if ((scrollBtm - startY < 100) && (endY - startY < -10)) {
                that.randerList();
            }
        });
    }
};
</script>

<style scoped>
.colths{
    background: #fff;
    margin-top: .1rem;
    padding: 0.1rem 0.15rem;
}
h3{
    text-align: center;
    line-height: .35rem;
    font-size: .18rem;
    font-weight: normal;
    
}
.colths>div{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.colths>div>div{
    background: #f2f2f2;
    display: inline-block;
    width:47%;
    margin-bottom: .05rem;
    padding: 0.05rem;

}
dl{
    position: relative;
    height: 0.7rem;
}
dl p{
    line-height: .3rem;
}
dl dd{
    float: left;
}
dl dt{
    position: absolute;
    bottom: 0rem;
}
dl dt>img{
    width:1.5rem;
}
</style>
