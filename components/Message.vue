<template>
    <div class="message">
        <div class="message-text" :class="{ me: me }">
            {{ message.content }}
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    props: ['message', 'me'],
    filters: {
        formatDate(value) {
            if (value) {
                return moment(String(value)).format("MM/DD/YYYY hh:mm");
            }
            return '';
        },
    },
};
</script>

<style>
.message {
    height: 35px;
    margin-top: 10px;
    display: flex;
    border-radius: 15px;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
}
.message-text {
    background-color: #4e4f50;
    float: left;
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 3px;
    padding-bottom: 7px;
    border-radius: 10px;
    position: relative;
}
.me {
    margin: auto 0 auto auto;
    background-color: #0084ff;
}
</style>
