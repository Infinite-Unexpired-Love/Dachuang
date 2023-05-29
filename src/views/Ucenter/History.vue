<template>
    <div class="wrapper">
        <Header backUrl="/ucenter"></Header>
        <Ball200></Ball200>
        <div class="tabs">
            <div class="heads">
                <a href="javascript;">全部</a>
                <a href="javascript;">已完成</a>
                <a href="javascript;">已取消</a>
            </div>
            <div class="data">
                <ul class="ul">
                    <li v-for="(options, index) in getAllOptions">
                        <HistoryUnit :options="options" :index="index"></HistoryUnit>
                    </li>
                </ul>
                <div class="bottom">——没有其他订单——</div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Ball200 from '@/components/ball200.vue';
import HistoryUnit from '@/components/history-unit.vue'
export default {
    name: 'History',
    components: {
        Header,
        Ball200,
        HistoryUnit,
    },
    data() {
        return {
            options: [
                {
                    op: 0.46,
                    tp: 0.43,
                    quantity: 100,
                },

            ]
        }
    },
    computed: {
        getAllOptions() {
            this.options.forEach(obj => {
                obj.paid = obj.tp * obj.quantity;
            })
            return this.options;
        }
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

            a::after {
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
                    margin-top: 72px;
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
}
</style>