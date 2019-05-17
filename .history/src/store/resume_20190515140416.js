import Vue from 'vue'
import * as type from './mutation_type/resume'

const resume = {

}

const state = {
    code: JSON.parse(localStorage.getItem('resume')) || { ... }
}
