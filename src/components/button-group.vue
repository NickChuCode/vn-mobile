<template>
    <div class="vn-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'VnButtonGroup',
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLocaleLowerCase()
                if (name !== 'button') {
                    console.warn(`button group 下面应该都是 vn-button，你写的是${name}`)
                }
            }
        }
    }
</script>

<style lang="scss">
    .vn-button-group {
        display: inline-flex;
        vertical-align: middle;
        > .vn-button {
            border-radius: 0;
            &:not(:first-child) {
                /*不同的设备负 margin 不同，一般是这个值*/
                margin-left: -3px;
            }
            &:first-child {
                border-top-left-radius: 5px;
                border-bottom-left-radius: 5px;
            }
            &:last-child {
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>
