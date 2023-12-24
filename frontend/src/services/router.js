import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import LoginView from "@/views/LoginView";
import RegisterView from "@/views/RegisterView";
import store from "@/services/store";
import UserView from "@/views/UserView";
import product from "@/views/productViews";
import admin from "@/views/adminDasboard";
import payment from "@/views/paymentView";
import gallery from "@/views/GalleryView"
import about from "@/views/aboutView"
import forgotPass from "@/components/forgotPassword"
import productTu from "@/views/productsView"

const routes = [
    {
        path: "/",
        name: "home",
        component: HomeView,
        meta: {
            title: "Gili Sync",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/login",
        name: "login",
        component: LoginView,
        meta: {
            title: "Login",
            authRequired: false,
            authForbidden: true
        },
    },
    {
        path: "/register",
        name: "register",
        component: RegisterView,
        meta: {
            title: "Register",
            authRequired: false,
            authForbidden: true
        },
    },
    {
        path: "/user",
        name: "user",
        component: UserView,
        meta: {
            title: "User profile",
            authRequired: true,
            authForbidden: false
        }
    },
    {
        path: "/product",
        name: "product",
        component: product,
        meta: {
            title: "Product",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/admin",
        name: "admin",
        component: admin,
        meta: {
            title: "Admin Dashboard",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/payment",
        name: "payment",
        component: payment,
        meta: {
            title: "Payment",
            authRequired: true,
            authForbidden: false
        }
    },
    {
        path: "/gallery",
        name: "gallery",
        component: gallery,
        meta: {
            title: "Gallery",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/about",
        name: "about",
        component: about,
        meta: {
            title: "About",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/forgotPassword",
        name: "forgotPassword",
        component: forgotPass,
        meta: {
            title: "Forgot Password",
            authRequired: false,
            authForbidden: false
        }
    },
    {
        path: "/products",
        name: "products",
        component: productTu,
        meta: {
            title: "Products",
            authRequired: false,
            authForbidden: false
        }
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

// routes protection
router.beforeEach(async (to, from, next) => {
    // update store if needed
    if (!store.state.isStoreUpdated) {
        await store.dispatch("updateStore");
    }

    // control routes
    const isAuthenticated = store.state.userLoggedIn;
    if (!isAuthenticated && to.meta.authRequired) {
        next({ name: "login" });
    } else if (isAuthenticated && to.meta.authForbidden) {
        next({ name: "user" });
    } else {
        next();
    }
});

router.afterEach((to) => {
    document.title = to.meta.title;
});

export default router;