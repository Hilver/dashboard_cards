<template>
    <div class="card">
        <h3 class="card__title">{{title}}</h3>
        <div class="divider"></div>
    </div>
</template>

<script>
    export default {
         props: ['title']
        
    }
</script>

<style lang="scss" scoped>

.card {
    background: #FFFFFF;
    box-shadow: 0 2px 30px 0 rgba(50,50,50,0.05);
    border-radius: 10px;
    width: 420px;
    height: 347px;
}

.card__title {
    color: $grey;
    margin: 25px;
}

</style>