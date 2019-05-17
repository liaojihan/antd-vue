import Vue from 'vue'
import { Layout, Menu, Icon, Button, Table, Popconfirm, Popover } from "ant-design-vue"
import store from './store'
import App from './App.vue'
import router from './router'

Vue.use(Layout)
Vue.use(Menu)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Table)
Vue.use(Popconfirm)
Vue.use(POP)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
