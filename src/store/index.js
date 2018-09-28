import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tempData: [['15:00:00', 25], ['16:00:00', 32], ['17:00:00', 38], ['18:00:00', 42], ['19:00:00', 41], ['20:00:00', 44], ['21:00:00', 54]],
    tempDataFilter: {
      min: null,
      max: null
    },
    loading: false
  },
  mutations: {
    setTempFilter (state, payload) {
      state.tempDataFilter = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
  async setTempFilter ({commit}, payload) {
      const params = {
        min: payload.min,
        max: payload.max
      }
      commit('setLoading', true)
      try {
         await setTimeout(() => {
           commit('setTempFilter', params)
           commit('setLoading', false)
        }, 3000);         
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
    },
    loading(state) {
      return state.loading
    }
  }
})
