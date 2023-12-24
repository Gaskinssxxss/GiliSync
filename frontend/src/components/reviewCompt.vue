<template>
    <div class="pb-2 md:pb-10 font-sans font-extrabold text-gray-600 text-2xl">
        <h1 class="text-center text-sm md:text-base">Rating & Love</h1>
    </div>
    <div class="hidden md:grid grid-cols-5 text-center gap-4 md:gap-10 px-5 md:px-20 ">
        <div v-for="(item, index) in data" :key="index" class="bg-white text-black py-8 rounded-full px-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-12 h-12 mx-auto">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            <h1 class="pt-2 font-sans font-bold">{{ check(item.gender) }} {{ item.name }}</h1>
            <p class="font-sans">{{ item.desc }}</p>
            <div class="rating">
                <span v-for="i in 5" :key="i" class="star" :class="{ filled: i <= parseInt(item.rating) }">
                    ★
                </span>
            </div>
        </div>
    </div>
    <div class="mx-auto block md:hidden">
        <swiper :modules="modules" :slides-per-view="1" :space-between="50" :scrollbar="{ draggable: true }"
            @swiper="onSwiper" @slideChange="onSlideChange" class="-mx-2">
            <swiper-slide v-for="(item, index) in data" :key="index">
                <div class=" text-black py-2 md:py-4 text-center mx-4 text-xs md:text-base">
                    <div class="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-12 h-12 mx-auto">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <h1 class="pt-2 font-sans font-bold">{{ check(item.gender) }} {{ item.name }}</h1>
                        <p class="font-sans">{{ item.desc }}</p>
                        <div class="rating">
                            <span v-for="i in 5" :key="i" :class="{ filled: i <= parseInt(item.rating) }">
                                ★
                            </span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
  
<script>
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            data: [
                {
                    name: 'Indra',
                    desc: 'good job',
                    rating: '4',
                    Date: Date.now(),
                    gender: 'male'
                },
                {
                    name: 'Amy',
                    desc: 'Nice Dream',
                    rating: '5',
                    Date: Date.now(),
                    gender: 'female'
                },
                {
                    name: 'Lucy',
                    desc: 'Secure ur back',
                    rating: '4',
                    Date: Date.now(),
                    gender: 'male'
                },
                {
                    name: 'Hasan hasbi',
                    desc: 'Neva gif fep',
                    rating: '5',
                    Date: Date.now(),
                    gender: 'male'
                },
                {
                    name: 'Aldi Rakabuming',
                    desc: 'yoihh',
                    rating: '1',
                    Date: Date.now(),
                    gender: 'female'
                },
            ],
        };
    },
    methods: {
        check(gender) {
            return gender === 'male' ? 'Mr.' : 'Mrs.';
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
};
</script>
  
<style>
.rating {
    color: #FFD700;
}

.star {
    margin-right: 5px;
    cursor: pointer;
}

.star.filled {
    color: #FFD700;
}

.star:not(.filled) {
    color: #ccc;
}
</style>
  