<template>
  <div class="sec">
      <dl>
          <dd>
              <input type="checkbox" @click="getSum" v-model="arr">
              <img :src="msg.src" alt="">
          </dd>
          <dt>
              <p>{{msg.tit}}</p>
              <p>{{msg.alt}}</p>
              <p><b @click="sums <= 0 ? 0: --sums">-</b> <input type="text" v-model="sums"> <b @click="++sums">+</b><span>{{msg.price*sums}}</span></p>
          </dt>
      </dl>
  </div>
</template>

<script>
export default {
    name: 'mycarDl',
    props: ['items'],
    data () {
        return {
            msg: this.items,
            sums: this.items.sum,
            arr: []
        };
    },
    methods: {
        getSum () {
            let that = this;
            setTimeout(() => {
                if (that.arr.length > 0) {
                    that.$emit('getAll', {
                        'price': that.msg.price * that.sums,
                        'id': that.msg.id
                    });
                } else {
                    that.$emit('getAll', {
                        'price': 0,
                        'id': that.msg.id
                    });
                }
            }, 0);
        }
    }
};
</script>

<style scoped>
    .sec{
       background: #fff; 
       padding: 0.1rem;
       height: 1.5rem;
    }
    dl dd{
        width:1.4rem;
        float: left;
        position: relative;
        padding: 0 0.3rem;

    }
    dl dd img{
        width:1rem;
        
    }
    dl dd input{
        position: absolute;
        top:50%;
        left:0rem;
    }
    dl dt p{
        line-height: 0.3rem;
    }
    dl dt p span{
        float: right;
        margin-right: 0.2rem;
    }
</style>
