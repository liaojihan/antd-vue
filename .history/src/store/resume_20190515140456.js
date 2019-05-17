import Vue from 'vue'
import * as type from './mutation_type/resume'

const resume = {
    <title></title>
}

const state = {
    code: JSON.parse(localStorage.getItem('resume')) || { ...resume }
}
