import Vue from 'vue/dist/vue.esm.js'
import {
  Layout, Menu, Icon, Button, Table,
  Popconfirm, Popover, List, Avatar,
  Steps, Collapse, Modal, Form
} from "ant-design-vue"
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
Vue.use(Avatar)
Vue.use(Steps)
Vue.use(Collapse)
Vue.use(Modal)
Vue.use(Form)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
