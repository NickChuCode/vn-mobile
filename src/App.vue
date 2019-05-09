<template>
  <div id="app">
    <vn-tabs :selected.sync="selectedTab">
      <!--如果下面组件中这个标签上有class，这里又给一个class，vue默认是会合并这两个class的（另一个可以这样做的属性是style），其他属性都是直接覆盖-->
      <vn-tabs-head>
        <!-- 这个可以选择放入组件的哪个插槽-->
        <template slot="actions">
          <vn-button>设置</vn-button>
        </template>
        <vn-tabs-item name="women" disabled>
          <vn-icon name="settings"></vn-icon>美女
        </vn-tabs-item>
        <vn-tabs-item name="finance">财经</vn-tabs-item>
        <vn-tabs-item name="sports">体育</vn-tabs-item>
      </vn-tabs-head>
      <vn-tabs-body>
        <vn-tabs-pane name="women">美女相关资讯</vn-tabs-pane>
        <vn-tabs-pane name="finance">财经相关资讯</vn-tabs-pane>
        <vn-tabs-pane name="sports">体育相关资讯</vn-tabs-pane>
      </vn-tabs-body>
    </vn-tabs>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      selectedTab: 'sports'
    }
  }
}
</script>

<style lang="scss">
  $primary-color: #3eaf7b;
  $primary-text: white;
  .demo {
    background: rgba($primary-color, .8);
    border: 1px solid $primary-color;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    color: white;
  }
</style>
