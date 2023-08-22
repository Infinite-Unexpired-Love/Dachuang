<template>
    <div class="wrapper">
        <Header backUrl="/ucenter"></Header>
        <Ball200></Ball200>
        <div class="tabs">
            <div class="heads">
                <a :class="tab1" href="javascript:0;" @click="toggle(1)">全部</a>
                <a :class="tab2" href="javascript:0;" @click="toggle(2)">已完成</a>
                <a :class="tab3" href="javascript:0;" @click="toggle(3)">已取消</a>
            </div>
            <div class="data">
                <ul class="ul" v-if="flag == 1">
                    <li v-for="(options, index) in getAllOptions" :key="index">
                        <HistoryUnit :options="options" :index="index"></HistoryUnit>
                    </li>
                </ul>
                <ul class="ul" v-if="flag == 2">
                    <li v-for="(options, index) in getAllAccomplished" :key="index">
                        <HistoryUnit :options="options" :index="index"></HistoryUnit>
                    </li>
                </ul>
                <ul class="ul" v-if="flag == 3">
                    <li v-for="(options, index) in getAllCanceled" :key="index">
                        <HistoryUnit :options="options" :index="index"></HistoryUnit>
                    </li>
                </ul>
                <div class="bottom">——没有其他订单——</div>
            </div>
        </div>
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
import Header from '@/components/header.vue';
import Ball200 from '@/components/ball200.vue';
import HistoryUnit from '@/components/history-unit.vue'
import { Overlay } from 'vant';
import { Order } from '@/api/Order';
export default {
    name: 'History',
    components: {
        Header,
        Ball200,
        HistoryUnit,
        [Overlay.name]: Overlay
    },
    data() {
        return {
            options: [
                {
                    op: 0.46,
                    tp: 0.43,
                    quantity: 100,
                },
                {
                    op: 0.46,
                    tp: 0.43,
                    quantity: 100,
                },
            ],
            accomplished: [
                {
                    op: 0.46,
                    tp: 0.43,
                    quantity: 100,
                },
            ],
            canceled: [

            ],
            showErr: false,
            err: '',
            tab1: 'select',
            tab2: '',
            tab3: '',
            flag: 1
        }
    },
    methods: {
        toggle(index) {
            this.flag = index;
            this.tab1 = '';
            this.tab2 = '';
            this.tab3 = '';
            this['tab' + index] = 'select';
        }
    },
    computed: {
        getAllOptions() {
            this.options.forEach(obj => {
                obj.paid = obj.tp * obj.quantity;
            })
            return this.options;
        },
        getAllAccomplished() {
            this.accomplished.forEach(obj => {
                obj.paid = obj.tp * obj.quantity;
            })
            return this.accomplished;
        },
        getAllCanceled() {
            this.canceled.forEach(obj => {
                obj.paid = obj.tp * obj.quantity;
            })
            return this.canceled;
        }
    },
    async mounted() {
        const buyerId = localStorage.getItem('userId');
        const order = new Order(buyerId);
        await order.orders()
            .then(data => {
                const length = data.data.length;
                let allOrders = Array(length);
                let accomplished = Array();
                for (let i = 0; i < length; i++) {
                    let obj = {
                        op: data.data[i].initPrice,
                        tp: data.data[i].salePrice,
                        quantity: data.data[i].saleSum,
                    }
                    allOrders.push(obj);
                    if (data.data[i].state == 3) {
                        accomplished.push(obj);
                    }
                }
                this.options = allOrders;
                this.accomplished = accomplished;

            })
            .catch(() => {
                this.err = '出错啦<br>网络错误...';
                this.showErr = true;
            })
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    position: relative;
    padding-top: 6vw;

    .tabs {
        width: 78vw;
        margin: 0 auto;
        padding-top: 10px;
        //background: rgba(#00aca7, .4);
        //box-shadow: 0 0 24px 8px #00aca7;

        .heads {
            display: flex;
            justify-content: space-around;

            a {
                color: #fff;
            }

            .select::after {
                content: "";
                display: block;
                height: 2px;
                width: 80%;
                border-radius: 1px;
                margin: 0 auto;
                margin-top: 2px;
                background: #fff;
                box-shadow: 0 0 6px 2px #fff;
            }
        }

        .data {
            margin-top: 6px;

            .ul {
                li {
                    margin-top: 36px;
                }

                li:first-child {
                    margin-top: 0;
                }
            }


            .bottom {
                margin-top: 36px;
                height: 12px;
                line-height: 12px;
                font-size: 12px;
                text-align: center;
                color: #c7c7c7;
            }
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
</style>