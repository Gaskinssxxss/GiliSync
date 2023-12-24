<template>
    <div>
        <div>
            <navCompt>

            </navCompt>
        </div>

        <div>
            <div class="min-h-screen flex items-center justify-center ">
                <div class=" p-8 font-sans rounded shadow-xl w-full sm:w-96 bg-white">
                    <form @submit.prevent="submit">
                        <h1 class="text-2xl font-bold pb-5">Anda Lupa Password?</h1>
                        <p class="pb-5">Untuk melakukan pergantian password saat ini dapat dilakukan dengan menghubungin
                            admin dari Gili
                            Sync di link whastapp dibawah ini.
                        </p>
                        <a class="text-lime-500" href="https://wa.link/kx3ctx">https://wa.link/kx3ctx</a>
                    </form>
                </div>
            </div>
        </div>

        <div>
            <footerCompt>

            </footerCompt>
        </div>
    </div>
</template>

<script>
import navCompt from './navCompt.vue';
import footerCompt from './footerCompt.vue';

export default {
    components: {
        navCompt,
        footerCompt
    }
}
</script>