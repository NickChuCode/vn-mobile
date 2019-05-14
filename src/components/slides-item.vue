<template>
    <transition name="slide">
        <div class="vn-slides-item" v-if="visible">
            <slot></slot>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "VnSlidesItem",
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                selected: undefined
            }
        },
        computed: {
            visible () {
                return this.selected === this.name
            }
        }
    }
</script>

<style scoped lang="scss">
    .slide-leave-active {
        position: absolute;
        top: 0;
        left: 0;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }
    .slide-enter {
        transform: translateX(100%);
    }
    .slide-leave-to {
        transform: translateX(-100%);
    }
</style>
