<template>
  <div class="container">
    <dashboard-card :title="'Device Temperature'" :onClick="setFilterTemp">
      <component :is="temp_chart"></component>
    </dashboard-card>
    
    
  </div>
</template>

<script>
import DashboardCard from '../components/DashboardCard.vue';
import TempChart from '../components/Charts/TempLineChart.vue';
export default {  
  name: 'home',
  components: {
    DashboardCard,
    TempChart
  },
  data() {
    return { 
      temp_chart: 'temp-chart',
      minTemp: 30,
      maxTemp: 45
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
