<template>
    <div class="buttons">
        <div class="vpn-title"><span>按钮类型</span></div>
        <div class="vpn-content">
            <vn-button>默认</vn-button>
            <vn-button primary>成功</vn-button>
            <vn-button error>错误</vn-button>
            <vn-button warn>警告</vn-button>
        </div>
        <pre><code>{{ btnType }}</code></pre>
        <div class="vpn-title"><span>outline</span></div>
        <div class="vpn-content">
            <vn-button outline>默认</vn-button>
            <vn-button primary outline>成功</vn-button>
            <vn-button error outline>错误</vn-button>
            <vn-button warn outline>警告</vn-button>
        </div>
        <pre><code>{{ outlineBtn }}</code></pre>
        <div class="vpn-title"><span>带图标的按钮</span></div>
        <div class="vpn-content">
            <vn-button icon="settings">设置</vn-button>
            <vn-button :loading="true" primary>读取</vn-button>
            <vn-button icon="settings" warn outline>设置</vn-button>
            <vn-button :loading="true" error outline>读取</vn-button>
        </div>
        <pre><code>{{ iconBtn }}</code></pre>
        <div class="vpn-title"><span>一组按钮</span></div>
        <div class="vpn-content">
            <vn-button-group>
                <vn-button icon="left">上一个</vn-button><vn-button icon="right" iconPosition="right">下一个</vn-button><vn-button icon="settings">设置</vn-button><vn-button icon="info">信息</vn-button>
            </vn-button-group>
        </div>
        <pre><code>{{ groupButton }}</code></pre>
    </div>
</template>

<script>
    import Button from '../../../src/components/button'
    import ButtonGroup from '../../../src/components/button-group'
    export default {
        name: "button-demos",
        components: {
            'vn-button': Button,
            'vn-button-group': ButtonGroup
        },
        data () {
            return {
                btnType: `
<vn-button>默认</vn-button>
<vn-button primary>成功</vn-button>
<vn-button error>错误</vn-button>
<vn-button warn>警告</vn-button>
                `.trim(),
                outlineBtn: `
<vn-button outline>默认</vn-button>
<vn-button primary outline>成功</vn-button>
<vn-button error outline>错误</vn-button>
<vn-button warn outline>警告</vn-button>
                `.trim(),
                iconBtn: `
<vn-button icon="settings">设置</vn-button>
<vn-button :loading="true" primary>读取</vn-button>
<vn-button icon="settings" warn outline>设置</vn-button>
<vn-button :loading="true" error outline>读取</vn-button>
                `.trim(),
                groupButton: `
                <vn-button-group>
                    <vn-button icon="left">上一个</vn-button>
                    <vn-button icon="right" iconPosition="right">下一个</vn-button>
                    <vn-button icon="settings">设置</vn-button>
                    <vn-button icon="info">信息</vn-button>
                </vn-button-group>
                `.replace(/^ {16}/gm, '').trim()
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
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: flex-start;
        margin-bottom: 40px;
    }
</style>
