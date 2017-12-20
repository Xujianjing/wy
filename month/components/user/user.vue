<template>
  <div>
      <header-item/>
      <section-item/>
  </div>
</template>

<script>
import headerItem from './main/head.vue';
import sectionItem from './main/section.vue';
export default {
    name: 'user',
    components: {
        headerItem,
        sectionItem
    }
};
</script>

<style>

</style>
