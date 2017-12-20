<template>
  <header>
     <p><b> 网易严选 </b> <span><i class="icon iconfont icon-fangdajing"></i></i><input type="text" placeholder="搜索商品，共10388款好物"></span></p>
     <nav-item>
     </nav-item>
  </header>
</template>

<script>
import navItem from './navLis/nav';
export default {
    name: 'heads',
    components: {
        navItem
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    header{
        height: .7rem;
        background: #fff;
    }
    p{
        width:100%;
        padding: 0 0.1rem;
        line-height: 0.45rem;
        display: flex;
        justify-content: space-between;
    }
    p b{
        width: 25%;
        font-size: 0.16rem;
        color: #5A4D4B;
    }
    p span{
        flex: 1;
        position: relative;
    }
    p span input{
        width: 100%;
        border:none;
        background: #eee;
        border-radius: 5px;
        text-align: center;
        line-height: .25rem;
        outline: none;
    }
    p span i.icon{
        position: absolute;
        left:0.1rem;
        top: 0.02rem;
    }
</style>
 