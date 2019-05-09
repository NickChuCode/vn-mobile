<template>
  <div id="app">
    <button @click="showToast1">top</button>
    <button @click="showToast2">middle</button>
    <button @click="showToast3">bottom</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      message: '信息'
    }
  },
  methods: {
    showToast1 () {
      this.showToast('top')
    },
    showToast2 () {
      this.showToast('middle')
    },
    showToast3 () {
      this.showToast('bottom')
    },
    showToast(position) {
      this.$toast(`文字，id为${parseInt(Math.random() * 100)}`, {
        position,
        enableHtml: false,
        closeButton: {
          text: '已充值',
          callback () {
            console.log('已充值了！')
          }
        },
        autoClose: 3
      })
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
