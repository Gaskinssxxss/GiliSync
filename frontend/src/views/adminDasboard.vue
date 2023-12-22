<template>
    <div>
        <div>
            <navCompt class="bg-white"></navCompt>
        </div>
        <div class="relative top-32 px-5">
            <div class="grid grid-cols-4 gap-10 text-justify" v-for="user in userData" :key="user._id">
                <div class="bg-white px-4 pt-1 pb-4" v-for="checkout in checkoutData" :key="checkout._id">
                    <div v-if="checkout.username === user.username">
                        <h2>Username :{{ user.username }}</h2>
                        <h2>Nama Rekening : {{ user.namaRekening }}</h2>
                        <h2>Nama Bank : {{ user.namaBank }}</h2>
                        <h2>Nomor Rekening : {{ user.nomorRekening }}</h2>
                        <div v-for="item in checkout.checkoutItems" :key="item._id">
                            <div>
                                <p>Produk : {{ item.productName }}
                                </p>
                                <p>
                                    Banyak Produk : Quantity: {{ item.ProductQuantity }}
                                </p>
                                <p>
                                    Total Pembayaran : Price: {{
                                        item.ProductPrice
                                    }}
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
                // Lakukan sesuatu setelah pembaruan status berhasil
                console.log(`Checkout status updated to ${status}`);
            } catch (error) {
                console.error('Error updating checkout status:', error);
            }
        },
    },
};
</script> 