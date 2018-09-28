<template>
  <div class="container">
    <dashboard-card :title="'Device Temperature'" :onClick="setFilterTemp">
      <component :is="temp_chart"></component>
    </dashboard-card>
    <dashboard-card :title="'Notifications'" :onClick="setFilterTemp">
      <component :is="notifications"></component>
    </dashboard-card>
  </div>
</template>

<script>
import DashboardCard from '../components/DashboardCard.vue';
import TempChart from '../components/Charts/TempLineChart.vue';
import Notifications from '../components/Notifications/Notifications.vue';
export default {  
  name: 'home',
  components: {
    DashboardCard,
    TempChart,
    Notifications
  },
  data() {
    return { 
      temp_chart: 'temp-chart',
      minTemp: 30,
      maxTemp: 45,
      notifications: 'notifications'
      };
  },
  methods: {
    setFilterTemp() {
      const filterTemp = {
        min: this.minTemp,
        max: this.maxTemp
      }
      this.$store.dispatch('setTempFilter', filterTemp)
    }
  }
}
</script>
