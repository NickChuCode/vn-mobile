<template>
  <div id="app">
    <vn-button>默认按钮</vn-button>
    <vn-button icon="settings">默认按钮</vn-button>
    <vn-button :loading="true">默认按钮</vn-button>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
