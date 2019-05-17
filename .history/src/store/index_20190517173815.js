import Vue from 'vue/dist/vue.esm.js'
import Vuex from 'vuex'
import menu from './menu'
import resume from './resume'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        menu,
        resume
    }
})