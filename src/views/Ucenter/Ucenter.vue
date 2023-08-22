<template>
    <div class="wrapper">
        <div class="ball">
            <div class="ball1"></div>
            <div class="ball2"></div>
            <div class="ball3"></div>
        </div>
        <div class="row">
            <button>编辑</button>
        </div>
        <div class="profile">
            <div class="headshot" :style="getHeadshot"></div>
            <div class="uname">用户名：{{ userInfo.uname }}</div>
        </div>
        <div class="utils">
            <div class="row1">
                <Square text="待付款" url="/" style="background: linear-gradient(to top right,#ff7c2b,#ff9f46);"></Square>
                <Square text="待评价" url="/" style="background: linear-gradient(to top right,#2b71fe,#43a6ff);"></Square>
                <Square text="历史订单" url="/history" style="background: linear-gradient(to top right,#29f4f5,#88fb95);">
                </Square>
                <Square :text="getWealth" url="/" style="background:linear-gradient(to top right,#b6325f,#f27877);">
                </Square>
            </div>
            <div class="line2 iconfont">
                <span>关怀模式</span>
            </div>
            <div class="line3 iconfont">
                <span>账户与安全</span>
            </div>
            <div class="line4 iconfont">
                <span>常见问题</span>
            </div>
            <div class="line5 iconfont">
                <span>我的客服</span>
            </div>
        </div>
        <div style="width: 100%;height: 66px;background: transparent;"></div>
        <Footer seleted="4"></Footer>
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
import Square from "@/components/square.vue"
import Footer from "@/components/footer.vue"
import Account from "@/api/Account"
import { Overlay } from "vant"
export default {
    name: 'Ucenter',
    components: {
        Footer,
        Square,
        [Overlay.name]:Overlay
    },
    data() {
        return {
            userInfo: {
                headshotUrl: require('@/assets/headshot.png'),
                uname: 'Seller1',
                remainSum: 43,
            },
            showErr:false,
            err: ''
        }
    },
    computed: {
        getHeadshot() {
            return {
                backgroundImage: `url(${this.userInfo.headshotUrl})`,
            };
        },
        getWealth() {
            return '余额￥' + this.userInfo.remainSum;
        }
    },
    async mounted(){
        const userId=localStorage.getItem('userId');
        await Account.getAccount(userId)
        .then(data=>{
            this.userInfo.uname=data.data[0].username;
            this.userInfo.remainSum=data.data[0].account;
        })
        .catch(()=>{
            this.err='出错啦<br>网络错误...';
            this.showErr=true;
        })
    }
}
</script>
<style scoped lang="scss">
.wrapper {
    position: relative;
    padding-top: 10vw;

    .ball {
        width: 300vw;
        height: 300vw;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-33.3%, -80%);
        background: #4edeb3;
        z-index: -1;
        overflow: hidden;

        .ball1 {
            width: 40vw;
            height: 40vw;
            border-radius: 50%;
            position: absolute;
            top: 76%;
            left: 50%;
            transform: translate(-36%, 50%);
            //background: #51e1a2;
            background: linear-gradient(to left, #51e1a2, #3eca84);
            z-index: 3;
            opacity: .5;
        }

        .ball2 {
            width: 80vw;
            height: 80vw;
            border-radius: 50%;
            position: absolute;
            top: 72%;
            left: 20%;
            transform: translate(10%, 0%);
            //background: #4bd99b;
            background: linear-gradient(to right, #4bd99b, #3eca84);
            z-index: 1;
            opacity: .5;
        }

        .ball3 {
            width: 80vw;
            height: 80vw;
            border-radius: 50%;
            position: absolute;
            top: 62%;
            left: 40%;
            transform: translate(15%, -5%);
            //background: #4fdea0;
            background: linear-gradient(to left, #4fdea0, #3eca84);
            z-index: 2;
            opacity: .5;
        }
    }

    .row {
        display: flex;
        justify-content: flex-end;
        padding-right: 7vw;

        button {
            width: 50px;
            height: 20px;
            line-height: 20px;
            border: 0;
            border-radius: 4px;
            background: #fff;
            font-size: 14px;
        }
    }

    .profile {
        height: 104px;
        margin-top: 36vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .headshot {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            background: #fff;
            background-position: center center;
            background-size: 54px;
            background-repeat: no-repeat;
        }

        .uname {
            height: 40px;
            line-height: 40px;
            text-align: center;
            font-size: 14px;
            color: #157055;
        }
    }

    .utils {
        padding: 40px 4vw;
        box-shadow: 0 -5px 0 #f7f7f7;

        .row1 {
            display: flex;
            justify-content: space-between;
        }

        div[class^='line'] {
            margin-top: 40px;
            display: flex;
            height: 28px;
            line-height: 28px;

            span {
                flex: 1;
                text-align: left;
                padding-left: 14px;
            }
        }


        div[class^='line']::before {
            content: "";
            display: inline-block;
            height: 24px;
            width: 24px;
            line-height: 24px;
            text-align: center;
            border-radius: 50%;
            border: 2px solid #49db85;
            color: #49db85;
        }

        div[class^='line']::after {
            content: "";
            display: inline-block;
            height: 8px;
            width: 8px;
            border: 2px solid transparent;
            border-top-color: #b9b9b9;
            border-right-color: #b9b9b9;
            transform: rotate(45deg);
            margin-top: 7px;
        }

        .line2::before {
            content: "\eb38" !important;
        }

        .line3::before {
            content: "\e605" !important;
        }

        .line4::before {
            content: "\e669" !important;
        }

        .line5::before {
            content: "\e78c" !important;
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