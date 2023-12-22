<template>
    <body class="px-2 md:px-10 pb-5 pt-20">
        <div>
            <div class="hidden md:flex">
                <swiper :modules="modules" :slides-per-view="5" :space-between="30" navigation
                    :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                    @slideChange="onSlideChange">
                    <swiper-slide v-for="product in productList" :key="product.id">
                        <a class="flex flex-col">
                            <div class="px-1 py-6 rounded-sm">
                                <div>
                                    <img :src="getFullImagePath(product.imageUrl)" alt="Product Image"
                                        class="w-16 md:w-48 h-16 md:h-44 mx-auto">
                                </div>
                                <div class="pt-2 text-center">
                                    {{ product.name }}
                                </div>
                                <div class="pt-2 text-center">
                                    {{ product.price }}
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
            <div class="flex md:hidden px-2 md:px-0 text-xs md:text-base">
                <swiper :modules="modules" :slides-per-view="2" :space-between="30" navigation
                    :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" @swiper="onSwiper"
                    @slideChange="onSlideChange">
                    <swiper-slide v-for="product in productList" :key="product.id">
                        <a class="flex flex-col rounded-md">
                            <div class="px-1 md:px-3 py-2 md:py-10 bg-white rounded-lg">
                                <div>
                                    <img :src="getFullImagePath(product.imageUrl)" alt="Product Image"
                                        class="w-24 md:w-48 h-24 md:h-44 mx-auto">
                                </div>
                                <div class="text-center">
                                    {{ product.name }}
                                </div>
                                <div class="text-center">
                                    {{ product.price }}
                                </div>
                            </div>
                        </a>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="flex justify-center pt-5 md:pt-10">
            <button
                class="0 bg-opacity-80 text-cyan-700 hover:text-white px-10 py-2 rounded-md border-1 border-cyan-800 hover:bg-cyan-700">More
                Package</button>
        </div>
    </body>
</template>

<script>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Api from '@/services/api';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            productList: [],
        }
    },
    mounted() {
        this.fetchProductData();
    },
    methods: {
        async fetchProductData() {
            try {
                const response = await Api.get('product');
                this.productList = response.data.data.map(product => ({
                    ...product,
                    inputValue: 0,
                }));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        },
        getFullImagePath(imageUrl) {
            return `http://192.168.1.9:5000${imageUrl}`;
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation, A11y],
            };
        },
    },
}
</script>