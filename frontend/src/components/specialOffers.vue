<template>
    <div class="text-xs md:text-base">
        <a class=" gap-y-4 md:gap-y-0 grid grid-cols-3 gap-x-4 md:gap-x-6 rounded-md text-white text-center">
            <div class="px-1 py-3 md:py-6 lg:py-5  shadow-md bg-cyan-600 hover:bg-cyan-800 rounded-lg">
                <div>
                    <router-link to="/product">
                        <button>
                            <h1 class="text-xs md:text-base">Alat Olahraga Air</h1>
                            <div class="pt-5">
                                <svg fill="#FFFFFF" class="w-6 md:w-12 h-6  md:h-12 mx-auto" version="1.1" id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 476.148 476.148" xml:space="preserve">
                                    <path
                                        d="M322.372,215.689C319.917,110.868,276.587,0,238.074,0s-81.844,110.867-84.298,215.688c-2.857,122.028,38.33,253.9,38.747,255.219c0.608,1.926,1.968,3.525,3.772,4.436c1.803,0.911,3.898,1.057,5.809,0.4l35.971-12.314l35.971,12.314c0.79,0.271,1.61,0.404,2.429,0.404c1.163,0,2.321-0.271,3.379-0.805c1.804-0.91,3.164-2.51,3.772-4.436C284.042,469.588,325.229,337.717,322.372,215.689zM271.52,459.023l-31.017-10.619c-1.574-0.539-3.284-0.539-4.858,0l-31.019,10.619c-8.457-29.14-38.271-139.76-35.854-242.984c1.131-48.287,11.19-100.01,27.601-141.907c12.172-31.079,24.894-49.197,34.202-56.004v398.973c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V18.128c9.307,6.807,22.029,24.926,34.202,56.005c16.41,41.897,26.469,93.621,27.6,141.908C309.791,319.196,279.977,429.868,271.52,459.023z" />
                                </svg>
                            </div>
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="px-1 py-3 md:py-6 lg:py-5  shadow-md bg-cyan-600 hover:bg-cyan-800 text-white rounded-lg">
                <div>
                    <router-link to="/products">
                        <button>
                            <h1 class="text-xs md:text-base">Course & Lesson</h1>
                            <div class="pt-5">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 md:w-10 h-6  md:h-10 mx-auto">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                                </svg>

                            </div>
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="px-1 py-3 md:py-6 lg:py-5  shadow-md bg-cyan-600 hover:bg-cyan-800 text-white rounded-lg">
                <div>
                    <button>
                        <h1 class="text-xs md:text-base">Guide</h1>
                        <div class="pt-8 md:pt-5">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 md:w-10 h-6  md:h-10 mx-auto">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Swiper styles
export default {
    methods: {
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