<template>
    <div class="vn-slides" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="vn-slides-window">
            <div class="vn-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="vn-slides-dots">
            <span v-for="n in childrenLength" :class="{active: selectedIndex === n - 1}"
            @click="select(n-1)">
                {{ n }}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VnSlides",
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
                timerId: undefined
            }
        },
        computed: {
            selectedIndex () {
                let index = this.names.indexOf(this.selected)
                return index === -1 ? 0 : index
            },
            names () {
                return this.$children.map(vm => vm.name)
            }
        },
        mounted() {
            this.updateChildren()
            this.playAutomatically()
            this.childrenLength = this.$children.length
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            updateChildren () {
                let selected = this.getSelected()
                this.$children.forEach((vm) => {
                    let reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
                    if (this.timerId) {
                        if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
                            reverse = false
                        }
                        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
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
            select (index) {
                this.lastSelectedIndex = this.selectedIndex
                this.$emit('update:selected', this.names[index])
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
                    if (newIndex === -1) {newIndex = this.names.length - 1}
                    if (index === this.names.length) { newIndex = 0 }
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
