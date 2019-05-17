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
        title: '完成',
        type: 'smile-o'
    }
]

const state = {
    status: JSON.parse(localStorage.getItem('resume')) || [ ...resume ]
}

const mutations = {
    [type.RESUME_STATUS](state, c) {
        
    }
}


export default {
    state
}