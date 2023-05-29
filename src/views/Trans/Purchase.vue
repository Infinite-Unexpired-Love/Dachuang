<template>
    <div class="wrapper">
        <Header backUrl="/home" cancel="1" style="position: absolute;top: 6vw;width: 100%;"></Header>
        <div class="static">
            <div class="row1">
                <div class="price">标价：￥&nbsp;{{ data.op }}</div>
                <div class="trans">出售量：{{ data.total }}&nbsp;kw/h</div>
            </div>
            <div class="row2">
                <div class="price">现价：￥&nbsp;{{ data.cp }}</div>
                <div class="trans">交易量：{{ data.remain }}&nbsp;kw/h</div>
            </div>
        </div>
        <div class="buy">
            <a href="javascript:0">申请协商修改</a>
            <div class="conform">
                <div class="price">￥<input type="text" @focus="prevent"></div>
                <div class="trans">kw/h<input type="text" @focus="prevent"></div>
            </div>
            <button>支付</button>
        </div>
        <div class="compensate"></div>
        <van-number-keyboard theme="custom" show="1" :hide-on-click-outside="false" extra-key="." close-button-text="发送"
            @blur="show = false"></van-number-keyboard>

    </div>
</template>
  

<script>
import Header from '@/components/header.vue';
import { NumberKeyboard } from 'vant'
export default {
    name: 'Purchase',
    components: {
        Header,
        [NumberKeyboard.name]: NumberKeyboard,
    },
    data() {
        return {
            data: {
                op: 0.46,
                cp: 0.46,
                total: 180,
                remain: 180,
            }
        }
    },
    methods: {
        prevent() {
            document.activeElement.blur();
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    position: relative;

    .static {
        position: relative;
        z-index: -1;
        height: 64vw;
        padding: 20vw 0;
        background: linear-gradient(#56efc3 0, #39b2e2 33.3%, #39b2e2 66.6%, #36d4e1 100%);

        .row1 {
            padding: 0 10vw;
            height: 24px;
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            color: #fff;
            margin-bottom: 12px;

            .price {
                font-size: 16px;
                line-height: 30px;
            }

            .trans {
                font-size: 18px;
                line-height: 24px;
            }
        }

        .row2 {

            padding: 0 10vw;
            height: 24px;
            display: flex;
            justify-content: space-between;
            font-weight: 700;
            color: #fff;

            .price {
                font-size: 16px;
                line-height: 22px;
            }

            .trans {
                font-size: 18px;
                line-height: 24px;
            }

        }
    }

    .buy {
        position: relative;

        &::before {
            z-index: -1;
            position: absolute;
            top: -32vw;
            left: 0;
            content: "";
            width: 100%;
            height: 50vw;
            background: url('@/assets/border-top.png');
            background-size: cover;
        }

        a {
            display: block;
            margin-left: 18px;
            color: #000;
            text-align: left;
            font-weight: 700;
        }

        .conform {
            margin-top: 20px;
            display: flex;
            justify-content: space-around;

            .price,
            .trans {
                font-size: 20px;
                font-weight: 700;
                color: #040404;

                input {
                    width: 20vw;
                    text-align: center;
                    border-bottom: 1px solid #b0b3b3;
                }

                &::before {
                    display: block;
                    content: "";
                    font-size: 20px;
                    color: #5c5b5b;
                    text-align: left;
                    margin-left: -20px;
                    margin-bottom: 16px;
                }
            }

            .price::before {
                content: "价格";
            }

            .trans::before {
                content: "交易量";
            }

        }

        button {
            margin: 0 auto;
            margin-top: 40px;
            display: block;
            width: 164px;
            height: 40px;
            font-size: 24px;
            font-weight: 700;
            letter-spacing: 8px;
            text-indent: 8px;
            color: #fcfafa;
            border: 0;
            border-radius: 8px;
            background: linear-gradient(to right, #46aef7, #1dd5e6);
        }

    }

    .compensate {
        width: 100%;
        height: 39.3vw;
    }
}
</style>