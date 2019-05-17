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
    status: [ ...resume ]
}

const mutations = {
    [type.RESUME_STATUS](state, code) {
        for (let index in resume) {
            if (index < code.index) {
                resume[index].status = 'finish'
            }
            if (index > code.index) {
                resume[index].status = 'wait'
            }
            if (index == code.index) {
                
            }
            
        }
        const prevElement = resume[code.index - 1]
        const currentElement = resume[code.index]
        const nextElement = resume[code.index + 1]
        if (prevElement) {
            prevElement.status = 'finish'
        }
        if (currentElement) {
            currentElement.status = 'process'
        }
        if (nextElement) {
            nextElement.status = 'wait'
        }
    }
}

const actions = {
    [type.RESUME_STATUS]({ commit, state }, code) {
        commit(type.RESUME_STATUS, code)
    }
}


export default {
    state,
    mutations,
    actions
}