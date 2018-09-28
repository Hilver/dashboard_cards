<template>
    <div>
        <notification v-for="notification in notificationsData" 
        :key="notification.id" 
        :date="notification.date" 
        :message="notification.message" 
        :button_content="notification.button_content"
        :button_icon="notification.button_icon"
        :color="notification.color"        
        ></notification>
    </div>
</template>

<script>
import Notification from './Notification'
    export default {
        components: {
            Notification
        },
        computed: {
            notificationsData () {
                return this.$store.getters.notificationsData.slice(0,2)
            }
        }
    }
</script>

<style lang="scss" scoped>



</style>