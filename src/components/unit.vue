<template>
    <div class="unit">
        <div class="info" :style="unitStyle">
            <div style="width: 100px;padding: 8px 0 0 8px;">
                <div class="effect">效益<i>{{ effect }}</i></div>
                <div class="remain">剩余功率<i>{{ remain }}%</i></div>
                <div class="price">
                    价格<div class="rmb">￥{{ price }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue';

export default {
    name: 'Unit',
    props: {
        effect: String,
        remain: String,
        price: String,
        unitStyle: {
            background: String,
            width: String,
            height: String,
        }
    },
}
</script>

<style scoped lang="scss">
.unit {

    .info {
        display: flex;
        //flex: 1;
        text-align: left;
        padding: 2px;
        border-radius: 8px;

        .effect {
            margin-bottom: 2px;
            height: 18px;
            line-height: 18px;
            font-size: 16px;

            i {
                margin-left: 10px;
            }
        }

        .remain {
            margin-bottom: 6px;
            height: 16px;
            line-height: 16px;
            font-size: 12px;
            white-space: nowrap;
            overflow: visible;
        }

        .price {
            display: flex;
            align-items: center;
            height: 24px;
            line-height: 24px;
            font-size: 16px;
        }

        .price::before {
            content: "";
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #000;
        }
    }

    .info::before {
        content: "";
        flex: 1;
        background: url('../assets/unit.png');
        background-size: cover;
        border-radius: 8px;
        box-sizing: border-box;
    }
}
</style>