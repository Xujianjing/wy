<template>
<div class="ulis">
    <mt-swipe>
        <mt-swipe-item v-for="(v,k) in arr" :key="k">
            <h6>{{v.tit}}</h6>
            <p>{{v.txt}}</p>
            <img :src="v.src">
            </mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
    name: 'tops',
    data () {
        return {
            arr: [
                {
                    src: './src/assets/shiwu/1.jpg',
                    tit: '--严冬的选择--',
                    txt: '比买家秀更好看的卖家秀'
                },
                {
                    src: './src/assets/shiwu/2.jpg',
                    tit: '--冬天到了--',
                    txt: '你长胖了没？'
                },
                {
                    src: './src/assets/shiwu/3.jpg',
                    tit: '--人生的意义--',
                    txt: '在于生活的美好'
                },
                {
                    src: './src/assets/shiwu/4.jpg',
                    tit: '--周末要睡觉--',
                    txt: '我要去吃饭'
                },
                {
                    src: './src/assets/shiwu/5.jpg',
                    tit: '--完整--',
                    txt: '如果你失去了向往'
                }
            ]
        };
    },
    components: {
        Swipe,
        SwipeItem
    }
};
</script>

<style scoped>
.ulis{
    width:100%;
    height: 2.1rem;
    background: #fff;
    padding: 0.1rem 0;
}
.mint-swipe{
    width:100%;
    text-align: center;
    position: relative;
    color: #fff;

}
.mint-swipe h6{
    position: absolute;
    top:0.4rem;
    left:12%;
}
.mint-swipe p{
    position: absolute;
    top:0.6rem;
    left:12%;
    font-size: 16px;
}
.mint-swipe img{
    width:90%;
    border-radius: 10px;
}
</style>
