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
                    <label>价格</label><input type="text">
                </div>
                <div class="inp">
                    <label>数量</label><input type="text">
                </div>
                <div class="option">
                    <span>看不见我</span><button>取消发布</button><button>确认发布</button>
                </div>
            </div>
        </div>

        <div class="ball-bottom">
            <div class="ball1"></div>
            <div class="ball2"></div>
        </div>
        <Footer seleted="3"></Footer>
    </div>
</template>

<script>
import Footer from "@/components/footer.vue"
export default {
    name: 'Sell',
    components: {
        Footer,
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
}
</style>