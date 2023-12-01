<template>
    <div>
        <div class="flex items-center">
            <div class="py-5">
                <div class="flex border-2 rounded">
                    <input type="text" class="px-4 w-80" placeholder="Search...">
                    <button class="flex items-center justify-center px-4 border-l">
                        <svg class="w-4 h-4 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24">
                            <path
                                d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="px-5 relative flex items-center">
                <button @click="bagShow">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-8 h-8 text-cyan-800">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button>
                <div class="">
                    <div v-show="open" class="w-52 h-60 absolute top-0 left-20 bg-white border border-gray-300 shadow-md">
                        <div class="text-center py-2 space-y-16">
                            <div class="px-3">
                                <div>
                                    <h1>PRODUCT LIST</h1>
                                </div>
                                <div class="text-xs space-y-5 pt-4">
                                    <div class="flex justify-between">
                                        <div>
                                            {gambar}
                                        </div>
                                        <div>
                                            {total}
                                        </div>
                                        <div>
                                            {harga}
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div class="flex justify-between">
                                        <div>
                                            {gambar}
                                        </div>
                                        <div>
                                            {total}
                                        </div>
                                        <div>
                                            {harga}
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div class="flex justify-between">
                                        <div>
                                            {gambar}
                                        </div>
                                        <div>
                                            {total}
                                        </div>
                                        <div>
                                            {harga}
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor" class="w-4 h-4">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div class="px-5">
                                <button class="bg-orange-600 hover:bg-orange-700 rounded-sm w-full py-1 text-sm text-white">
                                    checkout
                                </button>
                            </div>
                        </div>
                        <button @click="bagShow" class="absolute top-0 right-0 p-1">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            open: false
        }
    },
    methods: {
        bagShow() {
            this.open = !this.open
        }
    }
}
</script>
  