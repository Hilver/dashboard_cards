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
    notificationsData: [
      {
        id: 0,
        date: "22 minutes ago",
        message: 'We’ve just launched new update for your application',
        button_content: 'Restart Device',
        button_icon: '/img/arrow-blue.1da589df.svg',
        color: 'blue'
      },
      {
        id: 1,
        date: '22 January 2018,  18:20',
        message: 'You subscription has expired…',
        button_content: 'Renew',
        button_icon: '/img/arrow-green.600531f0.svg',
        color: 'green'
      },
      {
        id: 2,
        date: '23 January 2018,  18:20',
        message: 'You subscription has expired…',
        button_content: 'TEST3',
        button_icon: './img/arrow-green.600531f0.svg',
        color: 'blue'
      }
    ],
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
        commit('setLoading', false)
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
    },
    notificationsData (state) {
      return state.notificationsData
    }
  }
})
