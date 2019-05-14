<template>
    <div class="vn-slides">
        <slot></slot>
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
        mounted() {
            this.updateChildren()
            this.playAutomatically()
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            updateChildren () {
                let first = this.$children[0]
                let selected = this.selected || first.name
                this.$children.forEach((vm) => {
                    vm.selected = selected
                })
            },
            getSelected () {
                let first = this.$children[0].name
                return this.selected || first
            },
            playAutomatically () {
                const names = this.$children.map(vm => vm.name)
                let index = names.indexOf(this.getSelected())
                let run = () => {
                    if (index === names.length) { index = 0 }
                    this.$emit('update:selected', names[index + 1])
                    index++
                    setTimeout(run, 3000)
                }
                setTimeout(run, 3000)
            }
        }
    }
</script>

<style scoped lang="scss">
    .vn-slides {
        display: inline-block;
    }
</style>
