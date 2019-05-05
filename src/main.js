import Vue from 'vue'
import App from './App.vue'
import Button from './components/button'
import ButtonGroup from './components/button-group'

Vue.component('vn-button', Button)
Vue.component('vn-button-group', ButtonGroup)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
