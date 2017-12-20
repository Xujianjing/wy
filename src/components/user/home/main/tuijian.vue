<template>
<div>
  <swipe-lis/>
            <h6>
                <span><i>√</i> 网易自营</span>
                <span><i>√</i> 层层把关</span>
                <span><i>√</i> 值得信赖</span>
            </h6>
            <dls-item></dls-item>
</div>          
</template>

<script>
import swipeLis from './swipeLis/ulist';
import dlsItem from './dlList/dls.vue';
export default {
    name: 'tuijian',
    components: {
        swipeLis,
        dlsItem
    }
};
</script>

<style scoped>
h6{
    display: flex;
    justify-content: space-around;
    background: #fff;
    line-height: .3rem;
    font-weight: normal;
    padding: 0 0.3rem;
}
h6 span i{
    width:.15rem;
    height: .15rem;
  display: inline-block;
  color: red;
  border:1px solid red;
  text-align: center;
  border-radius: 50%;
  line-height: 0.15rem;
}
</style>
