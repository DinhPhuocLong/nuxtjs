<template>
    <div class="thread noselect" :class="{ active: active }">
        <img class="thread-image" :src="thread.image" />
        <div class="thread-detail">
            <div class="title">{{ thread.title }}</div>
            <span>{{ thread.description }} - {{ thread.time | formatDate }}</span>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
export default {
    props: ["thread", "active"],
    mounted() {
        this.$root.$on('threadUpdate', payload => {
            if (this.thread.id != payload.id) return;
            this.thread.description = payload.description;
            this.thread.time = payload.time;
        })
    },
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

<style scoped>
.thread {
    padding-left: 8px;
    padding-right: 8px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    height: 72px;
    border-radius: 10px;
}
.thread-image {
    border-radius: 50%;
    width: 56px;
    height: 56px;
    margin-right: 15px;
}
.content {
    color: white;
}
.thread-detail {
    color: white;
}
.thread-detail .title {
    font-size: 15px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(228, 230, 235);
}
.thread-detail span {
    font-size: 13px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(176, 179, 184);
}
.active {
    background: #252f3c;
}
.noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
}
</style>
