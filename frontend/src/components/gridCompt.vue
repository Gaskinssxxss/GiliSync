<template>
    <body class="px-10 py-20 bg-orange-50">
        <!-- grid container -->
        <swiper :modules="modules" :slides-per-view="4" :space-between="30" navigation :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }" @swiper="onSwiper" @slideChange="onSlideChange" class="">
            <swiper-slide class="">
                <a class="flex flex-col rounded-md">
                    <div class="px-3 py-14 bg-orange-50 border-1 border-cyan-800 rounded-lg">
                        <div>
                            <h1>prouk</h1>
                        </div>
                        <h1 class="font-semibold">Product One</h1>
                        <p class="text-sm">$69.69</p>
                    </div>
                </a>
            </swiper-slide>
            <!-- product card -->
            <swiper-slide class="">
                <a class="flex flex-col rounded-md">
                    <div class="px-3 py-14 bg-orange-50 border-1 border-cyan-800 rounded-lg">
                        <div>
                            <h1>prouk</h1>
                        </div>
                        <h1 class="font-semibold">Product One</h1>
                        <p class="text-sm">$69.69</p>
                    </div>
                </a>
            </swiper-slide>
            <!-- product card -->
            <swiper-slide class="">
                <a class="flex flex-col rounded-md">
                    <div class="px-3 py-14 bg-orange-50 border-1 border-cyan-800 rounded-lg">
                        <div>
                            <h1>prouk</h1>
                        </div>
                        <h1 class="font-semibold">Product One</h1>
                        <p class="text-sm">$69.69</p>
                    </div>
                </a>
            </swiper-slide>

            <swiper-slide class="">
                <a class="flex flex-col rounded-md">
                    <div class="px-3 py-14 bg-orange-50 border-1 border-cyan-800 rounded-lg">
                        <div>
                            <h1>prouk</h1>
                        </div>
                        <h1 class="font-semibold">Product One</h1>
                        <p class="text-sm">$69.69</p>
                    </div>
                </a>
            </swiper-slide>

            <swiper-slide class="">
                <a class="flex flex-col rounded-md">
                    <div class="px-3 py-14 bg-orange-50 border-1 border-cyan-800 rounded-lg">
                        <div>
                            <h1>prouk</h1>
                        </div>
                        <h1 class="font-semibold">Product One</h1>
                        <p class="text-sm">$69.69</p>
                    </div>
                </a>
            </swiper-slide>

            <swiper-slide class="">
                <a class="flex flex-col rounded-md">
                    <div class="px-3 py-14 bg-orange-50 border-1 border-cyan-800 rounded-lg">
                        <div>
                            <h1>prouk</h1>
                        </div>
                        <h1 class="font-semibold">Product One</h1>
                        <p class="text-sm">$69.69</p>
                    </div>
                </a>
            </swiper-slide>
        </swiper>
        <div class="flex justify-center pt-10">
            <button
                class="bg-cyan-700 bg-opacity-80 text-white px-10 py-2 rounded-md hover:bg-orange-50 hover:text-cyan-800 hover:border-1 hover: border-cyan-800">More
                Package</button>
        </div>
    </body>
</template>

<script>
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
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
};
</script>