<template>
    <div class="loading">
        <img src="../assets/loading.gif" alt="">
    </div>
</template>

<script>
export default {
    name: 'Loading'
}
</script>

<style lang="scss" scoped>
.loading {
    height: 100%;
    width: 100%;
    position: relative;
    background: rgba(0,0,0,0.7);
    img {
        width: 64px;
        height: 64px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
}
</style>