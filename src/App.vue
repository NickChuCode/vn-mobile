<template>
  <div id="app">
    <div class="title"><span>按钮类型</span></div>
    <div class="content">
      <vn-button primary outline>默认按钮</vn-button>
      <vn-button icon="settings" warn outline>默认按钮</vn-button>
      <vn-button :loading="true" error outline>默认按钮</vn-button>
    </div>
    <div class="title"><span>按钮类型</span></div>
    <div class="content">
      <vn-button-group>
        <vn-button primary>默认按钮</vn-button>
        <vn-button icon="settings" warn>默认按钮</vn-button>
        <vn-button :loading="true">默认按钮</vn-button>
      </vn-button-group>
    </div>
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
  .title {
    display: flex;
    justify-content: flex-start;
    margin-bottom: 20px;
    margin-left: 20px;
  }
  .content {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
  }
</style>
