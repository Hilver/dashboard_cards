export default {
    state: {
    tempData: [['15:00', 25], ['16:00', 32], ['17:00', 38], ['18:00', 42], ['19:00', 41], ['20:00', 44], ['21:00', 54]],
    tempDataFilter: {
      min: 0,
      max: 100
    },
    loadingTempChart: false,
    
  },
  mutations: {
    setTempFilter (state, payload) {
      state.tempDataFilter = payload
    },
    setLoadingTemp (state, payload) {
      state.loadingTempChart = payload
    }
  },
  actions: {
  async setTempFilter ({commit}, payload) {
      const params = {
        min: payload.min,
        max: payload.max
      }
      commit('setLoadingTemp', true)
      try {
         await setTimeout(() => {
           commit('setTempFilter', params)
           commit('setLoadingTemp', false)
        }, 3000);         
      } catch (err) {
        commit('setLoadingTemp', false)
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
    loadingTempChart(state) {
      return state.loadingTempChart
    }    
  }
}