<template>
    <div class="wrapper">
        <div class="utils">
            <section class="row1">
                <div class="row1-before iconfont">&#xe840;</div>
                <div class="inp">
                    <input type="text" placeholder="请输入关键字" class="input">
                    <div class="inp-after iconfont">&#xe741;</div>
                </div>
                <div class="row1-after iconfont">&#xe601;</div>
            </section>
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
                    <Unit effect=53 remain=100 price=0.46></Unit>
                    <Unit effect=53 remain=100 price=0.46></Unit>
                </div>
            </div>
            <div class="stripe"></div>
        </div>
        <Footer seleted=1></Footer>
    </div>
</template>

<script>
import Footer from '@/components/footer.vue';
import Unit from '@/components/unit.vue';
export default {
    components: {
        Footer,
        Unit
    },
    data() {
        return {
            max: 0,
            min: -750,
            selected: 1,
            bannerStyle: {
                height: '',
                //backgroundSize:'',
            }
        }
    },
    methods: {
        toggle(e) {
            this.selected = e.target.getAttribute('data-id');
        }
    },
    mounted() {
        this.bannerStyle.height = this.$refs.banner.clientWidth / 3.32 + 'px';
        //this.bannerStyle.backgroundSize=
    }
}
</script>

<style scoped lang="scss">
.selected {
    background: #ed1c70 !important;
}

.wrapper {
    width: 100%;
    height: 100vh;

    .utils {
        flex-direction: column;
        padding-top: 5vh;
        background: linear-gradient(#5bc6a3, 70%, #e3f0e6);

        .row1 {
            display: flex;
            height: 32px;
            padding: 0 10px;

            .row1-before {
                width: 32px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                color: #fff;
                font-size: 28px;
            }

            .inp {
                flex: 1;
                display: flex;
                border-radius: 16px;
                background: #a8e5d1;
                padding-left: 16px;
                margin: 0 5px;

                .input {
                    flex: 1;
                    background: rgba(#a8e5d1, 0);
                }

                .input::-webkit-input-placeholder {
                    /* WebKit browsers，webkit内核浏览器 */
                    color: #e1f6ef;
                }

                .input:-moz-placeholder {
                    /* Mozilla Firefox 4 to 18 */
                    color: #e1f6ef;
                }

                .input::-moz-placeholder {
                    /* Mozilla Firefox 19+ */
                    color: #e1f6ef;
                }

                .input:-ms-input-placeholder {
                    /* Internet Explorer 10+ */
                    color: #e1f6ef;
                }

                .inp-after {
                    width: 32px;
                    height: 32px;
                    line-height: 32px;
                    text-align: center;
                    color: #fff;
                    font-size: 24px;
                }
            }

            .row1-after {
                width: 32px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                color: #fff;
                font-size: 28px;
            }
        }

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
                    z-index: 999;
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
            background: url('../assets/banner1.png');
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
            }

            .content {
                height: 100px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
        }
    }
}
</style>