<template>
  <footer>
      <ul>
          <li>首页</li>
          <li>推荐</li>
          <li>购物车</li>
          <li>我的</li>
      </ul>
  </footer>
</template>

<script>
export default {
    name: 'foots'
};
</script>

<style scoped>
    footer{
        height: .45rem;
        border-top: 1px solid #ccc;
    }
    footer ul {
        display: flex;
        height: .45rem;
        align-items: center;
    }
    footer ul li{
        flex: 1;
        text-align: center;
    }
</style>
