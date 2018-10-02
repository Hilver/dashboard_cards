export default {
    state: {    
    notificationsData: [
      {
        id: 0,
        date: "22 minutes ago",
        message: 'We’ve just launched new update for your application',
        button_content: 'Restart Device',
        button_icon: 'http://peczkowskip.com/img/arrow-blue.svg',
        color: 'blue'
      },
      {
        id: 1,
        date: '22 January 2018,  18:20',
        message: 'You subscription has expired…',
        button_content: 'Renew',
        button_icon: 'http://peczkowskip.com/img/arrow-green.svg',
        color: 'green'
      },
      {
        id: 2,
        date: '23 January 2018,  18:20',
        message: 'You subscription has expired…',
        button_content: 'TEST3',
        button_icon: 'http://peczkowskip.com/img/arrow-blue.svg',
        color: 'blue'
      }
    ],    
    loadingNotifications: false
  },
  mutations: {    
    setLoadingNotifications (state, payload) {
      state.loadingNotifications = payload
    },
    setNewNotifications (state, payload) {
      state.notificationsData = payload
    }
  },
  actions: {    
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
    loadingNotifications(state) {
      return state.loadingNotifications
    },
    notificationsData (state) {
      return state.notificationsData
    }
  }
}