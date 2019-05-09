<template>
    <div class="vn-inputs">
        <div class="vpn-title"><span>Toast 组件</span></div>
        <div class="box">
            <vn-button @click="showToast1">屏幕顶端弹出</vn-button>
            <vn-button @click="showToast2">屏幕中间弹出</vn-button>
            <vn-button @click="showToast3">屏幕底部弹出</vn-button>
        </div>
        <pre><code>{{ code }}</code></pre>
    </div>

</template>

<script>
    import Vue from 'vue'
    import Plugin from '../../../src/components/plugin'
    import Button from '../../../src/components/button'

    Vue.use(Plugin)
    export default {
        name: "toast-demos",
        data () {
            return {
                code: `
// methods 中定义方法，在 button 的 click 事件中调用即可
showToast(position) {
    this.$toast(\`文字，id为${parseInt(Math.random() * 100)}\`, {
        position,
        enableHtml: false,
        closeButton: {
            text: '关闭',
            callback () {
                console.log('已关闭！')
            }
        },
        autoClose: 3
    })
}
                `.trim()
            }
        },
        components: {
            'vn-button': Button
        },
        methods: {
            showToast1 () {
                this.showToast('top')
            },
            showToast2 () {
                this.showToast('middle')
            },
            showToast3 () {
                this.showToast('bottom')
            },
            showToast(position) {
                this.$toast(`文字，id为${parseInt(Math.random() * 100)}`, {
                    position,
                    enableHtml: false,
                    closeButton: {
                        text: '关闭',
                        callback () {
                            console.log('已关闭')
                        }
                    },
                    autoClose: 3
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    $primary-color: #3eaf7b;
    $primary-text: white;
    .demo {
        background: rgba($primary-color, .8);
        border: 1px solid $primary-color;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
        color: white;
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
</style>
