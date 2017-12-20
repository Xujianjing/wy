<template>
<div class="ulis">
    <mt-swipe>
        <mt-swipe-item v-for="(v,k) in arr" :key="k"><img :src="v.src"></mt-swipe-item>
    </mt-swipe>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import axios from 'axios';
export default {
    name: 'ulis',
    data () {
        return {
            arr: []
        };
    },
    components: {
        Swipe,
        SwipeItem
    },
    mounted () {
        const that = this;
        axios({
            url: '/banner/imgs',
            method: 'POST'
        }).then((res) => {
            that.arr = res.data;
        });
    }
};
</script>

<style scoped>
.ulis{
    width:100%;
    height: 2.09rem;
}
.mint-swipe{
    width:100%;
}

.mint-swipe img{
    width:100%;
}
</style>
