import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tempData: [['16:00:00', 32], ['17:00:00', 38], ['18:00:00', 42], ['19:00:00', 41], ['20:00:00', 45]]
  },
  mutations: {

  },
  actions: {

  },
  getters: {
    tempData (state) {
      return state.tempData
    }
  }
})
