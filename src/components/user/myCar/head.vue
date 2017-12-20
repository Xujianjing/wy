<template>
  <header>
      <span></span><span> 购物车</span> <span>编辑</span>
  </header>
</template>

<script>
export default {
    name: 'mycarHead'
};
</script>

<style scoped>
    header{
        height: 0.5rem;
        background: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 0.1rem;
        margin-bottom: 0.1rem;
    }
    header span{
        font-size: 0.18rem;
    }
</style>
