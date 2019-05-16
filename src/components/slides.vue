<template>
    <div class="vn-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd">
        <div class="vn-slides-window">
            <div class="vn-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="vn-slides-dots">
            <span @click="select(selectedIndex - 1)">
                <vn-icon name="left"></vn-icon>
            </span>
            <span v-for="n in childrenLength" :class="{active: selectedIndex === n - 1}"
            @click="select(n-1)" :key="n" :data-index="n-1">
                {{ n }}
            </span>
            <span @click="select(selectedIndex + 1)">
                <vn-icon name="right"></vn-icon>
            </span>
        </div>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name: "VnSlides",
        components: {
            'vn-icon': Icon
        },
        props: {
            selected: {
                type: String
            },
            autoPlay: {
                type: Boolean,
                default: true
            }
        },
        data () {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined,
                timerId: undefined,
                startTouch: undefined
            }
        },
        computed: {
            selectedIndex () {
                let index = this.names.indexOf(this.selected)
                return index === -1 ? 0 : index
            },
            names () {
                return this.items.map(vm => vm.name)
            },
            items () {
                return this.$children.filter(vm => vm.$options.name === 'VnSlidesItem')
            }
        },
        mounted() {
            this.updateChildren()
            if (this.autoPlay) {
                this.playAutomatically()
            }
            this.childrenLength = this.items.length
        },
        updated() {
            this.updateChildren()
        },
        beforeDestroy () {
            this.pause()
        },
        methods: {
            onTouchStart (e) {
                this.pause()
                if (e.touches.length > 1) { return }
                this.startTouch = e.touches[0]
            },
            onTouchMove () {},
            onTouchEnd (e) {
                let endTouch = e.changedTouches[0]
                let { clientX: x1, clientY: y1 } = this.startTouch
                let { clientX: x2, clientY: y2 } = endTouch

                let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
                let deltaY = Math.abs(y2 - y1)
                let rate = distance / deltaY
                if (rate > 2) {
                    if (x2 > x1) {
                        this.select(this.selectedIndex - 1)
                    } else {
                        this.select(this.selectedIndex + 1)
                    }
                }
                this.$nextTick(() => {
                    this.playAutomatically()
                })
            },
            updateChildren () {
                let selected = this.getSelected()
                this.items.forEach((vm) => {
                    let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                    if (this.timerId) {
                        if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
                            reverse = false
                        }
                        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
                            reverse = true
                        }
                    }
                    vm.reverse = reverse
                    this.$nextTick(() => {
                        vm.selected = selected
                    })
                })
            },
            getSelected () {
                let first = this.$children[0].name
                return this.selected || first
            },
            select (newIndex) {
                this.lastSelectedIndex = this.selectedIndex
                if (newIndex === -1) {newIndex = this.names.length - 1}
                if (newIndex === this.names.length) { newIndex = 0 }
                this.$emit('update:selected', this.names[newIndex])
            },
            pause () {
                window.clearTimeout(this.timerId)
                this.timerId = undefined
            },
            onMouseEnter () {
              this.pause()
            },
            onMouseLeave () {
                this.playAutomatically()
            },
            playAutomatically () {
                if (this.timerId) {return}
                let run = () => {
                    let index = this.names.indexOf(this.getSelected())
                    let newIndex = index + 1
                    this.select(newIndex)
                    this.timerId = setTimeout(run, 3000)
                }
                this.timerId = setTimeout(run, 3000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .vn-slides {
        &-window {
            overflow: hidden;
        }
        &-wrapper {
            position: relative;
        }
        &-dots {
            padding: 8px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            > span {
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #ddd;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                margin: 0 8px;
                font-size: 12px;
                &:hover {
                    cursor: pointer;
                }
                &.active {
                    background: black;
                    color: white;
                    &:hover {
                        cursor: default;
                    }
                }
            }
        }
    }
</style>
