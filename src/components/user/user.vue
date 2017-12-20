<template>
  <div id="app">
    <div class="music">
      <transition name="bounce">
      <img src="../../assets/images/music.png" alt="">
      </transition>
    </div>
    <section-item/>
    <foot-item/>
  </div>
</template>

<script>
import sectionItem from './section.vue';
import footItem from './foot.vue';
export default {
    name: 'users',
    components: {
        sectionItem,
        footItem
    }
};
</script>

<style scoped>
.music{
  position: fixed;
top:0;
left:0;
width:0.8rem;
background:rgba(0,0,0,0.5);
z-index: 3;
}
.music img{
  width:100%;
}
</style>
