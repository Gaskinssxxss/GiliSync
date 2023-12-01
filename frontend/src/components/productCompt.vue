<template>
    <div class="">
        <form class="">
            <div class="px-12">
                <div class="grid grid-cols-4 gap-8">
                    <div v-for="product in productList" :key="product.id"
                        class="py-2 rounded-sm text-center bg-orange-50 font-sans font-semibold py-4 shadow-sm border-1 border-cyan-800">
                        <div>
                            <div>
                                {{ product.image }}
                            </div>
                            <div>
                                {{ product.name }}
                            </div>
                            <div>
                                {{ product.deskripsi }}
                            </div>
                            <div>
                                {{ product.price }}
                            </div>
                        </div>
                        <div class="px-5 pt-2">
                            <numberInput class="flex justify-center">

                            </numberInput>
                        </div>
                        <!-- <div class="">
                            <div>
                                <input v-model="product.total" type="number" class="border-1 border-stone-500 p-1 w-20 h-8">
                            </div>
                        </div> -->
                        <div class="py-4">
                            <div
                                class="py-1 border-1 border-cyan-700 mx-14 text-cyan-800 hover:bg-cyan-700 hover:text-white rounded-md">
                                <button class="text-sm">Add</button>
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
import numberInput from "@/components/imputNumber.vue"

export default {
    components: {
        numberInput,
    },
    data() {
        return {
            productList: [],
            // reservasiData: []
        };
    },
    mounted() {
        this.fetchProductData();
        // this.submitProduct();
    },
    methods: {
        async fetchProductData() {
            try {
                const response = await Api.get('product'); // Ganti URL sesuai kebutuhan Anda
                this.productList = response.data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
    },
};
</script>