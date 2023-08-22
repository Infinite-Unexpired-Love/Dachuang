<template>
    <div class="wrapper">
        <div class="loading" style="height: 100vh;width: 100vw;position: absolute;z-index: 1;" v-if="loading">
            <Loading></Loading>
        </div>
        <h1 class="h1">登录</h1>
        <form action="" class="form">
            <InputComplex1 toggle="用户名" before="&#xe7d5;" id="uname" isLogin="1"></InputComplex1>
            <InputComplex1 toggle="密码" before="&#xe7c0;" after="&#xe749;" id="upass" after_convert="1" inp_type="password" isLogin="1">
            </InputComplex1>
        </form>
        <button class="button" @click="handleLogin">登录</button>
        <router-link to="/register" class="footer">没有账号？点我注册！</router-link>
        <Pop :time_control="time_control" ref="pop"></Pop>
    </div>
</template>

<script>
import InputComplex1 from '@/components/inputComplex1.vue';
import Loading from '@/components/loading.vue';
import Pop from '@/components/pop.vue';
import { mapState } from 'vuex';
import {Login} from '../../api/Login';

export default {
    name: 'Login',
    components: {
        InputComplex1,
        Loading,
        Pop
    },
    data() {
        return {
            pop: "",
            lock: false,
            time_control: 3000,
            loading:false
        }
    },
    computed: {
        ...mapState(['login'])
    },
    methods: {
        check() {
            if (this.lock)
                return false;
            this.lock = true;
            if(this.login.uname&&this.login.upass){
                this.lock=false;
                return true;
            }
            else {
                this.$refs.pop.handlePop('请输入用户名或密码',()=>{this.lock=false;});
            }
            return false;
        },
        async handleLogin() {
            this.loading=true;
            if(!this.check()){
                this.loading=false;
                return;
            }
            this.lock=true;
            let http=new Login(this.login.uname,this.login.upass);
            let res=await http.handleLogin().then(data=>{return data;});
            this.loading=false;
            if(http.isErr){
                this.$refs.pop.handlePop(res,()=>{this.lock=false;});
            }
            else{
                if(res.code==0){
                    this.$refs.pop.handlePop('登录成功',()=>{this.lock=false;});
                }
                else{
                    this.$refs.pop.handlePop('登录失败',()=>{this.lock=false;});
                }
            }         
        }
    }
}
</script>

<style scoped>
.wrapper {
    height: 100vh;
}

.h1 {
    height: 24vh;
    line-height: 28vh;
    text-align: center;
    font-weight: normal;
    color: #1b1a1f;
}

.form {
    width: 70%;
    height: 18vh;
    min-height: 140px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}


.button {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    width: 70%;
    line-height: 40px;
    height: 40px;
    border: 0;
    border-radius: 32px;
    background-color: #475c91;
    color: #fff;
    font-size: 16px;
}

.footer {
    position: fixed;
    left: 50vw;
    transform: translateX(-50%);
    bottom: 20px;
    font-size: 16px;
    color: #475d92;
}


</style>