<template>
    <div class="wrapper">
        <div class="ball-top">
            <div class="ball1"></div>
            <div class="ball2"></div>
            <div class="ball3"></div>
        </div>
        <div class="compensate">
            <div class="main">
                <h2>发布售电信息</h2>
                <div class="inp">
                    <label>价格</label><input type="text" v-model="initPrice">
                </div>
                <div class="inp">
                    <label>数量</label><input type="text" v-model="initSum">
                </div>
                <div class="option">
                    <span>看不见我</span><button>取消发布</button><button @click="showNext=true;">发布</button>
                </div>
            </div>
        </div>

        <div class="ball-bottom">
            <div class="ball1"></div>
            <div class="ball2"></div>
        </div>
        <Footer seleted="3"></Footer>
        <van-overlay :show="showNext" >
            <div class="mask">
                <div class="block" >
                    <div class="iconfont" style="font-size: 48px;padding: 12px 0 12px 0;">&#xe620;</div>
                    <div v-if="!showRes">
                        <p>请确认您输入的数据无误</p>
                        <div><strong v-text="getPrice"></strong><br><strong v-text="getSum"></strong></div>
                        <div style="display: flex;justify-content: space-between;padding: 0 12px;margin-top: 24px;">
                            <button @click="showNext=false;">取消</button>
                            <button @click="handlePost">确认发布</button>
                        </div>
                    </div>
                    <div v-if="showRes" v-html="res" @mouseenter="$router.push('/');"></div>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import Footer from "@/components/footer.vue"
import Offer from "@/api/Offer";
import { Overlay } from "vant";
export default {
    name: 'Sell',
    components: {
        Footer,
        [Overlay.name]:Overlay
    },
    data(){
        return {
            initPrice: '',
            initSum : '',
            showNext: false,
            showRes: false,
            res: ''
        }
    },
    methods: {
        handlePost(){
            this.showRes=true;
            this.res='请稍候...';
            const userId=localStorage.getItem('userId');
            const publishId = localStorage.getItem('publishId');
            const data={
                userId,
                publishId,
                initPrice:this.initPrice,
                initSum:this.initSum
            }
            Offer.handlePost(JSON.stringify(data))
            .then(res=>{
                if(res.code==0)
                    this.res='发布成功<br>点击返回首页';
                else if(res.code==-1)
                    this.res='发布失败<br>点击返回首页';
                else
                    this.res='未知错误<br>点击返回首页';

            })
            .catch(()=>{
                this.res='网络错误<br>点击返回首页';
            })
        }
    },
    computed: {
        getPrice(){
            return '价格：'+this.initPrice;
        },
        getSum(){
            return '数量：'+this.initSum;
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    position: relative;
    overflow: hidden;

    .ball-top {
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
            top: 84%;
            left: 56%;
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
            top: 68%;
            left: 19%;
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
            top: 64%;
            left: 41%;
            transform: translate(15%, -5%);
            //background: #4fdea0;
            background: linear-gradient(to left, #4fdea0, #3eca84);
            z-index: 2;
            opacity: .5;
        }
    }

    .compensate {
        position: relative;
        height: 200vw;
        max-height: calc(100vw + 50vh);
        min-height: 100vh;
        padding-top: 65vw;

        .main {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80vw;
            padding: 10px 14px;
            background: #ebeaf3;
            border-radius: 8px;
            box-shadow: 0 0 10px 1px #2c2c2c;

            h2 {
                font-weight: normal;
                font-size: 16px;
                letter-spacing: 4px;
                text-align: left;
                color: #3a3939;
                margin-bottom: 12px;
            }

            .inp {
                height: 40px;
                display: flex;
                padding: 6px 12px;
                border: 1px solid #b5b4b9;
                border-radius: 8px;
                margin-bottom: 6px;

                label {
                    letter-spacing: 4px;
                    line-height: 26px;
                    color: #4f4c4c;
                    font-size: 16px;
                }

                input {
                    flex: 1;
                    padding-left: 16px;
                    background: #ebeaf3;
                }
            }

            .option {
                display: flex;
                justify-content: space-between;
                padding: 10px 14px 12px;

                span {
                    width: 64px;
                    color: #ebeaf3;
                }

                button {
                    border: 0;
                    background: inherit;
                    color: #43598f;
                    font-size: 14px;
                    font-weight: 700;
                }
            }

        }

        .main::after {
            content: '';
        }
    }


    .ball-bottom {
        width: 300vw;
        height: 300vw;
        border-radius: 50%;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translate(-33.3%, 80%);
        background: #4edeb3;
        z-index: -1;
        overflow: hidden;

        .ball1 {
            width: 44vw;
            height: 30vw;
            border-radius: 22vw/15vw;
            position: absolute;
            top: 2%;
            left: 36%;
            background: #fff;
            z-index: 3;
            opacity: .2;
        }

        .ball2 {
            width: 80vw;
            height: 80vw;
            border-radius: 50%;
            position: absolute;
            top: 0;
            left: 40%;
            transform: translate(15%, 20%);
            background: linear-gradient(to left, #4fdea0, #3eca84);
            z-index: 2;
            opacity: .5;
        }
    }

    .mask {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;

        .block {
            width: 200px;
            height: 200px;
            background-color: #fff;

            button {
                display: inline-block;
                height: 30px;
                line-height: 30px;
                border: 0;
                border-radius: 8px;
                padding: 0 4px;
                color: #fcfafa;
                background: #1dd5e6;
            }
        }
    }
}
</style>