<template>
  <footer>
      <ul>
          <li v-for="(v, k) in arr" :key="k">
              <i :class="v.icon"></i>
              <router-link :to="v.path">{{v.txt}}</router-link>
          </li>
      </ul>
  </footer>
</template>

<script>
export default {
    name: 'foots',
    data () {
        return {
            arr: [
                {
                    txt: '首页',
                    path: '/user/home/tuijian',
                    icon: 'icon iconfont icon-shouye'
                },
                {
                    txt: '识物',
                    path: '/user/type',
                    icon: 'icon iconfont icon-fengjing'
                },
                {
                    txt: '分类',
                    path: '/user/kind',
                    icon: 'icon iconfont icon-fenlei'
                },
                {
                    txt: '购物车',
                    path: '/user/mycar',
                    icon: 'icon iconfont icon-gouwuche'
                },
                {
                    txt: '个人',
                    path: '/user/person',
                    icon: 'icon iconfont icon-wode'
                }
            ]
        };
    }
};
</script>

<style scoped>
    footer{
        height: .5rem;
        border-top: 1px solid #ccc;
        padding: 0.02rem 0;
    }
    footer ul {
        display: flex;
        height: .45rem;
        align-items: center;
    }
    footer ul li{
        text-align: center;
        flex: 1;
        font-size: 0.12rem;
    }
    footer ul li i.icon{
        display: block;
        font-size: 0.24rem;
    }
</style>
