<template>
    <div class="card">
        <h3 class="card__title">{{title}}</h3>
        <div class="divider"></div>
        <refresh-button :position="'dashboard-card__button--position'" :onClick="onClick"></refresh-button>
        <slot></slot>
    </div>
</template>

<script>
import RefreshButton from './Buttons/RefreshButton.vue';
    export default {
        components: {
            RefreshButton            
        },
         props: {
             title: String,
             onClick: Function,
         }
        
    }
</script>

<style lang="scss" scoped>

.card {
    background: #FFFFFF;
    box-shadow: 0 2px 30px 0 rgba(50,50,50,0.05);
    border-radius: 10px;
    width: 420px;
    height: 347px;
    position: relative;
}

.card__title {
    color: $grey;
    margin: 25px;
}

</style>