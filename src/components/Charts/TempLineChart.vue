<template>
    <div>
    <line-chart :data="tempData" :colors="['#4CA368']" :discrete="true" :curve="false"></line-chart>
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
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>