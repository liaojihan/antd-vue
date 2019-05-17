import userTableTemplate from '../components/content/user_table.vue'
import listTemplate from '../components/content/list.vue'
import chartTemplate from '../components/content/chart.vue'
import resumeTemplate from '../components/content/resume.vue'
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
            component: userTableTemplate,
            props: {
                title: '用户管理'
            }
        },
        {
            path: '/list',
            component: listTemplate,
            props: {
                title: '信息列表'
            }
        },
        {
            path: '/chart',
            component: chartTemplate,
            props: {
                title: '随便写点'
            }
        },
        {
            path: '/resume',
            component: resumeTemplate
        }
    ]
})


