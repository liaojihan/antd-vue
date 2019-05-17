import Vue from 'vue'
import * as type from './mutation_type/resume'

const resume = [
    {
        status: '',
        title: '开始构建',
        type: 'user'
    },
    {
        status: 'wait',
        
    }
]

const state = {
    code: JSON.parse(localStorage.getItem('resume')) || { ...resume }
}
