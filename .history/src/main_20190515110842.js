import Vue from 'vue'
import { Layout, Menu, Icon, Button, Table, Popconfirm, Popover, List } from "ant-design-vue"
import store from './store'
import App from './App.vue'
import router from './router'

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Table)
Vue.use(Popconfirm)
Vue.use(Popover)
Vue.use(List)

Vue.config.productionTip = false

const a = new Vue({
  vl: 1,
  router,
  store,
  render: h => h(App),
}).$mount('#app')

a.vl = 2

console.log(a ? '')
