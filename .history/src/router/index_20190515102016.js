import userTableTemplate from '../components/content/user_table.vue'
import listTemplate from '../components/content/list.vue'
import chartTemplate from '../components/content/chart.vue'
import 
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
        },
        {
            path: '/resume',
            component: resumeTemplate
        }
    ]
})


