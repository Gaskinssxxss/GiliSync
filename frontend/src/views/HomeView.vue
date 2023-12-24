<script setup>
import { AutoTyperVue } from "auto-typer-vue3";

let text = 'HELLO';
let text2 = 'GILI'

let text3 = ['Special offers - Get % for many package!', 'Selami lautan, tungganggi ombak mu!!!', 'c-mon, joinmwith us in the love land']
</script>

<template>
  <div class="">
    <div class="">
      <navCompt class="bg-white"></navCompt>
      <div>
        <div class=" mt-20 md:-mt-52">
          <img src="../../public/banner.jpg" alt="banner" class=" h-56 md:h-full w-full rounded-b-4xl md:rounded-b-7xl">
        </div>
        <div
          class=" text-cyan-600 text-4xl lg:text-8xl font-extrabold font-sans text-center relative -top-36 lg:-top-52 xl:-top-96">
          <AutoTyperVue componentTag="h1" :text="text" :typingDelay=700 />
          <AutoTyperVue componentTag="h1" :text="text2" :typingDelay=900 />
        </div>
        <div class="px-1 sm:px-5 md:px-10 lg:px-40 -mt-28 lg:-mt-40 xl:-mt-64 relative">
          <div class="px-4 md:px-10 lg:px-20">
            <div class=" bg-opacity-90 rounded-2xl shadow-md border-1 border-cyan-800 bg-white">
              <div class=" bg-cyan-600 py-1 md:py-2 rounded-t-2xl">
                <h1 class="text-center text-xs md:text-base text-orange-50">
                  <AutoTyperVue componentTag="h3" :text="text3"></AutoTyperVue>
                </h1>
              </div>
              <div class="px-5 md:px-10 py-4 md:py-10">
                <div>
                  <specialOffers></specialOffers>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="pt-16 md:pt-20">
        <div class="text-center text-cyan-800">
          <kinesis-container>
            <kinesis-element :strength="150">
              <img class="w-full h-52 md:h-full" src="../../public/banner2.jpg" alt="">
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>
      <div class="relative -top-36 sm:-top-32 md:-top-56 lg:-top-72 text-center">
        <div class="text-center font-extrabold text-sm md:text-3xl font-mono text-black px-10 md:px-28">
          <h1>"Ketika Saya Memandang ke Laut, Saya Tidak Melihat Gelombang, Saya Melihat Rahasia."</h1>
          <h2 class="pt-2 md:pt-4"> - Kahlil Gibran - </h2>
        </div>
      </div>
      <div class="pb-0 md:pb-10 -mb-5 md:-mb-0 -mt-14 sm:-mt-10 md:-mt-0">
        <reviewCompt></reviewCompt>
      </div>
    </div>
    <div class="relative -bottom-full w-full -mt-12 md:-mt-0">
      <div class="pt-2 md:pt-10">
        <footerCompt></footerCompt>
      </div>
    </div>
  </div>
</template>

<script>
import navCompt from '@/components/navCompt.vue'
import footerCompt from '@/components/footerCompt.vue'
import specialOffers from '@/components/specialOffers.vue'
import { KinesisContainer, KinesisElement } from 'vue-kinesis'
import reviewCompt from "@/components/reviewCompt.vue";

export default {
  name: "HomeView",
  components: {
    navCompt,
    footerCompt,
    specialOffers,
    KinesisContainer,
    KinesisElement,
    reviewCompt
  }
}
</script>

<style scoped>
@import "auto-typer-vue3/dist/style.css";
</style>