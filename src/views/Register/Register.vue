<template>
    <div class="wrapper">
        <div class="loading" style="height: 100vh;width: 100vw;position: absolute;z-index: 1;" v-if="loading">
            <Loading></Loading>
        </div>
        <h1 class="h1">注册</h1>
        <form action="" class="form">
            <InputComplex1 toggle="用户名" before="&#xe7d5;" id="uname"></InputComplex1>
            <InputComplex1 toggle="密码" before="&#xe7c0;" after="&#xe749;" id="upass" after_convert="1" inp_type="password">
            </InputComplex1>
            <InputComplex1 toggle="参数a" before="&#xe60d;" id="a"></InputComplex1>
            <InputComplex1 toggle="参数b" before="&#xe60d;" id="b"></InputComplex1>
            <InputComplex1 toggle="功率下限" before="&#xe646;" id="low"></InputComplex1>
            <InputComplex1 toggle="功率上限" before="&#xe725;" id="up"></InputComplex1>
        </form>
        <button class="button" @click="handleRegister">注册</button>
        <router-link to="/login" class="footer">已有账号？点我登录！</router-link>
        <Pop :time_control="time_control" ref="pop"></Pop>
    </div>
</template>

<script>
import InputComplex1 from '@/components/inputComplex1'
import Loading from '@/components/loading.vue';
import Pop from '@/components/pop.vue';
import { mapState } from 'vuex';
import {Register} from '../../api/Register'
export default {
    name: 'Register',
    components: {
        InputComplex1,
        Loading,
        Pop
    },
    data() {
        return {
            lock: false,
            time_control: 3000,
            loading:false
        }
    },
    computed: {
        ...mapState(['register'])
    },
    methods: {
        check() {
            if (this.lock)
                return false;
            this.lock = true;
            if (!this.register.a || !this.register.b || !this.register.low || !this.register.up) {
                this.$refs.pop.handlePop('请输入用户初始化数据',()=>{this.lock=false;});
                return false;
            }
            if (!this.register.uname || !this.register.upass) {
                this.$refs.pop.handlePop('请输入用户名或密码',()=>{this.lock=false;});
                return false;
            }
            return true;
        },
        async handleRegister(){
            this.loading=true;
            if(!this.check()){
                this.loading=false;
                return;
            }
            this.lock=true;
            let http=new Register(this.register.uname,this.register.upass,this.register.a,this.register.b,this.register.low,this.register.up);
            let res=await http.handleRegister().then(data=>{return data;});
            console.log(res);
            console.log(http);
            this.loading=false;
            if(http.isErr){
                this.$refs.pop.handlePop(res,()=>{this.lock=false;});
            }
            else{
                if(res.code==0){
                    localStorage.setItem('userId',res.data.userId);
                    this.$refs.pop.handlePop('注册成功',()=>{this.lock=false;});
                }
                else{
                    this.$refs.pop.handlePop('注册失败',()=>{this.lock=false;});
                }
            }
        }
    }

}
</script>

<style>
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
    height: 44vh;
    min-height: 394px;
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