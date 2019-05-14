import Vue from 'vue'
import * as type from './mutation_type/menu'

const state = {
    code: JSON.parse(sessionStorage.getItem('menu')) || "1"
}

const mutations = {
    [type.MENU_STATUS](state, code) {
        state = { ...code }
    }
}

const actions = {
    [type.MENU_STATUS]({ commit, state }, code) {
        setTimeout(() => {
            sessionStorage.setItem('menu', code.code)
        }, 100)
        commit(type.MENU_STATUS, code)
    }
}

export default {
    state,
    mutations,
    actions
}