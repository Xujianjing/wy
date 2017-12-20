<template>
    <div class="stars">
        <div>
            <head-item/>
            <nav-item/>
        </div>
    </div>
</template>
<script>
import headItem from './head/head.vue';
import navItem from './nav/nav.vue';
export default {
    components: {
        headItem,
        navItem
    }
};
</script>

<style scoped>
.stars{
    width:100%;
    height: 100%;
    flex-direction: column;
    background: #fff;
}
.stars>div{
   flex: 1;
   overflow-y: scroll;
   position: relative;

}

</style>
