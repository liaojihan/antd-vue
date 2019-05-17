import userTableTemplate from '../components/content/user_table.vue'
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/user'
        },
        {
            path: '/user',
            component: userTableTemplate
        },
        {
            path: '/list',
            component: listTemplate
        },
        {
            path: '/chart',
            component: chartTemplate
        }
    ]
})


