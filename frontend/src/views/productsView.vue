<template>
    <div class="">
        <div class="">
            <div class=" pb-28">
                <navCompt class="bg-white"></navCompt>
            </div>
            <div class="">
                <div class="px-2 md:px-4 lg:px-8 xl:px-32">
                    <div class=" bg-opacity-40 rounded-lg">
                        <productCompt></productCompt>
                    </div>
                </div>
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
import productCompt from '@/components/productsTu.vue';
import navCompt from "@/components/navCompt.vue";
import footerCompt from '@/components/footerCompt.vue'
// import searchCompt from '@/components/searchCompt.vue';

export default {
    name: 'productViews',
    components: {
        productCompt,
        navCompt,
        footerCompt,
        // searchCompt

    }
}
</script>