<template>
    <div>
    <line-chart :data="tempData"></line-chart>
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

<style scoped>

</style>