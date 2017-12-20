<template>
   <div>
     <head-item/>
     <section-item/>
     <foot-item/>
   </div>
</template>

<script>
import headItem from './head';
import sectionItem from './section';
import footItem from './foot';
export default {
    name: 'userMsgs',
    components: {
        headItem,
        sectionItem,
        footItem
    }
};
</script>

<style>

 #app>div{
   display: flex;
   flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
