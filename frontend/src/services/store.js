import { createStore } from "vuex";
import Api from "@/services/api";

const store = createStore({
    state: {
        user: null,
        userLoggedIn: false,
        isStoreUpdated: false,
        productList: [],
        productLists: [],
        productListsx: [],
    },
    mutations: {
        setUser(state, payload) {
            state.user = payload;
        },
        setUserIsLoggedIn(state, payload) {
            state.userLoggedIn = payload;
        },
        setIsStoreUpdated(state, payload) {
            state.isStoreUpdated = payload;
        },
        setProductList(state, payload) {
            state.productList = payload;
        },
        setProductLists(state, payload) {
            state.productLists = payload;
        },
        setProductListsx(state, payload) {
            state.productListsx = payload;
        },
    },
    actions: {
        async login(context, { email, password }) {
            const res = await Api.post("/users/login", { email, password })
                .catch((err) => {
                    throw new Error(err);
                });
            if (res && res.data) {
                context.commit("setUser", res.data.data);
                context.commit("setUserIsLoggedIn", true);
            } else {
                context.commit("setUser", null);
                context.commit("setUserIsLoggedIn", false);
                throw new Error("unknown error");
            }
        },
        async updateStore(context) {
            try {
                const res = await Api.get("/users");
                context.commit("setUser", res.data.data);
                context.commit("setUserIsLoggedIn", true);
            } catch (e) {
                context.commit("setUser", null);
                context.commit("setUserIsLoggedIn", false);
            } finally {
                context.commit("setIsStoreUpdated", true);
            }
        },
        async productData(context) {
            try {
                const res = await Api.get("/product");
                context.commit("setProductList", res.data.data);
            } catch (error) {
                console.error('Error fetching kursi data in action:', error);
                throw error;
            }
        },
        async productDatas(context) {
            try {
                const res = await Api.get("/products");
                context.commit("setProductLists", res.data.data);
            } catch (error) {
                console.error('Error fetching kursi data in action:', error);
                throw error;
            }
        },
        async productDatasx(context) {
            try {
                const res = await Api.get("/productsx");
                context.commit("setProductListsx", res.data.data);
            } catch (error) {
                console.error('Error fetching kursi data in action:', error);
                throw error;
            }
        },
        async logout(context) {
            const res = await Api.post("/users/logout")
                .catch((err) => {
                    throw new Error(err);
                });
            if (res) {
                context.commit("setUser", null);
                context.commit("setUserIsLoggedIn", false);
            }
        }
    }
})

export default store;