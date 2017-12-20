<template>
    <div class="stars">
        <head-item/>
        <router-view></router-view>
    </div>
</template>
<script>
import headItem from './head.vue';
export default {
    components: {
        headItem
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

</style>
