<template>
    <div class="vn-inputs">
        <div class="vpn-title"><span>数据双向绑定</span></div>
        <div class="box">
            <vn-input v-model="message"></vn-input>
            <p>{{ message }}</p>
            <vn-button @click="message += 1">+1</vn-button>
        </div>
        <pre><code>{{ bindCode }}</code></pre>
        <div class="vpn-title"><span>input各种状态</span></div>
        <div class="box xxx">
            <vn-input value="disabled 状态" disabled></vn-input>
            <!--    区别是 disabled不能focus，但是readonly可以-->
            <vn-input value="readonly 状态" readonly></vn-input>
            <vn-input value="正常状态"></vn-input>
        </div>
        <pre><code>{{ statusCode }}</code></pre>
        <div class="vpn-title"><span>错误信息提示</span></div>
        <div class="box">
            <vn-input value="王" error="姓名不能少于两个字" @change="inputChange"></vn-input>
        </div>
        <pre><code>{{ errorCode }}</code></pre>
    </div>
</template>

<script>
    import Input from '../../../src/components/input'
    import Button from '../../../src/components/button'
    export default {
        name: "input-demos",
        components: {
            'vn-input': Input,
            'vn-button': Button
        },
        methods: {
            inputChange(e, message) {
                console.log(e.target.value)
                console.log(message)
            }
        },
        data () {
            return {
                message: '测试信息',
                bindCode: `
<vn-input v-model="message"></vn-input>
<p>{{ message }}</p>
<vn-button @click="message += 1">+1</vn-button>
                `.trim(),
                statusCode: `
<vn-input value="disabled 状态" disabled></vn-input>
<!--    区别是 disabled不能focus，但是readonly可以-->
<vn-input value="readonly 状态" readonly></vn-input>
<vn-input value="正常状态"></vn-input>
                `.trim(),
                errorCode: `
<vn-input value="王" error="姓名不能少于两个字" @change="inputChange"></vn-input>
                `
            }
        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    .box {
        margin: 20px;
    }
    .vpn-title {
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 20px;
    }
    .xxx{
        height: 150px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-content: space-around;
    }
</style>
