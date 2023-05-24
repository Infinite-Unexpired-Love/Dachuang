<template>
    <div>
        <h1 class="h1">登录</h1>
        <form action="">
            <div class="inp uname iconfont">
                <input type="text" value="用户名">
            </div>
            <div class="inp upass iconfont">
                <input type="text" value="密码">
            </div>
            <button>登录</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'Login',
}
</script>

<style scoped>
@import '../css/font/iconfont.css';

.h1 {
    height: 20vh;
    line-height: 20vh;
    text-align: center;
    font-weight: normal;
}

form {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 140px;
}

.inp {
    height: 60px;
    line-height: 60px;
    display: flex;
    border: 2px solid #ccc;
    border-radius: 5px;
    box-sizing: content-box;
}

.inp::before {
    content: "";
    /* width: 60px;
    height: 60px; */
    flex: 1;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
}

.inp::after {
    content: "";
    /* width: 60px;
    height: 60px; */
    flex: 1;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
}

.inp input {
    border: 0;
    flex: 1;
}

.uname::before {
    content: "\e7d5";
}

.upass::before {
    content: "\e7c0";
}

.upass::after {
    content: '\e749';
}

button {
    width: 100%;
    height: 40px;
    margin-top: 40px;
    border: 0;
    border-radius: 20px;
    color: #fff;
    background: blue;
}
</style>