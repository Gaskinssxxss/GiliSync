<template>
    <div class="bg-orange-50">
        <div class="">
            <div class="pb-28">
                <navCompt class="bg-orange-50"></navCompt>
            </div>
            <div class="mr-56">
                <div class="flex items-center justify-end">
                    <div class="">
                        <searchCompt>

                        </searchCompt>
                    </div>
                </div>
            </div>
            <div class="">
                <div class="px-48">
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
import productCompt from '@/components/productCompt.vue';
import navCompt from "@/components/navCompt.vue";
import footerCompt from '@/components/footerCompt.vue'
import searchCompt from '@/components/searchCompt.vue';

export default {
    name: 'productViews',
    components: {
        productCompt,
        navCompt,
        footerCompt,
        searchCompt

    }
}
</script>