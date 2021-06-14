import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state: {
            products: [],
            product: {},
            auth: [],
            cart: [],
            threads: [
                {
                    id: 1,
                    title: "Long",
                    image:
                        "https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-1/p100x100/132668878_2876660402614112_689519598499094734_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=iVEJHreL-WAAX8zoOVP&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-1.fna&tp=6&oh=d85e0fd098622ef36865c8c3baaaee3b&oe=6088E648",
                    description: "Hello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Joe",
                            content: "Joe mama",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "Hello my name is Long",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 2,
                    title: "Đinh Phước Long",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "Trello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "0123456",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 3,
                    title: "John Price",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "zello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "abc123123",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 4,
                    title: "User4",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "zello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "abc123123",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 5,
                    title: "User 5",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "zello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "abc123123",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 6,
                    title: "User 6",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "zello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "abc123123",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 7,
                    title: "User 6",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "zello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "abc123123",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 8,
                    title: "User 6",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "zello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "abc123123",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 9,
                    title: "User 6",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "zello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "abc123123",
                            time: "10:00 PM",
                        },
                    ],
                },
                {
                    id: 10,
                    title: "User 6",
                    image:
                        "https://scontent.fvca1-2.fna.fbcdn.net/v/t1.30497-1/c29.0.100.100a/p100x100/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=7206a8&_nc_ohc=leq1_VYclegAX-NtKIT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fvca1-2.fna&tp=27&oh=8defa01afe985670f9976377dd3005c4&oe=608A1C1E",
                    description: "zello",
                    time: new Date("1996-10-30T15:27:08"),
                    messages: [
                        {
                            from: "Long",
                            content: "zello",
                            time: "9:00 PM",
                        },
                        {
                            from: "Long",
                            content: "abc123123",
                            time: "10:00 PM",
                        },
                    ],
                },
            ],
        },
        mutations: {
            SET_PRODUCTS(state, products) {
                state.products = products;
            },
            SET_PRODUCT(state, product) {
                state.product = product;
            },
            SET_LOGIN(state, data) {
                state.auth = data;
            },
            SET_CART_TO_LOCALSTORAGE(state) {
                localStorage.setItem("cart", JSON.stringify(state.cart));
            },
            CART_PUSH(state, item) {
                state.cart.push(item);
            },
            INCREASE_CART_ITEM_QUANTITY(state, { cartItem, product }) {
                cartItem.quantity += product.quantity;
            },
            SET_CART(state, items) {
                state.cart = items || [];
            },
            DELETE_CART_ITEM(state, cartItemId) {
                state.cart = state.cart.filter((item) => item.id != cartItemId);
            },
            UPDATE_CART(_, { cartItem, quantity }) {
                cartItem.quantity = quantity;
            },
            ADD_MESSAGE(_, { thread, newMessage }) {
                thread.messages.push(newMessage);
            },
            SET_THREADS_TO_LOCALSTORAGE(state) {
                localStorage.setItem("threads", JSON.stringify(state.threads));
            },
            SET_THREADS(state, threads) {
                state.threads = threads || state.threads;
            }
        },
        getters: {

        },
        actions: {
            async fecthProduct({ commit }) {
                try {
                    const response = await axios.get(
                        "https://conmeodat.eyeteam.vn/api.product"
                    );
                    commit("SET_PRODUCTS", response.data.data);
                } catch (error) {
                    console.log(error);
                }
            },
            async fetchProductDetail({ commit }, id) {
                try {
                    const response = await axios.get(
                        "https://conmeodat.eyeteam.vn/api.product/" + id
                    );
                    commit("SET_PRODUCT", response.data.data);
                } catch (error) {
                    throw e;
                }
            },
            async login({ commit }, payload) {
                try {
                    const loginApi =
                        "https://conmeodat.eyeteam.vn/api.user/login";
                    const response = await axios.post(loginApi, payload);
                    commit("SET_LOGIN", response.data);
                } catch (error) {
                    throw error;
                }
            },
            addToCart({ state, commit }, product) {
                const cartItem = state.cart.find(
                    (item) => item.id === product.id
                );
                if (!cartItem) {
                    commit("CART_PUSH", product);
                } else {
                    commit("INCREASE_CART_ITEM_QUANTITY", {
                        cartItem,
                        product,
                    });
                }
                commit("SET_CART_TO_LOCALSTORAGE");
            },
            getLocalStorageCart({ commit }) {
                commit("SET_CART", JSON.parse(localStorage.getItem("cart")));
            },
            deleteCartItem({ commit }, cartItemId) {
                commit("DELETE_CART_ITEM", cartItemId);
                commit("SET_CART_TO_LOCALSTORAGE");
            },
            updateCart({ state, commit }, item) {
                const cartItem = state.cart.find((x) => x.id == item.id);
                const quantity = item.quantity;
                if (quantity > 0) {
                    commit("UPDATE_CART", {
                        cartItem,
                        quantity,
                    });
                    commit("SET_CART_TO_LOCALSTORAGE");
                }
            },
            addNewMessage({ state, commit }, { newMessage, currentThread }) {
                const thread = state.threads.find(
                    (thread) => thread.id == currentThread
                );
                commit("ADD_MESSAGE", {
                    newMessage,
                    thread,
                });
            },
            threadSort({ state, commit }) {
                state.threads.sort((a, b) => {
                    return new Date(b.time) - new Date(a.time);
                });
            },
            setThreadsToLocalstorage({ commit }) {
                commit("SET_THREADS_TO_LOCALSTORAGE");
            },
            getLocalStorageThreads( { commit } ) {
                commit('SET_THREADS', JSON.parse(localStorage.getItem("threads")));
            }
        },
    });
};

export default createStore;
