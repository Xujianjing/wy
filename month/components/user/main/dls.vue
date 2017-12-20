<template>
      <div class="main">
          <h1>猜你喜欢</h1>
          <dl v-for="(v,k) in arr" :key="k">
              <dd>
                 <img :src="v.src" alt="">
              </dd>
              <dt>
                  <h3>{{v.tit}}</h3>
                  <p>{{v.txt}}</p>
                  <p><span>{{v.price}}</span>{{v.onlyPri}} <b>已售{{v.num}}</b></p>
              </dt>
          </dl>
      </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'dls',
    data () {
        return {
            arr: []
        };
    },
    methods: {
        randerList () {
            axios({
                url: '/dls/msg',
                method: 'POST'
            }).then((res) => {
                this.arr = res.data;
            });
        }
    },
    mounted () {
        this.arr = this.randerList();
        let height = document.body.scrollHeight;
        let startY, endY;
        document.addEventListener('touchstart', (e) => {
            startY = e.touches[0].pageY;
        });
        document.addEventListener('touchmove', (e) => {
            endY = e.touches[0].pageY;
        });
        document.addEventListener('touchend', (e) => {
            if (height - startY < 30 && startY > endY) {
                axios({
                    url: '/dls/msg',
                    method: 'POST'
                }).then((res) => {
                    this.arr = this.arr.concat(res.data);
                });
            }
        });
    }
};
</script>

<style scoped>
.main{
    background: #fff;
    padding: 0.1rem;
}
.main h1{
    font-size: 0.18rem;
    line-height: 0.3rem;
}
.main dl{
    border-top:1px solid #ccc;
    padding: 0.1rem 0;
    height: 1rem;
}
dl dd {
    float: left;
    margin-right: 0.15rem;
}
</style>
