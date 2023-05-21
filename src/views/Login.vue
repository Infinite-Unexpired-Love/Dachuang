<template>
    <div>
        <h1 class="h1">登录</h1>
        <van-cell-group>
            <van-field value="用户名" class="iconfont uname input" />
            <van-field value="密码" class="iconfont upass input" />
        </van-cell-group>
    </div>
</template>

<script>
import { Field } from 'vant';
export default {
    name: 'Login',
    components: {
        [Field.name]: Field,
    }
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

.input::before {
    content: "";
    width: 60px;
    height: 60px;
    margin-right: 6px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
}

.input {
    padding: 0;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 10px;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 18px;
    line-height: 60px;
    color: #000;
}

.uname::before {
    content: "\e7d5";
}

.upass::before {
    content: "\e7c0";
}

.upass::after {
    content: "\e621";
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 24px;
}
</style>