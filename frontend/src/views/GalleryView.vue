<template>
    <div>
        <div>
            <navCompt class="bg-white">

            </navCompt>
        </div>

        <div>
            <galleryCompt>

            </galleryCompt>
        </div>

        <div class="-mt-20">
            <footerCompt>

            </footerCompt>
        </div>
    </div>
</template>

<script>
import navCompt from '@/components/navCompt.vue';
import galleryCompt from '@/components/galleryCompt.vue';
import footerCompt from '@/components/footerCompt.vue';

export default {
    components: {
        galleryCompt,
        navCompt,
        footerCompt
    }
}
</script>