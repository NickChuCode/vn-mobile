<template>
  <div id="app">
    <div class="box">
      <!--        input变，message变-->
      <vn-input v-model="message"></vn-input>
      <p>{{ message }}</p>
      <!--        message变，input变-->
      <!--        这两个合起来，就是双向绑定-->
      <vn-button @click="message += 1">+1</vn-button>
    </div>
    <div class="box xxx">
      <vn-input value="张三" disabled></vn-input>
      <!--    区别是 disabled不能focus，但是readonly可以-->
      <vn-input value="李斯" readonly></vn-input>
      <vn-input value="王五"></vn-input>
    </div>
    <div class="box">
      <vn-input value="王" error="姓名不能少于两个字" @change="inputChange"></vn-input>
    </div>
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
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
.box {
  margin: 20px;
}
  .xxx{
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-content: space-around;
  }
</style>
