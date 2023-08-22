<template>
    <div class="wrapper">
        <Header backUrl="/" cancel="1" style="position: absolute;top: 6vw;width: 100%;"></Header>
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
        <div class="sell">
            <h4>买方申请</h4>
            <div class="apply-info">
                <div class="price">价格：￥{{ data.ap }}</div>
                <div class="trans">购买量：{{ data.buy }}kw/h</div>
            </div>
            <h4>确认修改</h4>
            <div class="conform">
                <div class="price">
                    ￥<span class="inp focus-off" @mouseenter="focusLike(1,$event)" @mouseleave="blurLike(1,$event)"
                        v-text="keyBoard1"></span>
                </div>
                <div class="trans">
                    kw/h<span class="inp focus-off" @mouseenter="focusLike(2,$event)" @mouseleave="blurLike(2,$event)"
                        v-text="keyBoard2"></span>
                </div>
            </div>
            <button @click="handleCommit">确定</button>
        </div>
        <div class="compensate"></div>
        <van-number-keyboard theme="custom" :show="show1" :hide-on-click-outside="false" extra-key="." close-button-text="发送"
            v-model="keyBoard1"  maxlength="6"></van-number-keyboard>
        <van-number-keyboard theme="custom" :show="show2" :hide-on-click-outside="false" extra-key="." close-button-text="发送"
            v-model="keyBoard2"  maxlength="6"></van-number-keyboard>
        <van-overlay :show="showRes" @click.stop>
            <div class="mask">
                <div class="block" >
                    <div class="iconfont" style="font-size: 48px;padding: 12px 0 12px 0;">&#xe620;</div>
                    <div v-html="res" @mouseenter="$router.go(-1);"></div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>
  

<script>
import Header from '@/components/header.vue';
import { Order } from '@/api/Order';
import { NumberKeyboard } from 'vant'
import { Overlay } from 'vant';
export default {
    name: 'Sell',
    components: {
        Header,
        [NumberKeyboard.name]: NumberKeyboard,
        [Overlay.name]:Overlay
    },
    data() {
        return {
            orderId:'',
            data: {

                op: 0.46,
                cp: 0.46,
                total: 180,
                remain: 180,
                ap: 0.43,
                buy: 100

            },
            keyBoard1: '',
            keyBoard2: '',
            show1: false,
            show2: false,
            showRes: false,
            res: ''
        }
    },
    methods: {
        focusLike(index,e) {
            e.target.classList.add('focus-on');
            e.target.classList.remove('focus-off');
            this['show'+index] = true;
        },
        blurLike(index,e) {
            e.target.classList.remove('focus-on');
            e.target.classList.add('focus-off');
            this['show'+index] = false;
        },
        handleCommit(){
            this.showRes=true;
            this.res='请稍候...';
            const order=new Order('','',this.keyBoard1,this.keyBoard2,2);
            order.commit(this.orderId)
            .then(data=>{
                console.log(data);
                if(data.code==0)
                    this.res='提交成功，<br>点击返回';
                else if(data.code=-1)
                    this.res=data.msg;
                else
                    this.res='未知错误...<br>点击返回';
            })
            .catch(err=>{
                console.log(err);
                this.res='网络错误，提交失败<br>点击返回';
            })
        }

    },
    mounted(){
        const query=this.$route.query;
        this.orderId=query.orderId;
        this.data.op=query.initPrice;
        this.data.cp=query.initPrice;
        this.data.total=query.initSum;
        this.data.remain=query.initSum;
        this.data.ap=query.salePrice?query.salePrice:query.initPrice;
        this.data.buy=query.saleSum?query.saleSum:query.initSum;

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

    .sell {
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

        h4 {
            padding-left: 14px;
            margin-bottom: 6px;
            text-align: left;
        }

        .apply-info {
            display: flex;
            justify-content: space-around;
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 28px;
        }

        .conform {
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

                .inp {
                    display: inline-block;
                    width: 20vw;
                    height: 24px;
                    line-height: 24px;
                    text-align: center;
                    vertical-align: middle;
                    transition: all 0.1s;
                }

                .focus-off {
                    border: 1px solid transparent;
                    border-bottom-color: #b0b3b3;
                }

                .focus-on {
                    border: 1px solid #39b2e2;
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

    .mask {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        .block {
            width: 200px;
            height: 200px;
            background-color: #fff;

        }
    }
}
</style>