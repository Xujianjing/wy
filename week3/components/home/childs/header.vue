<template>
      <header>
          <h1>{{user}} <button @click="change">侧栏导航</button></h1>
      </header>
</template>

<script>
export default {
    name: 'headers',
    props: ['user', 'isShow'],
    data () {
        return {
            flag: false
        };
    },
    methods: {
        change () {
            this.flag = !this.flag;
            this.$emit('toChange', this.flag);
        }
    }
};
</script>

<style scoped>
header{
    position: fixed;
    top:0;
    left:70px;
}
   h1{
       text-align: center;
   }
</style>
