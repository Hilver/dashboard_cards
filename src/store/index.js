import Vue from 'vue'
import Vuex from 'vuex'
import Notifications from './Notifications';
import TempChart from './TempChart';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    notifications: Notifications,
    tempChart: TempChart
  }
})
