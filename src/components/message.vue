<template>
    <div class="message">
        <div class="delete">
            <div class="crush">
                <button></button>
            </div>
        </div>
        <div class="info">
            <div class="row"><span>原价：￥{{ options.op }}</span><span>出售量：{{ options.sales }}kw</span></div>
            <div class="row"><span>现价：￥{{ options.cp }}</span><span>交易量：{{ options.ctran }}kw</span></div>
            <div class="row"><span>申请价：￥{{ options.ap }}</span><span>交易量：{{ options.atran }}kw</span></div>
            <div class="row"><span>时间：{{ options.date }}</span></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Message',
    props: {
        options: {
            op: Number,
            cp: Number,
            ap: Number,
            sales: Number,
            ctran: Number,
            atran: Number,
            date: String,
        }
    }
}
</script>

<style scoped lang="scss">
.message {
    height: 178px;
    width: 100%;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 12px #c2e6e5;
    display: flex;

    .info {
        width: 250px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 5px 10px 5px 5px;

        .row {
            background: #01b6b1;
            border-radius: 6px;
            color: #fff;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;

            span {
                font-size: 13px;
            }
        }
    }

    .delete {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        .crush {
            width: 95%;
            max-width: 80px;
            max-height: 80px;

            button {
                display: block;
                width: 100%;
                height: 0;
                padding-bottom: 100%;
                border: 0;
                border-radius: 9999px;
                background: linear-gradient(to right, #04b9c9, #09edd1);
                line-height: 100%;
                position: relative;
                box-shadow: 0 4px 4px #777;
            }

            button::before {
                content: "删除";
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                height: 20px;
                line-height: 20px;
                font-size: 12px;
                color: #575656;
                display: inline-block;
            }
        }
    }
}
</style>
