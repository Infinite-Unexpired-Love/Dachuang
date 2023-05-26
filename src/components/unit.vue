<template>
    <div class="unit">
        <div class="info" :style="unitStyle">
            <div class="utils">
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

export default {
    name: 'Unit',
    props: {
        effect: Number,
        remain: Number,
        price: Number,
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
        justify-content: space-between;
        text-align: left;
        padding: 2px;
        border-radius: 8px;
        box-shadow: 0 -4px 8px#a2cfba;

        .utils {
            width: 52%;
            padding: 8px 8px 8px 0;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            box-sizing: border-box;


            .effect {
                width: 60%;
                min-width: 70px;
                margin-bottom: 2px;
                height: 18px;
                line-height: 18px;
                font-size: 16px;

                i {
                    margin-left: 10px;
                }
            }

            .remain {
                width: 60%;
                min-width: 90px;
                display: block;
                margin-bottom: 6px;
                height: 16px;
                line-height: 16px;
                font-size: 12px;
                text-align: center;
                white-space: nowrap;
                overflow: visible;
                background: #fff0c1;
                color: #c68b1d;
                border-radius: 3px;

                i {
                    margin-left: 2px;
                    font-style: normal;
                }
            }

            .price {
                width: 80%;
                min-width: 93px;
                position: relative;
                display: flex;
                align-items: center;
                height: 20px;
                line-height: 20px;
                font-size: 14px;
                background: #ffdf73;
                color: #c68b1d;
                border-radius: 4px;
                padding-left: 4px;

                .rmb {
                    position: absolute;
                    right: 0;
                    background: linear-gradient(to right, #fd2b33, #fc9558);
                    color: #000;
                    padding: 0 6px;
                    border-radius: 4px;
                }
            }

            .price::before {
                content: "";
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #fe8b02;
            }
        }
    }

    .info::before {
        content: "";
        width: 46%;
        background: url('../assets/unit.png');
        background-size: cover;
        border-radius: 8px;
        box-sizing: border-box;
    }
}
</style>