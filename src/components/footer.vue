<template>
    <footer>
        <div class="iconfont" :class="{ 'selected': seleted == 1 }"><router-link to="/home">&#xe867;</router-link></div>
        <div class="iconfont" :class="{ 'selected': seleted == 2 }"><router-link to="/message">&#xe635;</router-link></div>
        <div class="iconfont" :class="{ 'selected': seleted == 3 }"><router-link to="/post">&#xe666;</router-link></div>
        <div class="iconfont" :class="{ 'selected': seleted == 4 }"><router-link to="/ucenter">&#xe6a8;</router-link></div>
    </footer>
</template>

<script>
import router from '@/router';

export default {
    name: "Footer",
    props: {
        seleted: String,
    },
    components: { router }
}
</script>

<style scoped lang="scss">
.iconfont {
    a {
        color: #000;
    }
}

.selected {
    a {
        color: #25bc68 !important;
    }
}

footer {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 63px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 20px;
    background: #fff;
    box-shadow: 0 1px 4px #ccc;

    div {
        height: 40px;
        width: 60px;
        line-height: 40px;
        font-size: 40px;
        box-sizing: border-box;
    }

    div::after {
        content: "";
        display: block;
        height: 14px;
        line-height: 14px;
        font-size: 14px;
        color: #6a6a6a;
        text-align: center;
    }

    div:nth-child(1)::after {
        content: "首页";
    }

    div:nth-child(2)::after {
        content: "消息";
    }

    div:nth-child(3)::after {
        content: "售电";
    }

    div:nth-child(4)::after {
        content: "个人中心";
    }
}
</style>