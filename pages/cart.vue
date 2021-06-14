<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in cart" :key="item.id">
                    <td>{{ item.name }}</td>
                    <td>
                        <input
                            type="number"
                            v-model="item.quantity"
                            @change="updateCart(item)"
                        />
                    </td>
                    <td>
                        <button @click="deleteCartItem(item.id)">delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    name: "cart",
    computed: mapState(["cart"]),
    created() {
        if (process.client) {
            this.$store.dispatch("getLocalStorageCart");
        }
    },
    methods: {
        deleteCartItem(itemId) {
            this.$store.dispatch('deleteCartItem', itemId);
        },
        updateCart(item) {
            const id = item.id;
            const quantity = item.quantity;
            this.$store.dispatch('updateCart', {
                id,
                quantity,
            });
        }
    }
};
</script>

<style>
th,
td {
    border: 1px solid black;
    text-align: center;
}
</style>
