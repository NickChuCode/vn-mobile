<template>
  <div id="app">
    <vn-slides-demo></vn-slides-demo>
  </div>
</template>

<script>
  import SlidesDemo from './components/slides-demo'
export default {
  name: 'app',
  components: {
    'vn-slides-demo': SlidesDemo
  },
  data () {
    return {
      selectedTab: 'sports'
    }
  }
}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
