<template>
    <nav class="fixed top-0 left-0 right-0 z-50  bg-orange-50">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto px-4 py-2">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="../../public/gils.png" class="h-24" alt="Flowbite Logo" />
            </a>
            <div class="hidden md:flex justify-center ml-28 space-x-2">
                <router-link to="/">
                    <div href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">Home</div>
                </router-link>
                <div href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">About</div>
                <div href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">Gallery</div>
                <router-link to="/product">
                    <div href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">Package</div>
                </router-link>
            </div>
            <div class="hidden md:flex items-center space-x-2">
                <RouterLink to="/login">
                    <a href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">Login</a>
                </RouterLink>
                <router-link to="/register">
                    <a href="#" class="px-3 py-1 text-cyan-700 rounded hover:text-cyan-500 ">Register</a>
                </router-link>
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
    data() {
        return {
            isMenuOpen: false
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
    components: { RouterLink }
};
</script>
  