<template>
    <div class="wrapper">
        <h1 class="h1">登录</h1>
        <form action="" class="form">
            <div class="inp uname iconfont">
                <input type="text" placeholder="用户名" class="input">
            </div>
            <div class="inp upass iconfont">
                <input type="password" placeholder="密码" class="input">
                <div class="iconfont upass-after">&#xe7c0;</div>
            </div>
        </form>
        <router-link to="/home" class="button">登录</router-link>
        <router-link to="/about" class="footer">没有账号？点我注册！</router-link>
    </div>
</template>

<script>
export default {
    name: 'Login',
    components: {
        [Button.name]: Button,
    },
    data() {
        return {
            uname: "用户名",
            upass: "密码"
        }
    },
    methods: {
        setUname() {
            this.uname = this.uname == '用户名' ? '' : this.uname;
        },
        setUpass() {
            this.upass = this.upass == '密码' ? '' : this.upass;
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

.inp {
    height: 60px;
    line-height: 60px;
    display: flex;
    border: 2px solid #73767f;
    border-radius: 5px;
    box-sizing: content-box;
}

.inp::before {
    content: "";
    flex: 0 0 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
}

.uname::after {
    content: "";
    flex: 0 0 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
}

.inp .input {
    width: 0;
    border: 0;
    color: #43464f;
    flex: 1;
}

.uname::before {
    content: "\e7d5";
}

.upass::before {
    content: "\e7c0";
}

.upass-after {
    flex: 0 0 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
}

.button {
    display: block;
    margin: 0 auto;
    margin-top: 90px;
    width: 70%;
    line-height: 64px;
    height: 64px;
    border: 0;
    border-radius: 32px;
    background-color: #475c91;
    color: #fff;
    font-size: 20px;
}

.footer {
    position: fixed;
    left: 50vw;
    transform: translateX(-50%);
    bottom: 20px;
    font-size: 16px;
    color: #475d92;
}

.inp .input::-webkit-input-placeholder {
    /* WebKit browsers，webkit内核浏览器 */
    color: #43464f;
}

.inp .input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #43464f;
}

.inp .input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #43464f;
}

.inp .input:-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #43464f;
}
</style>