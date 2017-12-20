<template>
   <header>
       <i class="icon iconfont icon-fangdajing "></i>
       <input type="text" placeholder="搜索商品，共10240款好物">
   </header>
</template>

<script>
export default {

};
</script>

<style scoped>
   header{
       height: 0.5rem;
       text-align: center;
       padding: 0.1rem 0;
       border-bottom: 1px solid #f2f2f2;
       position: relative;
   }
   header i{
       position: absolute;
       left:20%;
       top:.16rem;
   }
   header input{
       width: 90%;
       text-align: center;
       background: #f2f2f2;
       border-radius: 5px;
       line-height: .3rem;
       border:none;
   }
</style>
