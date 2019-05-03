<template>
    <svg class="vn-icon">
        <use :xlink:href="`#n-${name}`"></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name: 'vnIcon',
        props: ['name']
    }
</script>

<style lang="scss" scoped>
    .vn-icon {
        width: 1em;
        height: 1em;
    }
</style>
