<template>
    <div class="relative left-0">
        <div class="flex justify-end pr-10">
            <button class="absolute rounded-sm top-0 ml-4 -mt-6 md:mt-16 flex space-x-5 py-2 px-4 text-white -mr-10">
                <div class="text-cyan-800 pt-1">
                    <h1>Total Produk : {{ total }}</h1>
                </div>
                <svg @click="bagShow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 md:w-8 h-6 md:h-8 text-cyan-800 hover:text-cyan-600">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </button>
            <div class="text-cyan-800 pt-7 mr-5">
                <h1>Payment</h1>
            </div>
            <router-link to="/payment">
                <div class="-mr-7 pt-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-8 md:w-9 h-8 md:h-9 text-cyan-800 hover:text-cyan-500">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </router-link>
            <div class="absolute top-20 -mr-7">
                <div v-show="open" class="pb-2 text-black rounded-sm max-w-xl w-full bg-white">
                    <div v-if="selectedProducts.length > 0"
                        class=" border-1 border-cyan-700 pb-2 space-y-1 text-black rounded-md">
                        <div v-for="product in selectedProducts" :key="product.id"
                            class="mt-5 grid grid-cols-5 space-x-2 px-2">
                            <div class="justify-self-center w-10 h-10">
                                <img :src="getFullImagePath(product.imageUrl)" alt="Product Image">
                            </div>
                            <div class="justify-self-center text-center text-sm">
                                {{ product.name }}
                            </div>
                            <div class="justify-self-center">
                                {{ "Rp." + (product.price * product.inputValue) + "K" }}
                            </div>
                            <div class="justify-self-center">
                                <vue-number-input v-model="product.inputValue" :min="1" :max="50" size="small" inline
                                    controls class="text-center w-24 "></vue-number-input>
                            </div>
                            <div @click="hapus(product)" class="justify-self-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6 hover:text-orange-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                        <div class="pt-10 flex justify-center">
                            <button @click="checkoutProducts"
                                class="border-1 border-cyan-700 hover:bg-cyan-700 px-20 py-1 text-cyan-600 hover:text-white rounded-md">checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form class="pt-16 md:pt-20">
            <div class="px-2 md:px-4">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 xl:gap-8">
                    <div v-for="product in productLists" :key="product.id"
                        class="text-xs md:text-base rounded-sm text-center font-sans font-semibold py-2 pb-2 shadow-sm  px-2 bg-white hover:shadow-xl">
                        <div>
                            <div class="pt-4">
                                <img :src="getFullImagePath(product.imageUrl)" alt="Product Image"
                                    class="w-16 md:w-36 h-16 md:h-36 mx-auto">
                            </div>
                            <div class="pt-4">
                                {{ product.name }}
                            </div>
                            <div class="pt-1">
                                {{ product.price }}
                            </div>
                            <div class="py-4">
                                <div @click.prevent="addToBag(product)"
                                    class="py-1 border-1 border-cyan-700 mx-12 md:mx-16 2xl:mx-22 text-cyan-700 hover:bg-cyan-700 hover:text-white rounded-full">
                                    <button class="text-md mx-auto flex justify-center ">+</button>
                                </div>
                            </div>
                            <div class="pt-0 md:pt-2 pb-2">
                                <div
                                    class="py-1 px-9 mx-2 xl:mx-10 text-cyan-800 border-1 border-cyan-700 hover:bg-cyan-700 hover:text-white rounded-sm">
                                    <button class="text-sm mx-auto flex justify-center text-center">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
  
<script>
import Api from "@/services/api";

export default {
    data() {
        return {
            productLists: [],
            open: false,
            selectedProducts: [],
            nama: "",
            total: 0
        };
    },
    mounted() {
        const storedProducts = localStorage.getItem('selectedProducts');
        const storedTotal = localStorage.getItem('total');

        if (storedProducts && storedTotal) {
            this.selectedProducts = JSON.parse(storedProducts);
            this.total = parseInt(storedTotal);
        }

        this.fetchProductData();
    },
    methods: {
        async fetchProductData() {
            try {
                const response = await Api.get('products');
                this.productLists = response.data.data.map(product => ({
                    ...product,
                    inputValue: 0,
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        getFullImagePath(imageUrl) {
            return `http://localhost:5000${imageUrl}`;
        },
        async checkoutProducts() {
            try {
                const response = await Api.post('checkout', { nama: this.user.username, selectedProducts: this.selectedProducts });
                console.log('Checkout successful:', response.data);
                this.$toast.success("Checkout successful.", { position: "bottom-left", duration: 1000 });

                // Empty selected products and reset total after successful checkout
                this.selectedProducts = [];
                this.total = 0;
                await this.$router.push({ name: 'payment' });

                localStorage.removeItem('selectedProducts');
                localStorage.removeItem('total');
            } catch (err) {
                console.error('Error during checkout:', err);
                this.$toast.error(`Authentication failed! Error: ${err}`, { position: "bottom-left", duration: 1000 });
            }
        },
        bagShow() {
            if (this.selectedProducts != 0) {
                this.open = !this.open;
            } else (
                this.open = false
            )
        },
        addToBag(product) {
            if (!this.userLoggedIn) {
                this.$router.push({ name: 'login' }); // Arahkan ke halaman login jika belum login
                return; // Berhenti menjalankan proses selanjutnya jika belum login
            } else {
                const existingProduct = this.selectedProducts.find((p) => p.name === product.name);

                if (!existingProduct) {
                    this.selectedProducts.push({ ...product });
                    product.inputValue = this.productLists.price; // Atau atur ke nilai default
                    this.total += 1;

                    localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
                    localStorage.setItem('total', this.total.toString());
                } else {
                    this.$toast.error("Produk sudah ada dalam keranjang.", { position: "bottom-left", duration: 2000 });
                }
            }
        },
        hapus(product) {
            const index = this.selectedProducts.findIndex((p) => p.id === product.id);

            if (index !== -1) {
                this.selectedProducts.splice(index, 1);
                this.total -= 1;

                localStorage.setItem('selectedProducts', JSON.stringify(this.selectedProducts));
                localStorage.setItem('total', this.total.toString());
            }
        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        },
        userLoggedIn() {
            return this.$store.state.userLoggedIn;
        }
    }
};
</script>
