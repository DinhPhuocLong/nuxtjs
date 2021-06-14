<template>
    <div class="container">
        <nuxt-link to="/cart">Cart</nuxt-link>
        <div class="product-container">
            <product-item
                v-for="product in products"
                :key="product.id"
                :product="product"
            ></product-item>
        </div>
    </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import { mapState, mapActions } from "vuex";
import util from "../helpers/util";
export default {
    middleware(context) {
        if (process.server) {
            const { req, redirect } = context;
            if (!util.getCookieFromHeader(req.headers.cookie, "token")) {
                redirect("/login");
            } else {
                redirect("/");
            }
        }
    },
    components: { ProductItem },
    computed: mapState(["products"]),
    methods: mapActions(["fecthProduct", "getLocalStorageCart"]),
    created() {
        this.fecthProduct();
    },
};
</script>

<style>
.container {
    width: 90%;
    margin: auto;
}
</style>
