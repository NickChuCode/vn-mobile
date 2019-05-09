import Vue from 'vue'
import App from './App.vue'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Plugin from './components/plugin'

Vue.component('vn-button', Button)
Vue.component('vn-button-group', ButtonGroup)
Vue.component('vn-input', Input)
Vue.component('vn-col', Col)
Vue.component('vn-row', Row)

Vue.use(Plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
