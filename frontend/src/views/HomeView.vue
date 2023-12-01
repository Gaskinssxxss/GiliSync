<template>
  <div class="bg-orange-50">
    <div class="">
      <navCompt class="bg-orange-50"></navCompt>
      <div>
        <div class="flex justify-center pt-28">
          <img src="../../public/1.jpg" alt="banner"
            class="w-full sm:w-auto md:w-auto lg:w-auto xl:w-auto 2xl:w-auto rounded-b-7xl">
        </div>
        <div class="px-20 -mt-16 relative">
          <div class="px-20">
            <div class="bg-cyan-700 bg-opacity-70 rounded-2xl shadow-md">
              <div class="bg-orange-50 py-2 rounded-t-2xl">
                <h1 class="text-center text-cyan-800">
                  Special offers - Get % for many package!
                </h1>
              </div>
              <div class="px-10 py-10">
                <div>
                  <specialOffers></specialOffers>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="px-14 sm:px-20 md:px-36 lg:px-40 xl:px-56">
        <div class="relative -bottom-80 sm:bottom-90 md:-bottom-93 lg:-bottom-98 xl:-bottom-105">
          <bannerPaket></bannerPaket>
        </div>
      </div> -->
      <div class="pt-20">
        <div class="py-20 text-center text-white bg-cyan-800 bg-opacity-80">
          <h1>{ Banner } </h1>
          <h1>{ Banner } </h1>
          <h1>{ Banner } </h1>
          <h1>{ Banner } </h1>
        </div>
      </div>
      <div class="bg-orange-50">
        <gridCompt></gridCompt>
      </div>
    </div>
    <div class="relative -bottom-full w-full">
      <div class="pt-10">
        <footerCompt></footerCompt>
      </div>
    </div>
  </div>
</template>

<script>
// import NavigationComp from '@/components/NavigationComp.vue';
// import bannerPaket from '@/components/bannerPaket.vue'
import navCompt from '@/components/navCompt.vue'
import footerCompt from '@/components/footerCompt.vue'
import gridCompt from '@/components/gridCompt.vue'
import specialOffers from '@/components/specialOffers.vue'

export default {
  name: "HomeView",
  components: {
    // bannerPaket,
    navCompt,
    footerCompt,
    gridCompt,
    specialOffers
  }
}
</script>