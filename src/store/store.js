import Vue from 'vue'
import Vuex from 'vuex'
import MUTATIONS from './common'

Vue.use(Vuex)
let store = new Vuex.Store({
  state: {
    user: null,
    isLoading: false
  },
  mutations: {
    user (state, user) {
      if (user) {
        state.user = user
      }
      console.log(state)
    },

    isLoading (state, value) {
      state.isLoading = value
    }
  },
  actions: {
    // 用户登录
    setUser: ({ commit }, user) => {
      commit(MUTATIONS.USER, user)
    },

    setLoading: ({ commit }, isLoading) => {
      commit(MUTATIONS.ISLOADING, isLoading)
    }
  }
})

export default store
