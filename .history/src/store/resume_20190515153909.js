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
            resume[index].sta
        }
    }
}

const actions = {
    [type.RESUME_STATUS]({ commit, state }, code) {
        const prevElement = newResume[code.index - 1]
        const currentElement = newResume[code.index]
        const nextElement = newResume[code.index + 1]
        if (prevElement) {
            prevElement.status = 'finish'
        }
        if (currentElement) {
            currentElement.status = 'process'
        }
        if (nextElement) {
            nextElement.status = 'wait'
        }
        commit(type.RESUME_STATUS, )
    }
}


export default {
    state,
    mutations,
    actions
}