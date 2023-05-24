<template>
    <div class="unit">
        <div class="info" style="background: #fff;">
            <div>
                <div class="effect">效益<i>{{ effect }}</i></div>
                <div class="remain">剩余功率<i>{{ remain }}%</i></div>
                <div class="price">
                    <div class="rmb">￥{{ price }}</div>
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
        effect: Number,
        remain: Number,
        price: Number,
        width: Number,
    },
    computed: {
        getHeight() {
            return this.width * 0.9;
        }
    }
}
</script>

<style scoped lang="scss">
.unit {
    height: 86px;
    width: 188px;

    .info {
        display: flex;
        //flex: 1;
        text-align: left;
        padding: 2px;
        border-radius: 8px;

        .effect {
            margin-left: 6px;
            height: 18px;
            line-height: 18px;
            font-size: 18px;
        }

        .remain {
            margin-left: 6px;
            height: 16px;
            line-height: 16px;
            white-space: nowrap;
            overflow: visible;
        }

        .price {
            margin-left: 4px;
            height: 24px;
            line-height: 24px;
            font-size: 18px;
        }
    }

    .info::before {
        content: "";
        height: 82px;
        width: 88px;
        background: url('../assets/unit.png');
        background-size: contain;
        border-radius: 8px;
    }
}
</style>