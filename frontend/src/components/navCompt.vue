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
            <button @click="toggleMenu" @blur="closeMenu" type="button"
                class="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:text-cyan-500 focus:outline-none focus:ring-2 focus:ring-gray-200  dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                aria-controls="navbar-hamburger" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <div v-show="isMenuOpen" class="absolute mt-2 w-auto z-10 right-3" id="navbar-hamburger">
                <div class="mt-52 text-white">
                    <ul class="flex flex-col font-medium mt-4 rounded-lg px-4 bg-cyan-600 ">
                        <div>
                            <router-link to="/">
                                <button class="pl-2 pt-2 ">
                                    <h1>home</h1>
                                </button>
                            </router-link>
                        </div>
                        <li>
                            <div class="block relative">
                                <span class="block py-2 px-3 text-white cursor-pointer" @click="toggleDropdowns">
                                    Produk
                                </span>
                                <div v-show="isProdukDropdownOpen" @click="closeMenu"
                                    class="absolute top-full left-0 mt-2 bg-cyan-800 rounded-lg shadow-lg z-10 text-sm">
                                    <router-link to="/product">
                                        <div class="py-2 px-3 cursor-pointer">Tools
                                        </div>
                                    </router-link>
                                    <router-link to="/products">
                                        <div class="py-2 px-3 cursor-pointer">Lesson
                                        </div>
                                    </router-link>
                                    <router-link to="/produk3">
                                        <div class="py-2 px-3 cursor-pointer">Guide
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <router-link to="/gallery">
                                <div class="block py-2 px-3 text-white">Gallery</div>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/about">
                                <div class="block py-2 px-3 text-white">About</div>
                            </router-link>
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
            isMenuOpen: false,
            isProdukDropdownOpen: false
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
        toggleProdukDropdown() {
            this.isProdukDropdownOpen = !this.isProdukDropdownOpen;
        },
        toggleDropdowns() {
            this.isProdukDropdownOpen = !this.isProdukDropdownOpen;
        },
        closeMenu() {
            this.isMenuOpen = false;
            this.isProdukDropdownOpen = false;
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
