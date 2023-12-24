<template>
    <div class="p-16">
        <div class="p-8 bg-white shadow mt-24">
            <div class="pb-20">
                <div class="relative">
                    <div
                        class="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>

            <div class="mt-20 text-center border-b pb-12">
                <h1 class="text-4xl font-medium text-gray-700">{{ user.username }}</h1>

                <p class="mt-8 text-gray-500">{{ user.email }}</p>
                <p class="mt-2 text-gray-500">University of Computer Science</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            buka: false
        }
    },
    methods: {
        showing() {
            this.buka = !this.buka

        }
    },
    computed: {
        user() {
            return this.$store.state.user;
        }
    }
}
</script>