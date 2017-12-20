<template>
  <section>
      <nav-item/>
      <bar-item/>
      <dls-item/>
  </section>
</template>

<script>
import navItem from './nav.vue';
import dlsItem from './dls.vue';
import barItem from './bar.vue';
export default {
    name: 'sections',
    components: {
        navItem,
        dlsItem,
        barItem
    },
    data () {
        return {
            arr: []
        };
    }
};
</script>

<style scoped>
   section{
       flex: 1;
       overflow-y: scroll;
   }
   .bar{
       margin-bottom: 0.1rem;
       background: #fff;
       height: 1rem;
   }
</style>
