<template>
  <div>
      <header-item :user="userName" :isShow="flag"  @toChange="result"/>
      <leftnav-item v-if="flag"></leftnav-item>
      <con-item></con-item>
  </div>
</template>

<script>
import headerItem from './childs/header.vue';
import leftnavItem from './childs/left-nav.vue';
import conItem from './childs/cons.vue';
export default {
    name: 'homes',
    components: {
        headerItem,
        leftnavItem,
        conItem
    },
    data () {
        return {
            userName: '',
            flag: false
        };
    },
    methods: {
        result (val) {
            this.flag = val;
        }
    },
    mounted () {
        this.userName = this.$route.params.userName;
    }
};
</script>

<style>
*{
    margin:0 ;
    padding: 0;
    list-style: none;
}
</style>
