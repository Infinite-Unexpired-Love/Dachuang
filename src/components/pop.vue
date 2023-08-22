<template>
  <div class="popUp popUp-off" ref="pop" v-text="pop">

  </div>
</template>

<script>
export default {
    data(){
        return {
            pop:''
        }
    },
    props: {
        time_control:{
            type: Number,
            default:3000
        }
    },
    methods: {
        handlePop(content,callback=()=>{}) {
            this.pop=content;
            this.$refs.pop.classList.remove('popUp-off');
            this.$refs.pop.classList.add('popUp-on');
            let time_control=this.$props.time_control;
            setTimeout(() => {
                this.$refs.pop.classList.remove('popUp-on');
                this.$refs.pop.classList.add('popUp-off');
                //this.lock = false;
                callback();
            }, time_control);
        },
    }
}
</script>

<style>
.popUp {
    position: fixed;
    z-index: 99;
    bottom: 20px;
    left: 2vw;
    width: 96vw;
    height: 40px;
    line-height: 40px;
    padding-left: 12px;
    background: #555;
    font-size: 16px;
    text-align: left;
    color: #fff;
    transition: .2s;
}

.popUp-off {
    opacity: 0;
    transform: scale(0);
}

.popUp-on {
    opacity: 1;
    transform: scale(1);
}
</style>