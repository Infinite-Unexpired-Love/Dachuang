<template>
    <div class="square">
        <div class="ball"></div>
        <div class="oval"></div>
        <div class="content">{{ text }}</div>
    </div>
</template>

<script>
export default {
    name: 'Square',
    props: {
        text: String,
    }
}
</script>

<style scoped lang="scss">
.square {
    position: relative;
    top: 0;
    width: 20vw;
    height: 20vw;
    border-radius: 3vw;
    overflow: hidden;

    .ball {
        width: 20vw;
        height: 20vw;
        border-radius: 50%;
        position: absolute;
        top: -70%;
        right: -30%;
        background: rgba(#fff, .3);
    }

    .oval {
        width: 4vw;
        height: 8vw;
        border-radius: 2vw/4vw;
        position: absolute;
        bottom: -12%;
        left: -4%;
        background: rgba(#fff, .3);
    }

    .content {
        color: #fff;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 3px;
        text-indent: 3px;
        text-align: center;
        margin: 0 auto;
        margin-top: 50%;
        transform: translateY(-50%);
    }
}
</style>