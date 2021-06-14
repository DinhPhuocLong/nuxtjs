<template>
    <div class="card">
        <img :src="product.images[0].src" alt="#" style="width:100%" />
        <h1>
            <nuxt-link :to="'/product/' + product.id"
                >{{ product.name }}</nuxt-link
            >
        </h1>
        <p class="price">${{ product.variants[0].price }}</p>
    </div>
</template>

<script>
export default {
    name: "ProductItem",
    props: ["product"],
    methods: {
        addToCart() {
            this.$store.dispatch('pushProductToCart', {
                id: this.product.id,
                image: this.product.images[0].src,
                name: this.product.name,
                price: this.product.variants[0].price,
                quantity: 1,
            });
        }
    },
    created() {
        this.$store.dispatch('getLocalStorageCart');
    }
};
</script>

<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    max-width: 300px;
    text-align: center;
    margin-right: 20px;
    font-family: arial;
    margin-top: 20px;
}

.price {
    color: grey;
    font-size: 22px;
}

.card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

.card button:hover {
    opacity: 0.7;
}
.product-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
a {
    text-decoration: none;
    color: black;
}
.card h1 {
    font-size: 15px;
}
.card img {
    height: 300px;
    object-fit: cover;
}
</style>
