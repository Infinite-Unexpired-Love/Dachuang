<template>
    <div class="wrapper">

        <div class="ball"></div>
        <div class="row">
            <Header></Header>
        </div>
        <div class="messages">
            <ul>
                <li>
                    <Msg :style="msgStyle" :options="msgData[0]"></Msg>
                </li>
            </ul>
            <div class="bottom">——我是有底线的——</div>
        </div>
        <div style="width: 100%;height: 66px;background: transparent;"></div>
        <Footer seleted="2"></Footer>
    </div>
</template>

<script>
import Header from '@/components/header.vue'
import Msg from '@/components/message.vue'
import Footer from '@/components/footer.vue'
export default {
    name: 'Message',
    components: {
        Footer,
        Msg,
        Header,
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
                }
            ],
        }
    },
    // mounted() {
    //     this.clientWidth = document.body.clientWidth;
    //     console.log(this.clientWidth);
    //     window.addEventListener('resize', () => {
    //         this.clientWidth = document.body.clientWidth;
    //     });
    //     this.ballStyle.width = this.clientWidth * 2 + 'px';
    //     this.ballStyle.height = this.clientWidth * 2 + 'px';
    // },
    // watch: {
    //     clientWidth(newval) {
    //         this.ballStyle.width = newval * 2 + 'px';
    //         this.ballStyle.height = newval * 2 + 'px';
    //     }
    // }
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
}

.wrapper::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
}
</style>