<template>
    <div class="vn-slides-demo">
        <vn-slides :selected.sync="selected" class="vn-wrapper">
            <vn-slides-item name="1">
                <div class="box">1</div>
            </vn-slides-item>
            <vn-slides-item name="2">
                <div class="box">2</div>
            </vn-slides-item>
            <vn-slides-item name="3">
                <div class="box">3</div>
            </vn-slides-item>
        </vn-slides>
    </div>
</template>

<script>
    import Slides from './slides'
    import SlidesItem from './slides-item'
    export default {
        name: "slides-demo",
        components: {
            'vn-slides': Slides,
            'vn-slides-item': SlidesItem
        },
        data () {
            return {
                selected: undefined
            }
        },
        created() {
            // let n = 1
            // setInterval(() => {
            //     if (n === 4) {
            //         n = 1
            //     }
            //     this.selected = n.toString()
            //     n++
            // }, 3000)
        }
    }
</script>

<style scoped lang="scss">
    .vn-wrapper {
        margin: 40px;
    }
    .box {
        width: 100%;
        height: 350px;
        background: #ddd;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
