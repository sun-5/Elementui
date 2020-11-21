import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Cookie from 'js-cookie'
export default {
  state: {
    token: ''
  },
  mutations: {
    setToken(state, val) {
      state.token = val
      Cookie.set('token', val)
    },
    clearToken(state) {
      state.token = ''
      Cookie.remove('token')
    },
    getToken(state) {
      state.token = Cookie.get('token')
    }
  },
  actions: {},
  modules: {}
}
