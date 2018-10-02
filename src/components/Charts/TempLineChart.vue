<template>
    <div class="line-chart">    
    <canvas id="temp-chart"></canvas>
    </div>
</template>

<script>
import chartTempData from './TempLineChartData.js'
    export default {
        
        data () {
            return {
                tempData: chartTempData
            }
        },
        methods: {
            createChart(chartId, chartData) {
                const ctx = document.getElementById(chartId);
                const myChart = new Chart(ctx, {
                    type: chartData.type,
                    data: chartData.data,
                    options: chartData.options,
                });
            }            
        },
        computed: {            
            dynamicData() {
                let newOptions = {
                    ...this.tempData.options,
                    scales: {
                        ...this.tempData.options.scales,
                        yAxes: [{
                            display: false,
                            ticks: {
                            min: this.$store.getters.tempDataFilter.max,
                            max: this.$store.getters.tempDataFilter.min
                            }
                        }]
                    }
                }
                const chartData = {
                    type: this.tempData.type,
                    data: this.tempData.data,
                    options: newOptions,
                }
                return chartData
            }
        },
        watch: {
            dynamicData: function() {
                this.createChart('temp-chart', this.dynamicData)
            }            
        },
        mounted() {
            this.createChart('temp-chart', this.dynamicData)
        }
    }
</script>

<style lang="scss" scoped>


</style>