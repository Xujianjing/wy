<template>
    <p>
        <input type="text" v-model="userName">
        <button @click="toLogin">登录</button>
    </p>
</template>

<script>
import axios from 'axios';
import bus from '../../bus.js';
export default {
    name: 'logins',
    data () {
        return {
            userName: ''
        };
    },
    methods: {
        toLogin () {
            let that = this;
            axios({
                url: '/login/users',
                method: 'POST',
                params: {
                    'userName': that.userName
                }
            }).then((res) => {
                bus.$emit('showName', that.userName);
                this.$router.push({name: 'userMsgs', params: {'names': that.userName}});
            });
        }
    }
};
</script>

<style>

</style>
