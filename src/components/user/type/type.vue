<template>
    <div>
        <swipe-item/>
        <iscoll-item/>
        <dls-item/>
    </div>
</template>

<script>
import swipeItem from './swiper/swipe.vue';
import iscollItem from './iscoll/iscroll.vue';
import dlsItem from './dls/dls.vue';
export default {
    name: 'shiwu',
    components: {
        swipeItem,
        iscollItem,
        dlsItem
    }
};
</script>

<style>

</style>
