<template>
<div class="randerList">
    <span @click="closeCity">×</span>
  <mt-index-list>
  <mt-index-section v-for="(v,k) in arr" :key="k" :index="v.index">
    <mt-cell v-for="(val, keys) in v.citys" :key="keys" :title="val.city"></mt-cell>
  </mt-index-section>
</mt-index-list>
</div>
</template>

<script>
import { IndexList, IndexSection } from 'mint-ui';
import axios from 'axios';
export default {
    name: 'city',
    data () {
        return {
            arr: []
        };
    },
    components: {
        IndexList,
        IndexSection
    },
    methods: {
        closeCity () {
            this.$emit('change', false);
        }
    },
    mounted () {
        axios({
            url: '/city',
            method: 'POST'
        }).then((res) => {
            this.arr = res.data.cityName;
        });
    }
};
</script>

<style scoped>
.randerList{
    position: relative;
}
.randerList span{
    position: absolute;
    color: #333;
    z-index: 3;
    top:0.1rem;
    right: 0.2rem;
    font-size: 0.25rem;
}
   .mint-indexlist{
       position: fixed;
       left: 0;
       color: #333;
       overflow-y: scroll;
       border-radius: 5px;
   }

</style>
