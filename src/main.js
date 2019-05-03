import Vue from 'vue'
import App from './App.vue'
import Button from './components/button'

Vue.component('vn-button', Button)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
