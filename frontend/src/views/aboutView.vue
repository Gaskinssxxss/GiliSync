<template>
    <div>
        <div>
            <navCompt class="bg-white">

            </navCompt>
        </div>
        <div class="mt-36 sm:mt-44 md:mt-56 lg:mt-60">
            <div class="pb-20">
                <h1 class="text-center font-sans text-xl md:text-2xl font-bold pb-4 text-cyan-600">Matahari
                    Menyinari
                    surga kecil ini
                    sepanjang
                    waktu</h1>
                <p class="text-center px-14 sm:px-24 md:px-40 lg:px-52 text-sm md:text-base">Gili Air , Destinasi Wisata
                    yang Tenang dan Memukau,
                    tempat terasik untuk
                    bersantai,
                    berkeliling pulau
                    dengan bersepeda, menyelami bawah lautnya adalah hal terindah untuk dinikmati</p>
            </div>
            <about class="px-4 md:px-20 pb-5 md:pb-20">

            </about>
        </div>
        <div>
            <footerCompt>

            </footerCompt>
        </div>
    </div>
</template>

<script>
import navCompt from "@/components/navCompt.vue";
import about from "../components/aboutCompt.vue"
import footerCompt from "@/components/footerCompt.vue";

export default {
    components: {
        about,
        navCompt,
        footerCompt
    }
}
</script>