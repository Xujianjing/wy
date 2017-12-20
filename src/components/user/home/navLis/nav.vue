<template>
    <div id="list">
        <ul>
            <li v-for="(v, k) in arr" :key="k"><router-link :to="v.path">{{v.txt}}</router-link></li>
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
                    txt: '推荐',
                    path: '/user/home/tuijian'
                },
                {
                    txt: '美妆',
                    path: '/user/home/meizhuang'

                },
                {
                    txt: '美食',
                    path: '/user/home/meishi'

                },
                {
                    txt: '母婴',
                    path: '/user/home/muying'
                },
                {
                    txt: '配件',
                    path: '/user/home/peijian'
                },
                {
                    txt: '生鲜',
                    path: '/user/home/shengxian'
                },
                {
                    txt: '鞋履',
                    path: '/user/home/xielv'
                },
                {
                    txt: '数码',
                    path: '/user/home/shuma'
                }
            ]
        };
    },
    mounted () {
        // this.$nextTick(function () {
        new IScroll('#list', {
            mouseWheels: true,
            scrollX: true
        });
        // });
    }
};
</script>

<style scoped>
    #list{
        width:100%;
        overflow: hidden;
        position: relative;
    }
    #list>ul{
        width: 4rem;
    }
    #list li{
        display: inline-block;
        width: 0.5rem;
        text-align: center;
        line-height: 0.22rem;
        border-bottom: 2px solid transparent;
    }
    li.col{
        border-bottom-color: #CD1D26;
    }
</style>
