<template>
    <div class="chat">
        <div class="chat-container">
            <div class="chat-sidebar">
                <div class="chat-sidebar-header">
                    <div class="top-container">
                        <h2>Chat</h2>
                        <div class="icon-container">
                            <div class="icon">
                                <i class="el-icon-more"></i>
                            </div>
                            <div class="icon">
                                <i class="el-icon-video-camera"></i>
                            </div>
                            <div class="icon">
                                <i class="el-icon-edit-outline"></i>
                            </div>
                        </div>
                    </div>
                    <div class="thread-search">
                        <input
                            type="text"
                            name="search"
                            class="thread-search-input"
                            placeholder="Search ?"
                            v-model="searchQuery"
                            @keyup.enter="cancelSearch"
                        />
                        <i class="el-icon-search"></i>
                    </div>
                </div>
                <div class="thread-container">
                    <thread
                        v-for="thread in filteredThread"
                        :key="thread.id"
                        :thread="thread"
                        @click.native="loadThread(thread)"
                        :active="currentThread == thread.id"
                    >
                    </thread>
                </div>
            </div>

            <div class="chat-content">
                <div class="chat-content-header">
                    <div class="chat-content-title">
                        <img :src="threadLoaded.image" alt="" />
                        {{ threadLoaded.title }}
                    </div>
                    <i class="el-icon-info"></i>
                </div>
                <div class="message-container">
                    <message
                        v-for="message in threadMessage"
                        :key="message.id"
                        :message="message"
                        :me="message.from == myName"
                    ></message>
                </div>
                <div class="send-message">
                    <input
                        type="text"
                        v-model="newMessage"
                        @keyup.enter="sendMessage"
                    />
                    <button class="send-message-btn" @click="sendMessage">
                        <i class="el-icon-s-promotion"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from "../components/Message.vue";
import Thread from "../components/Thread.vue";
import { mapState } from "vuex";
export default {
    components: { Thread, Message },
    data() {
        return {
            myName: "Long",
            currentThread: 1,
            newMessage: "",
            searchQuery: "",
        };
    },
    methods: {
        loadThread(thread) {
            this.currentThread = thread.id;
        },
        sendMessage() {
            const newMessage = {
                content: this.newMessage,
                from: this.myName,
                time: new Date().toISOString(),
            };
            if (this.newMessage != "") {
                this.$store.dispatch("addNewMessage", {
                    newMessage,
                    currentThread: this.currentThread,
                });
                this.newMessage = "";
                this.autoReply();
                this.$store.dispatch("setThreadsToLocalstorage");
            }
        },
        autoReply() {
            const from = this.threads.filter(
                (th) => th.id == this.currentThread
            );
            const newMessage = {
                content: "yes",
                from: from.title,
                time: new Date().toISOString(),
            };
            this.$store.dispatch("addNewMessage", {
                newMessage,
                currentThread: this.currentThread,
            });
            this.$root.$emit("threadUpdate", {
                id: this.currentThread,
                description: newMessage.content,
                time: newMessage.time,
            });
            this.$store.dispatch("threadSort");
        },
        scrollToEnd() {
            const chatContainer = this.$el.querySelector(".chat-content");
            const scrollHeight = chatContainer.scrollHeight;
            chatContainer.scrollTop = scrollHeight;
        },
        cancelSearch() {
            this.searchQuery = "";
        },
    },
    mounted() {
        if (process.client) {
            this.scrollToEnd();
        }
    },
    updated() {
        this.scrollToEnd();
    },
    created() {
        if (process.client) {
            this.$store.dispatch("getLocalStorageThreads");
        }
    },
    computed: {
        ...mapState(["threads"]),
        threadMessage() {
            const thread = this.threads.find(
                (th) => th.id == this.currentThread
            );
            return thread.messages;
        },
        threadLoaded() {
            const thread = this.threads.find(
                (th) => th.id == this.currentThread
            );
            return thread;
        },
        filteredThread() {
            return this.threads.filter((thread) => {
                return thread.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase());
            });
        },
    },
};
</script>

<style>
.chat-container {
    background: #000000;
    height: 100vh;
    display: flex;
}
.chat-sidebar {
    width: 25%;
    border: 1px solid #242526;
    height: 100%;
    padding-left: 8px;
    padding-right: 8px;
    overflow: auto;
}
.thread-container .thread:nth-child(1) {
    margin-top: 125px;
}
.chat-content {
    width: 75%;
    border: 1px solid #242526;
    height: 100%;
    overflow: scroll;
    z-index: 1;
}
.chat-content::-webkit-scrollbar,
.chat-sidebar::-webkit-scrollbar {
    display: none;
}
.chat-sidebar-header {
    padding-top: 20px;
    padding-left: 8px;
    padding-right: 8px;
    color: white;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    position: fixed;
    width: 25%;
    background: black;
    padding-bottom: 20px;
}
.top-container {
    display: flex;
    justify-content: space-between;
}
.icon-container {
    display: flex;
    flex-direction: row;
    gap: 15px;
}
.icon {
    height: 36px;
    width: 36px;
    background-color: #3a3b3c;
    border-radius: 50%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
}
input[type="text"] {
    background-color: #3a3b3c;
    border: 0;
    border-radius: 15px;
    height: 36px;
    width: 100%;
    margin-top: 10px;
    color: white;
    padding-left: 30px;
}
input[type="text"]:focus {
    outline: none;
}
.thread-search {
    position: relative;
}
.thread-search i {
    position: absolute;
    left: 0;
    color: white;
    cursor: pointer;
    transform: translateY(125%);
    left: 10px;
}
input[type="text"]::-webkit-input-placeholder {
    text-align: left;
}
.chat-content-header {
    color: white;
    padding-top: 20px;
    padding-left: 8px;
    padding-right: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 75%;
    top: 0;
    z-index: 1;
    background: black;
}
.chat-content-title {
    display: flex;
    align-items: center;
}
.chat-content-header img {
    widows: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
}
.chat-content-header i {
    color: #0084ff;
    font-size: 22px;
    cursor: pointer;
}
.send-message {
    padding: 8px;
    padding-bottom: 20px;
    height: 54px;
    width: 75%;
    position: fixed;
    bottom: 0;
    display: flex;
    align-items: center;
    padding-top: 8px;
    background: black;
}
.send-message-btn {
    border: 0;
    background: none;
}
.send-message i {
    color: #0084ff;
    font-size: 25px;
    cursor: pointer;
}
.message-container .message:nth-child(1) {
    margin-top: 75px;
}
.message-container .message:last-child {
    margin-bottom: 75px;
}
.send-message input {
    padding-left: 20px;
}
</style>
