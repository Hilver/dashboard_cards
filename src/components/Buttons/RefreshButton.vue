<template>    
        <button :class="['oval--button', position]" @click="onClick"></button>    
</template>

<script>
    export default {
        props: {
            position: String,
            onClick: Function
        }
        
    }
</script>

<style lang="scss" scoped>

.oval--button {
    background-color: #fff;
    width: 20px;
    height: 20px;
    border: 3px solid $grey;
    border-radius: 50%;
    cursor: pointer;
}

</style>