import Vue from 'vue'
import * as type from './mutation_type/resume'

const resume = [
    {
        status: 'process',
        title: '开始构建',
        type: 'user'
    },
    {
        status: 'wait',
        title: '构建中',
        type: 'solution'
    },
    {
        status: 'wait',
        title: '正在检查',
        type: 'loading'
    },
    {
        status: 'wait',
        title: '完成'
    }
]

const state = {
    code: JSON.parse(localStorage.getItem('resume')) || { ...resume }
}
