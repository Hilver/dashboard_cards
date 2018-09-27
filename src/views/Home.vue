<template>
  <div class="container">
    <dashboard-card :title="'Device Temperature'"></dashboard-card>
    
    
  </div>
</template>

<script>
import DashboardCard from '../components/DashboardCard.vue';
export default {  
  name: 'home',
  components: {
    DashboardCard
  }
}
</script>
