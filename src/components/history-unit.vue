<template>
    <div class="history">
        <div class="text">
            <div class="row1">原价：￥{{ options.op }}</div>
            <div class="row2">交易价格：￥{{ options.tp }}<div>X{{ options.quantity }}</div>
            </div>
            <div class="row3">实付款：￥{{ options.paid }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HistoryUnit',
    props: {
        options: {
            op: Number,
            tp: Number,
            paid: Number,
            quantity: Number,
        },
    }
}
</script>

<style scoped lang="scss">
.history {
    width: 100%;
    height: 32vw;
    padding: 3vw 4vw;
    display: flex;
    justify-content: space-between;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 0 36px 10px #2fccb1;

    .text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 60%;

        div[class^='row'] {
            padding: 2px 8px;
            background: #00aea9;
            color: #fff;
            border-radius: 4px;
        }
    }

}

.history::before {
    content: "";
    height: 82%;
    width: 33%;
    background: url("@/assets/unit.png");
    background-size: contain;
    margin: auto;
    margin-left: 0;
}
</style>