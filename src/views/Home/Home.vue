<template>
    <div class="wrapper" ref="wrapper">
        <div class="loading" style="height: 100vh;width: 100vw;position: absolute;z-index: 1;" v-if="loading">
            <Loading></Loading>
        </div>
        <div class="utils">
            <Header need-scan="1"></Header>
            <section class="row2">
                <div class="configure">
                    <div class="user iconfont">&#xe7d5;</div>
                    <div class="set">设置</div>
                </div>
                <div class="power-info">
                    <div class="max">功率上限:&nbsp;{{ max }}<span class="unit">kw/h</span></div>
                    <div class="min">功率下限:&nbsp;{{ min }}<span class="unit">kw/h</span></div>
                </div>
                <div class="sign-in">

                    <span class="text"><i class="iconfont">&#xe60c;</i>签到</span>
                    <div class="round r3"></div>
                    <div class="round r2"></div>
                    <div class="round r1"></div>
                </div>
            </section>
            <section class="banner" ref="banner" :style="bannerStyle">
            </section>
            <section class="dots">
                <ul class="ul">
                    <li class="li" :class="{ 'selected': selected == 1 }" data-id="1" @click="toggle($event)"></li>
                    <li class="li" :class="{ 'selected': selected == 2 }" data-id="2" @click="toggle($event)"></li>
                    <li class="li" :class="{ 'selected': selected == 3 }" data-id="3" @click="toggle($event)"></li>
                    <li class="li" :class="{ 'selected': selected == 4 }" data-id="4" @click="toggle($event)"></li>
                </ul>
            </section>
        </div>
        <div class="best-match">
            <div class="stripe"></div>
            <div class="crush">
                <div class="head iconfont">&nbsp;最佳匹配</div>
                <div class="content">
                    <!-- <Unit :effect="bestMatchDatas[0].effect" :remain="bestMatchDatas[0].remain"
                        :price="bestMatchDatas[0].price" :unitStyle="unitStyle "></Unit>
                    <Unit :effect="bestMatchDatas[1].effect" :remain="bestMatchDatas[1].remain"
                        :price="bestMatchDatas[1].price" :unitStyle="unitStyle"></Unit> -->
                        <div @click="toBuy(0)">
                            <Unit :effect="bestMatchDatas[0].effect" :remain="bestMatchDatas[0].remain"
                        :price="bestMatchDatas[0].price" :unitStyle="unitStyle "></Unit>
                        </div>
                        <div @click="toBuy(1)">
                            <Unit :effect="bestMatchDatas[1].effect" :remain="bestMatchDatas[1].remain"
                        :price="bestMatchDatas[1].price" :unitStyle="unitStyle"></Unit>
                        </div>
                </div>
            </div>
            <div class="stripe"></div>
        </div>
        <div class="wares">
            <ul style="display: flex;flex-wrap: wrap;justify-content: space-around;">
                <li v-for="(item, index) in wareDatas[pageNum]" :key="index" style="margin-top: 10px;"
                    @click="toBuy(index)">
                    <Unit :effect="item.effect" :remain="item.remain" :price="item.price" :unitStyle="unitStyle"></Unit>
                </li>
            </ul>

        </div>
        <div style="width: 100%;height: 66px;"></div>
        <Footer seleted=1></Footer>
        <!-- <Pop ref="pop"></Pop> -->
        <van-overlay :show="show" @click="show = false">
            <div class="mask">
                <div class="block" >
                    <div class="iconfont" style="font-size: 48px;padding: 12px 0 12px 0;">&#xe6c6;</div>
                    <div v-text="content"/>
                </div>
            </div>
        </van-overlay>
    </div>
</template>

<script>
import Header from '@/components/header.vue';
import Footer from '@/components/footer.vue';
import Unit from '@/components/unit.vue';
import Loading from '@/components/loading.vue';
import Pop from '@/components/pop.vue';
import { Overlay } from 'vant';
import { Home } from '../../api/Home'
export default {
    name: 'Home',
    components: {
        Header,
        Footer,
        Unit,
        Loading,
        Pop,
        [Overlay.name]: Overlay,
    },
    data() {
        return {
            show: false,
            content: '',
            userId: undefined,
            loading: false,
            max: 0,
            min: -750,
            selected: 1,
            clientWidth: 0,
            bannerStyle: {
                height: '',
                //backgroundSize:'',
            },
            unitStyle: {
                width: '0',
                height: '0',
                background: '#fff'
            },
            pageNum: 0,
            perWares: 10,
            wareDatas: [
                [
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                    {
                        effect: 53, remain: 100, price: 0.46,
                    },
                ]
            ],
            bestMatchDatas: [
                {
                    effect: 53, remain: 100, price: 0.46,
                },
                {
                    effect: 53, remain: 100, price: 0.46,
                },
            ]
        }
    },
    methods: {
        toggle(e) {
            this.selected = e.target.getAttribute('data-id');
        },
        toBuy(index) {
            //this.$router.push(`/purchase?offerId=${offerId}&state=1`);
            this.$router.push({path:'/purchase',
            query: 
            {
                offerId:this.wareDatas[this.pageNum][index].offerId,
                state:1,
                initPrice:this.wareDatas[this.pageNum][index].price,
                initSum:this.wareDatas[this.pageNum][index].remain
            }})
        },
        async handleInit() {
            this.userId = localStorage.getItem('userId');
            if (this.userId == undefined)
                return new Promise((resolve, reject) => {
                    //reject('没有授权');
                    resolve('');
                });
            const http = new Home(this.userId);
            const Authorization = await http.check()
                .then(() => { return true; })
                .catch(() => { return false; })
            if (!Authorization)
                return new Promise((resolve, reject) => {
                    //reject('没有授权');
                    resolve('');
                });
            else {
                return new Promise((resolve, reject) => {
                    http.init()
                        .then(data => {
                            resolve(data);
                        })
                        .catch(err => {
                            resolve('');
                        })
                })
            }
        }
    },
    async mounted() {
        let initErr = false;
        await this.handleInit()
            .then(res => {
                if (res == '') {
                    this.content = '网络错误，无法加载数据';
                    this.show = true;
                }
                else {
                    //this.$refs.pop.handlePop('加载数据中...');
                    console.log(data);
                    //初始化功率信息
                    this.max = data[0].data.curUpperPn;
                    this.min = data[0].data.curLowerPn;
                    localStorage.setItem('publishId',data[0].data.publishId);
                    //初始化销售品列表
                    let wares = Array(this.perWares);
                    for (let i = 0; i < this.perWares; i++) {
                        wares.push({
                            effect: data[1].data.totalFn,
                            remain: data[1].data.initSum,
                            price: data[1].data.initPrice,
                            offerId: data[1].data.offerId
                        })
                    }
                    wares.sort((a,b)=>{
                        return b.effect-a.effect;
                    })
                    this.wareDatas = wares;
                    const bestMatchDatas=[];
                    bestMatchDatas.push(wares[0]);
                    bestMatchDatas.push(wares[1]);
                    this.bestMatchDatas=bestMatchDatas;
                }
            })
            .catch(err => {
                initErr = true;
                this.$router.push('/login');
            })
        if (initErr) {
            return
        }
        this.bannerStyle.height = this.$refs.banner.clientWidth / 3.32 + 'px';
        //this.bannerStyle.backgroundSize=
        window.addEventListener('resize', () => {
            this.clientWidth = document.body.clientWidth;
        })
        //let width = this.$refs.wrapper.clientWidth * 0.48;
        this.clientWidth = this.$refs.wrapper.clientWidth;
        let width = this.clientWidth * 0.48;
        this.unitStyle.width = width + 'px';
        this.unitStyle.height = width * 0.45 + 'px';
    },
    watch: {
        clientWidth(newval) {
            let width = newval * 0.48;
            this.unitStyle.width = width + 'px';
            this.unitStyle.height = width * 0.45 + 'px';
            this.bannerStyle.height = this.$refs.banner.clientWidth / 3.32 + 'px';
        }
    }
}
</script>

<style scoped lang="scss">
.selected {
    background: #ed1c70 !important;
}

.wrapper {
    width: 100%;
    height: 100%;

    .utils {
        padding-top: 6vw;
        background: linear-gradient(#5bc6a3, 70%, #e3f0e6);



        .row2 {
            margin-top: 10px;
            display: flex;
            padding: 0 20px;

            .configure {
                width: 60px;
                height: 78px;

                .user {
                    margin: 0 auto;
                    width: 54px;
                    height: 54px;
                    border: 1px solid #a40000;
                    border-radius: 27px;
                    line-height: 54px;
                    text-align: center;
                    background: #fff;
                    color: #d81e06;
                    font-size: 40px;
                }

                .set {
                    margin-top: 4px;
                    width: 60px;
                    height: 20px;
                    border-radius: 10px;
                    line-height: 20px;
                    padding-left: 8px;
                    background: #e73f0a;
                    color: #fff;
                    font-size: 14px;
                }

                .set::after {
                    content: '';
                    display: inline-block;
                    height: 0;
                    width: 0;
                    margin-left: 4px;
                    line-height: 20px;
                    border: 4px solid transparent;
                    border-left-color: #fff;
                }
            }

            .power-info {
                flex: 1;
                display: flex;
                flex-direction: column;
                color: #fff;
                line-height: 39px;
                text-align: left;
                padding: 0 20px;

                .max {
                    flex: 1;
                    position: relative;
                }

                .min {
                    flex: 1;
                    position: relative;
                }

                .unit {
                    position: absolute;
                    right: 0;
                }
            }

            .sign-in {
                width: 64px;
                height: 78px;
                padding: 7px 0;
                position: relative;

                .text {
                    width: 44px;
                    height: 16px;
                    position: absolute;
                    z-index: 1;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color: #fff;
                    font-size: 14px;
                    line-height: 16px;
                }

                @-webkit-keyframes opac {
                    from {
                        opacity: 1;
                        width: 0;
                        height: 0;
                    }

                    to {
                        opacity: 0.7;
                        width: 64px;
                        height: 64px;
                    }
                }

                @keyframes opac {
                    0% {}

                    70% {
                        width: 54px;
                        height: 54px;
                        opacity: 1;
                    }

                    100% {
                        width: 64px;
                        height: 64px;
                        opacity: 0;
                    }
                }

                .round {
                    position: absolute;
                    height: 32px;
                    width: 32px;
                    border-radius: 50%;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    background: #ca3f43;
                    box-shadow: 0 0 12px #ca3f43;
                    animation: opac 1.2s linear infinite;
                }

                .r3 {
                    animation-delay: 0.8s;
                }

                .r2 {
                    animation-delay: 0.4s;
                }


            }

        }

        .banner {
            width: 90%;
            background: url('@/assets/banner1.png');
            background-size: cover;
            margin: 0 auto;
            margin-top: 5px;
            border-radius: 99999px;
        }

        .dots {
            height: 14px;

            .ul {
                display: flex;
                width: 68px;
                height: 14px;
                margin: 0 auto;
                align-items: center;
                justify-content: space-between;

                .li {
                    width: 8px;
                    height: 8px;
                    border-radius: 50%;
                    background: #fff;
                }
            }
        }
    }

    .best-match {
        .stripe {
            height: 10px;
            background: #eaece8;
        }

        .crush {
            background: linear-gradient(#37ba8f, #7ae1bd);
            padding: 6px;
            margin: 4px 0;
            border-radius: 12px;

            .head::before {
                content: "\e8da";
                //display: inline-block;
                height: 20px;
                line-height: 20xp;
                width: 20px;
                font-size: 20px;
                color: #ff2f2f;
            }

            .head {
                display: flex;
                height: 20px;
                line-height: 20px;
                font-size: 20px;
                color: #fff;
                margin-bottom: 10px;
            }

            .content {
                display: flex;
                justify-content: space-between;
                align-items: center;
                overflow: hidden;
                margin-bottom: 10px;
            }
        }
    }

    .wares::-webkit-scrollbar {
        display: none !important;
        width: 0 !important;
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

.wrapper::-webkit-scrollbar {
    display: none !important;
    width: 0 !important;
}
</style>