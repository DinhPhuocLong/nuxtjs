<template>
    <client-only>
        <div class="login-page">
            <form class="login-form form">
                <input
                    type="text"
                    placeholder="username"
                    v-model="dataLogin.username"
                />
                <input
                    type="password"
                    placeholder="password"
                    v-model="dataLogin.password"
                />
                <button @click="onLogin">login</button>
            </form>
        </div>
    </client-only>
</template>

<script>
export default {
    middleware: "authenticated",
    data() {
        return {
            dataLogin: {
                username: "",
                password: "",
            },
        };
    },
    methods: {
        onLogin(e) {
            e.preventDefault();

            this.$store
                .dispatch("login", this.dataLogin)
                .then((n) => {
                    this.$cookies.set(
                        "token",
                        this.$store.state.auth.data.token
                    );
                    this.$router.push({ name: "index" });
                })
                .catch((e) => {
                    throw e;
                });
        },
    },
};
</script>

<style>
.login-page {
    width: 360px;
    padding: 8% 0 0;
    margin: auto;
}
.form {
    position: relative;
    z-index: 1;
    background: #ffffff;
    max-width: 360px;
    margin: 0 auto 100px;
    padding: 45px;
    text-align: center;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
}
.form button {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    outline: 0;
    background: #4caf50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
}
</style>
