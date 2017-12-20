<template>
    <div>
        <header>
            <span><i class="icon iconfont icon-shouye"></i></span>
            <span>网易严选</span>
            <span>
                <i class="icon iconfont icon-fangdajing"></i>

                <i class="icon iconfont icon-gouwuche"></i>
            </span>
        </header>
        <section>
            <p><input type="text" v-model="userName"></p>
            <p><input type="password"></p>
            <p>
                <button @click="toUser">登录</button>
            </p>
            <p class="sign"><span>注册账号</span><span>忘记密码</span></p>
        </section>
        <footer>
            <span><i class="icon iconfont icon-weixin"></i> 微信</span>
            <span><i class="icon iconfont icon-qq"></i> qq</span>
            <span><i class="icon iconfont icon-xinlang"></i> 新浪</span>
        </footer>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'logins',
    data () {
        return {
            userName: ''
        };
    },
    methods: {
        toUser () {
            axios({
                url: '/users/msg',
                method: 'POST',
                params: {
                    'userName': this.userName
                }
            }).then((res) => {
                console.log(res.data.username);
                localStorage.setItem('userName', res.data.username);
                this.$router.push({name: 'tuijian', params: {name: res.data.username}});
            });
        }
    }
};
</script>

<style scoped>
   header{
       height: 0.45rem;
       display: flex;
       justify-content: space-between;
       align-items: center;
       padding: 0 0.1rem;
       background: #F1F0EE;
       border-bottom:1px solid #eee;
       color: #53524F;
   }
   header span{
        font-size: 0.2rem;
   }
   header span>i.icon{
       font-size: 0.28rem;
   }
   section{
       margin-top: 0.3rem;
       padding: 0 0.15rem;
   }
   p{
     width: 100%;
     line-height: 0.3rem;  
     padding: 0.05rem 0;
   }
   p input{
       width:100%;
       border:none;
       outline: 0;
       line-height: 0.3rem;
       padding: 0 0.1rem;
       border-bottom:1px solid #ccc;
   }
   p button{
       width:100%;
       background: #CC1A24;
       border: none;
       line-height: 0.4rem;
       color: #eee;
       border-radius: 3px;
       margin-top: 15px;
       font-size: 0.16rem;
   }
   p.sign{
       display: flex;
       justify-content: space-between;
   }
   footer{
     margin-top: 1.5rem;
     display: flex;
     justify-content: center;  
    }
    footer span{
        margin-left: 10px;
        font-size: 0.16rem;
    }
</style>
