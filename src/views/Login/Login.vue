<template>
    <div class="wrapper">
        <h1 class="h1">登录</h1>
        <form action="" class="form">
            <InputComplex1 toggle="用户名" before="&#xe7d5;" id="uname"></InputComplex1>
            <InputComplex1 toggle="密码" before="&#xe7c0;" after="&#xe749;" id="upass" after_convert="1" inp_type="password">
            </InputComplex1>
        </form>
        <button class="button" @click="check">登录</button>
        <router-link to="/register" class="footer">没有账号？点我注册！</router-link>
        <div class="popUp popUp-off" v-text="pop" ref="pop"></div>
    </div>
</template>

<script>
import InputComplex1 from '@/components/inputComplex1.vue';
import { mapState } from 'vuex';
export default {
    name: 'Login',
    components: {
        InputComplex1
    },
    data() {
        return {
            pop: "",
            lock: false,
            time_control: 3000
        }
    },
    computed: {
        ...mapState(['login'])
    },
    methods: {
        check() {
            if (this.lock)
                return;
            this.lock = true;
            if (!this.login.uname || !this.login.upass) {
                this.pop = "请输入用户名或密码";
            }
            this.$refs.pop.classList.remove('popUp-off');
            this.$refs.pop.classList.add('popUp-on');
            setTimeout(() => {
                this.$refs.pop.classList.remove('popUp-on');
                this.$refs.pop.classList.add('popUp-off');
                this.lock = false;
            }, this.time_control);
            return;
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

.popUp {
    position: absolute;
    bottom: 20px;
    left: 2vw;
    width: 96vw;
    height: 40px;
    line-height: 40px;
    padding-left: 12px;
    background: #555;
    font-size: 16px;
    text-align: left;
    color: #fff;
    transition: .2s;
}

.popUp-off {
    opacity: 0;
    transform: scale(0);
}

.popUp-on {
    opacity: 1;
    transform: scale(1);
}
</style>