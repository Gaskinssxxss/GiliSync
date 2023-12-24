<template>
    <div>
        <div>
            <navCompt class="bg-white"></navCompt>
        </div>
    </div>
    <div>
        <div class="pt-40">
            <div v-for="user in userData" :key="user._id">
                <div class="flex justify-center" v-for="checkout in checkoutData" :key="checkout._id">
                    <div class="pb-10" v-if="checkout.username === user.username">
                        <div class="bg-white px-10 md:px-20 py-10">
                            <h2>Username : <span class="text-red-500">
                                    {{ user.username }}
                                </span></h2>
                            <h2>Nama Rekening : <span class="text-lime-600">
                                    {{ user.namaRekening }}
                                </span></h2>
                            <h2>Nama Bank : <span class="text-cyan-500">
                                    {{ user.namaBank }}
                                </span></h2>
                            <h2>Nomor Rekening : <span class="text-orange-500">
                                    {{ user.nomorRekening }}
                                </span></h2>
                            <div v-for="item in checkout.checkoutItems" :key="item._id">
                                <div>
                                    <p>Produk : <span class="text-sky-700">
                                            {{ item.productName }}
                                        </span>
                                    </p>
                                    <p>
                                        Banyak Produk : Quantity: <span class="text-emerald-600">
                                            {{ item.ProductQuantity }}
                                        </span>
                                    </p>
                                    <p>
                                        Total Pembayaran : Price: <span class="text-yellow-500">
                                            {{ item.ProductPrice }}
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div class="pt-5 flex justify-start space-x-5">
                                <div>
                                    <button @click="updateCheckoutStatus(checkout._id, 'success')"
                                        class="bg-lime-500 w-20 py-1 px-2 text-white">Success</button>
                                </div>
                                <div class="">
                                    <button @click="updateCheckoutStatus(checkout._id, 'pending')"
                                        class="bg-red-700 w-20  py-1 px-2 text-white">Pending</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import Api from '@/services/api';
import navCompt from '@/components/navCompt.vue';

export default {
    components: {
        navCompt,
    },
    data() {
        return {
            userData: [],
            checkoutData: [],
        };
    },
    created() {
        this.getAdminDashboardData();
    },
    methods: {
        async getAdminDashboardData() {
            try {
                const response = await Api.get('/admin');
                this.userData = response.data.userData;
                this.checkoutData = response.data.checkoutData;
            } catch (error) {
                console.error('Error fetching admin dashboard data:', error);
            }
        },
        async updateCheckoutStatus(id, status) {
            try {
                await Api.post(`/checkout/${id}/update-status`, { status });
                this.$toast.success("Update succeeded.", { position: "bottom-left", duration: 1000 });
                console.log(`Checkout status updated to ${status}`);
            } catch (error) {
                console.error('Error updating checkout status:', error);
            }
        },
    },
};
</script> 