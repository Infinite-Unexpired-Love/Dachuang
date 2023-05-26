<template>
    <section class="row1">
        <div class="row1-before iconfont">&#xe840;</div>
        <div class="inp">
            <input type="text" placeholder="请输入关键字" class="input">
            <div class="inp-after iconfont">&#xe741;</div>
        </div>
        <div class="row1-after iconfont">&#xe601;</div>
    </section>
</template>

<script>
export default {
    name: 'Header',
}

</script>

<style scoped lang="scss">
.row1 {
    display: flex;
    height: 32px;
    padding: 0 10px;
    box-sizing: border-box;

    .row1-before {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #fff;
        font-size: 28px;
    }

    .inp {
        flex: 1;
        display: flex;
        border-radius: 16px;
        background: #a8e5d1;
        padding-left: 16px;
        margin: 0 5px;

        .input {
            flex: 1;
            background: rgba(#a8e5d1, 0);
        }

        .input::-webkit-input-placeholder {
            /* WebKit browsers，webkit内核浏览器 */
            color: #e1f6ef;
        }

        .input:-moz-placeholder {
            /* Mozilla Firefox 4 to 18 */
            color: #e1f6ef;
        }

        .input::-moz-placeholder {
            /* Mozilla Firefox 19+ */
            color: #e1f6ef;
        }

        .input:-ms-input-placeholder {
            /* Internet Explorer 10+ */
            color: #e1f6ef;
        }

        .inp-after {
            width: 32px;
            height: 32px;
            line-height: 32px;
            text-align: center;
            color: #fff;
            font-size: 24px;
        }
    }

    .row1-after {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #fff;
        font-size: 28px;
    }
}
</style>