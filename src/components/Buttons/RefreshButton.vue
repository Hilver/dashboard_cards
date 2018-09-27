<template>
    <div>
        <button :class="['oval--button']"></button>
    </div>
</template>

<script>
    export default {
        
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