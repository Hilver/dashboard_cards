<template>
    <div class="line-chart">
    <line-chart height="260px" :data="tempData" :colors="['#4CA368']" :discrete="true" :curve="false" :min="minFilter" :max="maxFilter"></line-chart>
    </div>
</template>

<script>
    export default {
        
        data () {
            return {

            }
        },
        computed: {
            tempData () {
                return this.$store.getters.tempData
            },
            minFilter () {
                return this.$store.getters.tempDataFilter.min
            },
            maxFilter () {
                return this.$store.getters.tempDataFilter.max
            }
        }
        
    }
</script>

<style lang="scss" scoped>

.line-chart {
    height: 50%;
}

</style>