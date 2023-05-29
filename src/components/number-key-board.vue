<template></template>
<script>
import { NumberKeyboard } from 'vant';
export default {
    name: "NumberKeyBoard",
    props: {
        value: '',
        maxlength: 8,
    },
    data() {
        return {
            show: false,
            value1: ''
        }
    }
}
</script>