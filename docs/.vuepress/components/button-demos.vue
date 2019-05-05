<template>
    <div class="buttons">
        <div class="vpn-title"><span>按钮类型</span></div>
        <div class="vpn-content">
            <vn-button primary>默认按钮</vn-button>
            <vn-button icon="settings" warn>默认按钮</vn-button>
            <vn-button :loading="true">默认按钮</vn-button>
        </div>
    </div>
</template>

<script>
    import Button from '../../../src/components/button'
    export default {
        name: "button-demos",
        components: {
            'vn-button': Button
        },
        data () {
            return {
                content: `
                <g-button>默认按钮</g-button>
                <g-button icon="settings">默认按钮</g-button>
                <g-button :loading="true">默认按钮</g-button>
                <g-button disabled>默认按钮</g-button>
                `.replace(/\t+| +/g, '').trim()
            }
        }
    }
</script>

<style lang="scss">
    .vpn-title {
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 20px;
    }
    .vpn-content {
        display: flex;
        justify-content: space-around;
        margin-bottom: 40px;
    }
</style>
