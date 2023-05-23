<template>
    <footer>
        <div class="iconfont" :class="{ 'selected': seleted == 1 }">&#xe867;</div>
        <div class="iconfont" :class="{ 'selected': seleted == 2 }">&#xe635;</div>
        <div class="iconfont" :class="{ 'selected': seleted == 3 }">&#xe666;</div>
        <div class="iconfont" :class="{ 'selected': seleted == 4 }">&#xe6a8;</div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: {
        seleted: Number,

    }
}
</script>

<style scoped lang="scss">
.selected {
    color: #25bc68;
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