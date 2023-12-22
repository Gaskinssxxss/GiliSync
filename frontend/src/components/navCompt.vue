<template>
    <nav class="fixed top-0 left-0 right-0 z-50  ">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../../public/gils.png" class="h-16 md:h-24" alt="Flowbite Logo" />
            </a>
            <div class="hidden md:flex justify-center ml-36 space-x-2 uppercase pr-10">
                <router-link to="/">
                    <div href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">Home</div>
                </router-link>
                <div class="relative" @click="toggleDropdown">
                    <div class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 cursor-pointer">Package</div>
                    <div v-show="isDropdownOpen"
                        class="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 text-sm">
                        <router-link to="/product">
                            <div class="py-2 px-3 text-cyan-700 hover:text-cyan-500 cursor-pointer">Alat Olahraga</div>
                        </router-link>
                        <div class="py-2 px-3 text-cyan-700 hover:text-cyan-500 cursor-pointer">Course & Lesson</div>
                        <div class="py-2 px-3 text-cyan-700 hover:text-cyan-500 cursor-pointer">Guide</div>
                    </div>
                </div>
                <router-link to="/gallery">
                    <div href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">Gallery</div>
                </router-link>
                <router-link to="/about">
                    <div href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">About</div>
                </router-link>
                <div href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">Faq</div>
            </div>
            <div class="hidden md:flex items-center space-x-2 uppercase">
                <div v-if="!user" class="mr-2">
                    <router-link to="/login" class="text-cyan-700 hover:text-cyan-500">Login</router-link>
                </div>
                <div v-if="!user">
                    <router-link to="/register" class="text-cyan-700 hover:text-cyan-500">Register</router-link>
                </div>
            </div>
            <div class="-mr-20 hidden md:flex">
                <div class="space-x-10 flex">
                    <div v-if="user" class="">
                        <router-link to="/user" class="text-cyan-700">{{ user.username }}</router-link>
                    </div>
                    <div v-if="user" @click="logout" class="text-cyan-700 cursor-pointer">
                        Log out
                    </div>
                </div>
            </div>
            <button @click="toggleMenu" type="button"
                class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                aria-controls="navbar-hamburger" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div v-show="isMenuOpen" class="absolute top-full w-auto z-10 right-52" id="navbar-hamburger">
                <div class="-mt-20">
                    <ul class="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <li>
                            <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded dark:bg-blue-600"
                                aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-3 text-cyan-700 rounded hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white">Services</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-3 text-cyan-700 rounded hover:text-cyan-500  md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Pricing</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block py-2 px-3 text-cyan-700 rounded hover:text-cyan-500  dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</template>
  
<script>
import { RouterLink } from 'vue-router';

export default {
    name: "NavigationComp",
    data() {
        return {
            isDropdownOpen: false,
        }
    },
    methods: {
        async logout() {
            try {
                await this.$store.dispatch("logout");
                if (!this.isUserLoggedIn) {
                    this.$toast.success("Successfully logged out.", { position: "bottom-left", duration: 1000 });
                    await this.$router.push("/login");
                }
            }
            catch (e) {
                console.log(e);
                this.$toast.error("Couldn't log out.", { position: "bottom-left", duration: 1000 });
            }
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
        },
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    },
    components: { RouterLink }
}
</script>
