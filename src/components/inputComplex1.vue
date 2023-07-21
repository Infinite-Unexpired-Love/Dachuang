<template>
    <div class="inpcrush iconfont">
        <span class="toggle toggle-off" ref="toggle" @click="focus">{{ toggle }}</span>
        <label :for="id" class="before iconfont" v-html="before"></label>
        <input :type="inp_type ? inp_type : 'text'" :placeholder="toggle_all" class="input" ref="input" @blur="blurCheck"
            @focus="focusCheck" :id="id">
        <div class="after iconfont" v-html="after" @click="convert" ref="after"></div>
    </div>
</template>

<script>

export default {
    name: 'InputComplex1',
    props: {
        toggle: String,
        before: String,
        inp_type: String,
        after: String,
        after_convert: String,
        id: String,
        isLogin:String
    },
    data() {
        return {
            eyeClose: 1,
        }
    },
    methods: {
        focus() {
            this.$refs.input.focus();
        },
        blurCheck() {
            if (!this.$refs.input.value) {
                this.$refs.toggle.classList.add('toggle-off');
                this.$refs.toggle.classList.remove("toggle-on");
            }
            else {
                this.$refs.toggle.classList.add("toggle-on");
                this.$refs.toggle.classList.remove("toggle-off");
            }
            this.setValue(this.$refs.input.value);
        },
        focusCheck() {
            if (!this.$refs.input.value) {
                this.$refs.toggle.classList.remove('toggle-off');
                this.$refs.toggle.classList.add("toggle-on");
            }
            else {
                this.$refs.toggle.classList.add("toggle-on");
                this.$refs.toggle.classList.remove("toggle-off");
            }
        },
        convert() {
            if (!this.$props.after_convert) {
                return;
            }
            this.eyeClose = !this.eyeClose;
            if (!this.eyeClose) {
                this.$refs.input.type="text";
                this.$refs.after.innerHTML = "&#xe621;";
            }
            else {
                this.$refs.input.type="password";
                this.$refs.after.innerHTML = "&#xe749;";
            }
        },
        setValue(value){
            this.$store.commit(`set${this.$props.isLogin?'Login':'Register'}_${this.$props.id}`,value);
        },
        
    },
    computed: {
        toggle_all() {
            return `请输入${this.$props.toggle}`;
        },
    },
}
</script>

<style lang="scss" scoped>
.inpcrush {
    position: relative;
    display: flex;
    height: 60px;
    width: 100%;
    border: 2px solid #73767f;
    padding: 1px;
    border-radius: 5px;

    &:focus-within {
        border: 3px solid #2b92bb;
        padding: 0;
    }

    &:focus-within .toggle {
        color: #2b92bb;
    }

    // &:hover .toggle {
    //     top: -9px;
    //     left: 9px;
    //     width: fit-content;
    //     font-size: 12px;
    //     color: #2b92bb;
    // }

    .before,
    .after {
        display: block;
        width: 60px;
        height: 56px;
        line-height: 56px;
        text-align: center;
        font-size: 24px;
    }

    .toggle {
        position: absolute;
        max-width: 566px;
        background-color: #fff;
        color: #43464f;
        text-align: left;
        transition: all .15s;
    }

    // .toggle:hover {
    //     top: -9px;
    //     left: 9px;
    //     width: fit-content;
    //     font-size: 12px;
    //     color: #2b92bb;
    // }

    .input {
        flex: 1;
        font-size: 18px;

    }

    .input[type="password"]::-ms-reveal {
        display: none
    }

    .input::-webkit-input-placeholder {
        /* WebKit browsers，webkit内核浏览器 */
        color: #43464f;
    }

    .input:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: #43464f;
    }

    .input::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: #43464f;
    }

    .input:-ms-input-placeholder {
        /* Internet Explorer 10+ */
        color: #43464f;
    }

    .toggle-on {
        top: -9px;
        left: 9px;
        width: fit-content;
        font-size: 12px;
    }

    .toggle-off {
        width: calc(70vw - 120px);
        top: 15px;
        left: 60px;
        font-size: 18px;
    }
}</style>