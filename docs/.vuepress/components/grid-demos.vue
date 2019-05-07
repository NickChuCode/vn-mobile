<template>
    <div class="vn-inputs">
        <div class="vpn-title"><span>网格系统</span></div>
        <div class="box">
            <vn-row>
                <vn-col span="5">
                    <div class="demo">span:5</div>
                </vn-col>
                <vn-col span="7">
                    <div class="demo">span:7</div>
                </vn-col>
                <vn-col span="12">
                    <div class="demo">span:12</div>
                </vn-col>
            </vn-row>
            <vn-row>
                <vn-col span="6">
                    <div class="demo">span:6</div>
                </vn-col>
                <vn-col span="8">
                    <div class="demo">span:8</div>
                </vn-col>
                <vn-col span="10">
                    <div class="demo">span:10</div>
                </vn-col>
            </vn-row>
        </div>
        <pre><code>{{ code }}</code></pre>
        <div class="vpn-title"><span>网格系统：带 gutter</span></div>
        <div class="box">
            <vn-row :gutter="20">
                <vn-col span="5">
                    <div class="demo">span:5</div>
                </vn-col>
                <vn-col span="7">
                    <div class="demo">span:7</div>
                </vn-col>
                <vn-col span="12">
                    <div class="demo">span:12</div>
                </vn-col>
            </vn-row>
            <vn-row :gutter="50">
                <vn-col span="6">
                    <div class="demo">span:6</div>
                </vn-col>
                <vn-col span="8">
                    <div class="demo">span:8</div>
                </vn-col>
                <vn-col span="10">
                    <div class="demo">span:10</div>
                </vn-col>
            </vn-row>
        </div>
        <pre><code>{{ gutterCode }}</code></pre>
    </div>

</template>

<script>
    import Col from '../../../src/components/col'
    import Row from '../../../src/components/row'
    export default {
        name: "grid-demos",
        components: {
            'vn-col': Col,
            'vn-row': Row
        },
        data () {
            return {
                code: `
<vn-row>
    <vn-col span="5">
        <div class="demo">span:5</div>
    </vn-col>
    <vn-col span="7">
        <div class="demo">span:7</div>
    </vn-col>
    <vn-col span="12">
        <div class="demo">span:12</div>
    </vn-col>
</vn-row>
<vn-row>
    <vn-col span="6">
        <div class="demo">span:6</div>
    </vn-col>
    <vn-col span="8">
        <div class="demo">span:8</div>
    </vn-col>
    <vn-col span="10">
        <div class="demo">span:10</div>
    </vn-col>
</vn-row>
                `.trim(),
                gutterCode: `
<vn-row :gutter="20">
    <vn-col span="5">
        <div class="demo">span:5</div>
    </vn-col>
    <vn-col span="7">
        <div class="demo">span:7</div>
    </vn-col>
    <vn-col span="12">
        <div class="demo">span:12</div>
    </vn-col>
</vn-row>
<vn-row :gutter="50">
    <vn-col span="6">
        <div class="demo">span:6</div>
    </vn-col>
    <vn-col span="8">
        <div class="demo">span:8</div>
    </vn-col>
    <vn-col span="10">
        <div class="demo">span:10</div>
    </vn-col>
</vn-row>
                `.trim()
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
