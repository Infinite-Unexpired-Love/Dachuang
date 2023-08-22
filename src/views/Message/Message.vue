<template>
    <div class="wrapper">

        <div class="ball"></div>
        <div class="row">
            <Header need-scan="1"></Header>
        </div>
        <div class="messages">
            <ul>
                <!-- <li @click="toSell">
                    <Msg :style="msgStyle" :options="msgData[0]"></Msg>
                </li> -->
                <li v-for="(item, index) in msgData" :key="index" @click="handleRoute(index)">
                    <Msg :style="msgStyle" :options="msgData[index]"></Msg>
                </li>
            </ul>
            <div class="bottom">——我是有底线的——</div>
        </div>
        <div style="width: 100%;height: 66px;background: transparent;"></div>
        <Footer seleted="2"></Footer>
        <van-overlay :show="showErr" @click="showErr = false">
            <div class="mask">
                <div class="block">
                    <div class="iconfont" style="font-size: 48px;padding: 12px 0 12px 0;">&#xe6c6;</div>
                    <div v-html="err"></div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import Msg from '@/components/message.vue'
import Footer from '@/components/footer.vue'
import { Overlay } from 'vant'
import { Order } from '@/api/Order'
export default {
    name: 'Message',
    components: {
        Footer,
        Msg,
        Header,
        [Overlay.name]: Overlay
    },
    data() {
        return {
            clientWidth: 0,
            ballStyle: {
                width: 0,
                height: 0,
            },
            msgStyle: {
                zIndex: 999,
            },
            msgData: [
                {
                    op: 0.46,
                    cp: 0.46,
                    ap: 0.43,
                    sales: 180,
                    ctran: 180,
                    atran: 100,
                    date: "2023-4-14 9:41:23",
                },
            ],
            showErr: false,
            err: '',
        }
    },
    methods: {
        toSell() {
            this.$router.push('/sell');
        },
        handleRoute(index) {
            const data = this.msgData[index];
            const myPublishId = localStorage.getItem('publishId');
            const buyerId=localStorage.getItem('buyerId');
            switch (data.state) {
                case 1: if (myPublishId == data.publishId) {
                    this.$router.push({
                        path: '/sell',
                        query:
                        {
                            orderId: data.orderId,
                            initPrice: data.op,
                            initSum: data.sales,
                            salePrice: data.ap,
                            saleSum: data.atran
                        }
                    })
                    ret
                }
                else {
                    this.showErr = true;
                    this.err = '请耐心等待卖家处理...';
                }
                    return
                case 2: if(buyerId==data.buyerId) {
                    this.$router.push({
                        path: '/purchase',
                        query: {
                            orderId:data.orderId,
                            state:3
                        }
                    })
                }
                else{
                    this.showErr = true;
                    this.err = '请耐心等待买家处理...';
                }
                return
                case 3:this.showErr = true;
                    this.err = '该订单已完成...';
            }
        }
    },
    async mounted() {
        const buyerId = localStorage.getItem('userId');
        const order = new Order(buyerId, '', '', '');
        await order.orders()
            .then(data => {
                let datas = Array(data.data.length);
                for (let i = 0; i < datas.length; i++) {
                    let obj = {
                        op: data.data[i].initPrice,
                        cp: data.data[i].initPrice,
                        ap: data.data[i].salePrice,
                        sales: data.data[i].initSum,
                        ctran: data.data[i].initSum,
                        atran: data.data[i].saleSum,
                        date: data.data[i].completeTime,
                        orderId: data.data[i].orderId,
                        publishId: data.data[i].publishId,
                        buyerId:data.data[i].buyerId,
                        state: data.data[i].state
                    };
                    datas.push(obj);
                }
                this.msgData = datas;
            })
            .catch(() => {
                this.showErr = true;
                this.err = '出错啦<br>网络错误...';
            })
    }

}
</script>

<style scoped lang="scss">
.wrapper {
    overflow-x: hidden;
    position: relative;

    .row {
        margin-top: 6vw;
    }

    .ball {
        width: 200vw;
        height: 200vw;
        border-radius: 50%;
        position: absolute;
        top: -150vw;
        left: -50%;
        background: #4edeb3;
        z-index: -1;
    }

    .messages {
        width: 86%;
        margin: 0 auto;
        margin-top: 16vw;

        .bottom {
            margin-top: 20px;
            height: 12px;
            line-height: 12px;
            font-size: 12px;
            text-align: center;
            color: #c7c7c7;
        }
    }

    .mask {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        .block {
            width: 120px;
            height: 120px;
            background-color: #fff;

        }
    }
}

.wrapper::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
}
</style>