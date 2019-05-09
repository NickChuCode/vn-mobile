import Vue from 'vue'
import App from './App.vue'
import Button from './components/button'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import Tabs from './components/tabs'
import TabsBody from './components/tabs-body'
import TabsHead from './components/tabs-head'
import TabsItem from './components/tabs-item'
import TabsPane from './components/tabs-pane'
import Icon from './components/icon'

import Plugin from './components/plugin'

Vue.component('vn-button', Button)
Vue.component('vn-icon', Icon)
Vue.component('vn-button-group', ButtonGroup)
Vue.component('vn-input', Input)
Vue.component('vn-col', Col)
Vue.component('vn-row', Row)
Vue.component('vn-tabs', Tabs)
Vue.component('vn-tabs-body', TabsBody)
Vue.component('vn-tabs-head', TabsHead)
Vue.component('vn-tabs-item', TabsItem)
Vue.component('vn-tabs-pane', TabsPane)

Vue.use(Plugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
