<template>
    <div class="notification__template">
        <div class="divider notification__divider"></div>
        <h5 class="notification__date">{{ date }}</h5>
        <p class="notification__message">{{ message }}</p>
        <button :class="['notification__button', 'notification__button--text', color]"><img class="notification__button--icon" :src="button_icon"> {{ button_content }}</button>
    </div>
</template>

<script>
    export default {
        props: {
            date: String,
            message: String,
            button_content: String,
            button_icon: String,
            color: String
        }
        
    }
</script>

<style lang="scss" scoped>

.notification__template {
    margin: 25px 20px;
}

.notification__date {
    font-size: 11px;
    color: $light-grey;
    margin: 0px;
}

.notification__message {
    font-size: 15px;
    color: #000;
    font-weight: bold;
    margin-top: 5px;
}

.notification__button {
    background-color: #fff;
    border: none;
    line-height: 15px;    
    cursor: pointer;
}

.notification__button--icon {
    width: 15px;
    height: 15px;
    vertical-align: middle;
    margin-right: 8px;
    margin-bottom: 3px;
}

.notification__button--text {
    font-size: 15px;
    font-weight: bold;
}

.notification__divider {
    margin-bottom: 20px;
}

.blue {
    color: $blue
}

.green {
    color: $green
}

</style>