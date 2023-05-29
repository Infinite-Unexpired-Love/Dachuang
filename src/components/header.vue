<template>
    <section class="header">
        <div class="row1-before iconfont">
            <span v-if="needScan" @click="scanCode">&#xe840;</span>
            <router-link :to="backUrl" v-if="!needScan">&#xe66f;</router-link>
        </div>
        <div class="inp" v-if="!cancel">
            <input type="text" placeholder="请输入关键字" class="input">
            <div class="inp-after iconfont">&#xe741;</div>
        </div>
        <div class="row1-after iconfont">
            <router-link to="home" v-if="needScan">&#xe601;</router-link>
            <div class="cancel" v-if="cancel">取消订单</div>
        </div>
    </section>
</template>

<script>
import router from '@/router';

export default {
    name: "Header",
    props: {
        needScan: String,
        cancel: String,
        backUrl: String,
    },
    components: { router },
    methods: {
        scanCode() {
            console.log('浏览器信息' + navigator.userAgent);
            this.$router.push({
                path: '/scan'
            });
        }
    }
}

</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    min-height: 32px;
    padding: 0 10px;
    box-sizing: border-box;

    .row1-before {
        width: 32px;
        height: 32px;
        line-height: 32px;
        text-align: center;
        color: #fff;
        font-size: 28px;

        a {
            color: #fff !important;
        }
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
        min-width: 32px;
        min-height: 32px;
        line-height: 32px;
        text-align: center;
        color: #fff;
        font-size: 28px;

        a {
            color: #fff !important;
        }

        .cancel {
            background: #fff;
            padding: 0 6px;
            border-radius: 6px;
            color: #757474;
            font-size: 14px;
            font-weight: 700;
        }
    }
}
</style>