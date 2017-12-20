<template>
  <section>
      <button @click="toSum">结算</button>
  </section>
</template>

<script>
import bus from '../../bus';
export default {
    name: 'sections',
    data () {
        return {
            myName: ''
        };
    },
    methods: {
        toSum () {
            console.log(this.myName);
            if (!this.myName) {
                this.$router.push({name: 'toLogin'});
            }
        }
    },
    mounted () {
        let that = this;
        bus.$on('showName', (val) => {
           // console.log(that);
            if (val) {
                console.log(val);
                that.myName = val;
            }
            // else {
            //     that.$router.push({name: 'toLogin'});
            // }
        });
    }
};
</script>

<style scoped>
   section{
       flex: 1;
       overflow-y: scroll;
   }
</style>
