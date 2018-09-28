<template>
    <div>  
        <button v-if="!loading" :class="['oval--button', position]" @click="onClick"></button>
        <img v-else :class="['loader', position]" src="https://i.pinimg.com/originals/79/29/49/792949593382cf91c67a503923cd1f88.gif">
    </div>   
</template>

<script>
    export default {
        props: {
            position: String,
            onClick: Function
        },
        computed: {
            loading () {                
                return this.$store.getters.loading
            }
        }
        
    }
</script>

<style lang="scss" scoped>

.oval--button {
    background-color: #fff;
    width: 16px;
    height: 16px;
    border: 2px solid $grey;
    border-radius: 50%;
    cursor: pointer;
}

.loader {
    width: 50px;
    height: 50px;
    margin: 0px;
    padding: 0px;
}

</style>