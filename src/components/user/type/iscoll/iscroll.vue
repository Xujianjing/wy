<template>
    <div id="bars">
        <ul>
            <li v-for="(v, k) in arr" :key="k"><img :src="v.src"><span>共{{v.sum}}篇文章</span><p>{{v.txt}}</p></li>
        </ul>
    </div>
</template>

<script>
import IScroll from '../../../../../iscroll/iscroll5.js';
export default {
    name: 'navs',
    components: {
    },
    data () {
        return {
            arr: [
                {
                    src: './src/assets/shiwu/bar1.png',
                    txt: '严选推荐',
                    sum: 230
                },
                {
                    src: './src/assets/shiwu/bar2.png',
                    txt: '挑款师推荐',
                    sum: 326
                },
                {
                    src: './src/assets/shiwu/bar3.png',
                    txt: '礼物推荐',
                    sum: 42
                },
                {
                    src: './src/assets/shiwu/bar4.png',
                    txt: '严选LOOK',
                    sum: 246
                },
                {
                    src: './src/assets/shiwu/bar5.png',
                    txt: '口碑商品',
                    sum: 230
                },
                {
                    src: './src/assets/shiwu/bar6.png',
                    txt: '特色系列',
                    sum: 204
                },
                {
                    src: './src/assets/shiwu/bar7.png',
                    txt: '十点一刻',
                    sum: 230
                }
            ]
        };
    },
    mounted () {
        this.$nextTick(function () {
            new IScroll('#bars', {
                mouseWheels: true,
                scrollX: true
            });
        });
    }
};
</script>

<style scoped>
    #bars{
        width:100%;
        overflow: hidden;
        padding: 0.1rem 0;
        background: #fff;
    }
    #bars>ul{
        width: 8.4rem;
    }
    #bars li{
        position: relative;
        display: inline-block;
        padding: 0 0.1rem;
        width: 1.2rem;
        text-align: center;
        line-height: 0.22rem;
        border-bottom: 2px solid transparent;
    }
    #bars li span{
        position: absolute;
        top:0;
        right: 0.05rem;
        width:80%;
    }
    #bars li img{
        width: 100%;
        border-radius: 5px;
    }
    li.col{
        border-bottom-color: #CD1D26;
    }
</style>
