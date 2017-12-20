<template>
<section>
      <router-view></router-view>
</section>
</template>

<script>
export default {
    name: 'sections'
};
</script>

<style scoped>
    section{
        flex:1;
        overflow-y: scroll;
    }
</style>
