import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tempData: [['15:00:00', 25], ['16:00:00', 32], ['17:00:00', 38], ['18:00:00', 42], ['19:00:00', 41], ['20:00:00', 44], ['21:00:00', 54]],
    tempDataFilter: {
      min: null,
      max: null
    }
  },
  mutations: {
    setTempFilter (state, payload) {
      state.tempDataFilter = payload
    }
  },
  actions: {
  async setTempFilter ({commit}, payload) {
      const params = {
        min: payload.min,
        max: payload.max
      }
      try {
         await commit('setTempFilter', params)
      } catch (err) {
        return {
          message: err
        }
      }
    } 

  },
  getters: {
    tempData (state) {
      return state.tempData
    },
    tempDataFilter (state) {
      return {
        min: state.tempDataFilter.min,
        max: state.tempDataFilter.max
      }
    }
  }
})
