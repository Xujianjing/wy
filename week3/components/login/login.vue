<template>
  <div>
      <h1>Login in. To see it in action.</h1>
      <p><input type="text" v-model="userName" placeholder="Username"></p>
      <p><input type="text" placeholder="Password"></p>
      <p><button @click="toHome"> Login</button></p>
  </div>
</template>

<script>
// 用户名为 admin 时方可登录
import axios from 'axios';
export default {
    name: 'logins',
    data () {
        return {
            userName: ''
        };
    },
    methods: {
        toHome () {
            let that = this;
            axios({
                url: '/users/name',
                method: 'POST',
                params: {
                    userName: that.userName
                }
            }).then((res) => {
                if (res.data) {
                    this.$router.push({name: 'homes', params: {userName: res.data}});
                }
            });
        }
    }
};
</script>

<style scoped>
h1{
    font-size: 18px;
    text-align: center;
    line-height: 50px;
}
p{
    line-height: 40px;
    text-align: center;
}
input{
   width: 80%;
   line-height: 30px;
   border:1px solid #ccc;
}
    button{
        width: 80%;
        border:none;
        background: skyblue;
        line-height: 25px;
        border-radius: 5px;
    }
</style>
