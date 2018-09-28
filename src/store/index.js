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
        button_icon: './img/arrow-blue.1da589df.svg',
        color: 'blue'
      }
    ],
    loadingTempChart: false,
    loadingNotifications: false,
  },
  mutations: {
    setTempFilter (state, payload) {
      state.tempDataFilter = payload
    },
    setLoadingTemp (state, payload) {
      state.loadingTempChart = payload
    },
    setLoadingNotifications (state, payload) {
      state.loadingNotifications = payload
    },
    setNewNotifications (state, payload) {
      state.notificationsData = payload
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
    },
    
    getNewNotifications ({commit, getters}) {
      const last = getters.notificationsData.length;
      const news = getters.notificationsData.slice(last - 2, last)
      commit('setLoadingNotifications', true)
      const getData = new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('setNewNotifications', news)
          resolve(true);
        }, 2000);
      })        
      getData
      .then(res => {
        if(res){
          commit('setLoadingNotifications', false)
        }
      })      
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
    },
    loadingNotifications(state) {
      return state.loadingNotifications
    },
    notificationsData (state) {
      return state.notificationsData
    }
  }
})
