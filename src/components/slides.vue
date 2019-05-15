<template>
    <div class="vn-slides">
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
                lastSelectedIndex: undefined
            }
        },
        computed: {
            selectedIndex () {
                return this.names.indexOf(this.selected) || 0
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
                    vm.reverse = this.selectedIndex > this.lastSelectedIndex ? false : true
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
            playAutomatically () {
                let run = () => {
                    let index = this.names.indexOf(this.getSelected())
                    let newIndex = index + 1
                    if (newIndex === -1) {newIndex = this.names.length - 1}
                    if (index === this.names.length) { newIndex = 0 }
                    this.select(newIndex)
                    setTimeout(run, 3000)
                }
                setTimeout(run, 3000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .vn-slides {
        &-window {
            overflow: hidden;
        }
        &-dots {
            > span {
                &.active {
                    background: red;
                }
            }
        }
    }
</style>
