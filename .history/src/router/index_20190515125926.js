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
            props: route => (
                {
                    query:
                }
            )
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


