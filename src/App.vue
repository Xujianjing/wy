<template>
    <router-view/>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  text-decoration: none;
  box-sizing: border-box;
  font-size: .14rem; }
ul, li {
  list-style: none; }

html {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -o-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 625%; }

img, div, body, html, ul, li, a {
  -webkit-touch-callout: none; 
}

html,body,#app{
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
#app{
  display: flex;
  flex-direction: column;
}
#app {
  font-family: 'Avenir';
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
