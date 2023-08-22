<template>
    <div class="wrapper">
        <Header backUrl="/" cancel="1" style="position: absolute; top: 6vw; width: 100%"></Header>
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
                <!-- <div class="price">￥<input type="text"  v-model="keyBoard"></div>
                <div class="trans">kw/h<input type="text" @focus="prevent($event)"></div> -->
                <div class="price">
                    ￥<span class="inp focus-off" @mouseenter="focusLike(1,$event)" @mouseleave="blurLike(1,$event)"
                        v-text="keyBoard1"></span>
                </div>
                <div class="trans">
                    kw/h<span class="inp focus-off" @mouseenter="focusLike(2,$event)" @mouseleave="blurLike(2,$event)"
                        v-text="keyBoard2"></span>
                </div>
            </div>
            <button @click="showNext=true">下一步</button>
        </div>
        <div class="compensate"></div>
        <van-number-keyboard theme="custom" :show="show1" :hide-on-click-outside="false" extra-key="." close-button-text="发送"
            v-model="keyBoard1"  maxlength="6"></van-number-keyboard>
        <van-number-keyboard theme="custom" :show="show2" :hide-on-click-outside="false" extra-key="." close-button-text="发送"
            v-model="keyBoard2"  maxlength="6"></van-number-keyboard>
        <van-overlay :show="showNext" >
            <div class="mask">
                <div class="block" >
                    <div class="iconfont" style="font-size: 48px;padding: 12px 0 12px 0;">&#xe620;</div>
                    <div v-if="!showRes">
                        <p>请确认您输入的数据无误</p>
                        <div style="display: flex;justify-content: space-between;padding: 0 12px;margin-top: 24px;">
                            <button @click="showNext=false;">取消</button>
                            <button v-if="!toPay" @click="handlePublish">发起价格协商</button>
                            <button v-if="toPay" @click="handlePay">支付</button>
                        </div>
                    </div>
                    <div v-if="showRes" v-html="res" @mouseenter="showNext=false;"></div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>
  

<script>
import Header from '@/components/header.vue';
import { NumberKeyboard } from 'vant';
import { Order } from '@/api/Order';
import { Overlay } from 'vant';
export default {
    name: 'Purchase',
    components: {
        Header,
        [NumberKeyboard.name]: NumberKeyboard,
        [Overlay.name]:Overlay
    },
    data() {
        return {
            data: {
                op: 0.46,
                cp: 0.46,
                total: 180,
                remain: 180,

            },
            buyerId: '',
            offerId: '',
            orderId: '',
            //salePrice: '',
            //saleSum: '',
            keyBoard1: '',
            keyBoard2: '',
            show1: false,
            show2: false,
            showNext:false,
            showRes: false,
            toPay:false,
            res:''
        }
    },
    methods: {
        prevent(e) {
            //document.activeElement.blur();
            e.target.setAttribute('readonly', 'readonly');
            setTimeout(() => {
                e.target.removeAttribute('readonly');
            }, 200);

        },
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
        handlePublish(){
            this.showRes=true;
            this.res='请稍候...';
            const order=new Order(this.buyerId,this.offerId,this.keyBoard1,this.keyBoard2,1);
            order.publish()
            .then(data=>{
                console.log(data);
                if(data.code==0)
                    this.res='请求成功，请在消息页查看进度<br>点击关闭此弹窗';
                else if(data.code=-1)
                    this.res=data.msg;
                else
                    this.res='未知错误...<br>点击关闭此弹窗';
            })
            .catch(err=>{
                console.log(err);
                this.res='网络错误，请求失败<br>点击关闭此弹窗';
            })
        },
        handlePay(){
            this.showRes=true;
            this.res='请稍候...';
            const order=new Order(this.buyerId,this.offerId,this.keyBoard1,this.keyBoard2,1);
            order.pay(this.orderId)
            .then(data=>{
                console.log(data);
                if(data.code==0)
                    this.res='支付成功，<br>点击关闭此弹窗';
                else if(data.code==-1)
                    this.res='支付失败，<br>点击关闭此弹窗';
                else
                    this.res='未知错误...<br>点击关闭此弹窗';
            })
            .catch(err=>{
                console.log(err);
                this.res='网络错误，请求失败<br>点击关闭此弹窗';
            })
        }
    },
    mounted(){
        this.buyerId=localStorage.getItem('userId');
        const query=this.$route.query;
        this.offerId=query.offerId;
        this.orderId=query.orderId;
        const state=query.state;
        this.data.op=query.initPrice;
        this.data.total=query.initSum;
        this.data.cp=query.salePrice?query.salePrice:query.initPrice;
        this.data.remain=query.saleSum?query.saleSum:query.initSum;
        if(state==1){
            this.toPay=false;
        }
        if(state==3){
            this.toPay=true;
            this.orderId=params[2].split('=')[1];
            //this.salePrice=params[3].split('=')[1];
            //this.saleSum=params[4].split('=')[1];
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
        background: linear-gradient(#56efc3 0,
                #39b2e2 33.3%,
                #39b2e2 66.6%,
                #36d4e1 100%);

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
            background: url("@/assets/border-top.png");
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

            button {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                border: 0;
                border-radius: 8px;
                padding: 0 4px;
                color: #fcfafa;
                background: #1dd5e6;
            }
        }
    }
}
</style>