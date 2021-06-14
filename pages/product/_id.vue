<template>
    <client-only>
    <div class="post-container">
        <h1>
            {{ post.name }}
        </h1>
        <carousel 
        :dots="false"
        :items="1"
        :nav="true"
        >
            <div class="post-image">
                <img :src="post.images[0].src" alt="" />
            </div>

            <div class="post-image">
                <img :src="post.images[0].src" alt="" />
            </div>

            <div class="post-image">
                <img :src="post.images[0].src" alt="" />
            </div>

            <div class="post-image">
                <img :src="post.images[0].src" alt="" />
            </div>
        </carousel>

        <span v-html="post.description"></span>

        <div class="cart">
            <input type="number" v-model="quantity" />
            <button @click="addToCart">Thêm vào giỏ hàng</button>
        </div>
    </div>
    </client-only>
</template>

<script>
export default {
    data() {
        return {
            post: this.$store.state.product,
            quantity: 1,
        };
    },
    head() {
        return {
            title: this.post.name,
            meta: [
                // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                {
                    hid: "description",
                    name: "description",
                    content: this.post.slug,
                },
            ],
        };
    },
    async fetch({ params, store, redirect }) {
        try {
            await store.dispatch("fetchProductDetail", params.id);
        } catch (error) {
            console.log(error);
            redirect("/404");
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', {
                id: this.post.id,
                name: this.post.name,
                price: this.post.variants[0].price,
                quantity: +this.quantity,
            });
        }
    }
};
</script>

<style>
.post-container {
    width: 50%;
    margin: auto;
    margin-top: 20px;
}
h1 {
    text-align: center;
}
.post-image img {
    width: 100%;
}
.cart {
    height: 150px;
}
</style>
