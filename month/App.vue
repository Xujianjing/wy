<template>
     <div id="app">
        <router-view/>
     </div>
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
input {
  outline: 0; }

html, body, #app, #app>div{
  width:100%;
  height: 100%;
  background: #F0EFED;
}
#app>div{
  display: flex;
  flex-direction: column;
}
</style>
