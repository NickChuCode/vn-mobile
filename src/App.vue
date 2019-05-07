<template>
  <div id="app">
    <vn-row>
      <vn-col span="5">
        <div class="demo">span:5</div>
      </vn-col>
      <vn-col span="7">
        <div class="demo">span:7</div>
      </vn-col>
      <vn-col span="12">
        <div class="demo">span:12</div>
      </vn-col>
      <vn-col span="6">
        <div class="demo">span:6</div>
      </vn-col>
      <vn-col span="8">
        <div class="demo">span:8</div>
      </vn-col>
      <vn-col span="10">
        <div class="demo">span:10</div>
      </vn-col>
    </vn-row>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: '信息'
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
