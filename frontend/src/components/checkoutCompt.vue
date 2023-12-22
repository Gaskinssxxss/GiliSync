<template>
    <div>
        <div>
            <navCompt class="bg-white"></navCompt>
        </div>
        <div class="relative top-20 md:top-36 px-5">
            <div
                class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-left md:text-justify px-2 md:px-20 text-sm md:text-base">
                <div v-for="checkout in userCheckoutData" :key="checkout._id">
                    <p>{{ checkout.username }}</p>
                    <div v-for="item in checkout.checkoutItems" :key="item._id">
                        <div class="pt-10 md:pt-2">
                            <p>Produk : {{ item.productName }}</p>
                            <p>Quantity : {{ item.ProductQuantity }}</p>
                            <p>Price : {{ item.ProductPrice
                            }}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Status : {{ checkoutStatus }}</p>
                </div>
            </div>
            <div class="pt-20">
                <div>
                    <p>Total Payment: ${{ totalPayment }}</p>
                </div>
                <div>
                    <div>
                        From :
                        <h1>
                            Nama Rekening : {{ userLog.namaRekening }}
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Nama Bank : {{ userLog.namaBank }}
                        </h1>
                    </div>
                    <div>
                        Nomor Rekening : {{ userLog.nomorRekening }}
                    </div>
                </div>
                <div>
                    To :
                    <div>
                        <h1>
                            Nama Rekening Tujuan : HailLucy
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Nama Bank Tujuan : Bankin
                        </h1>
                    </div>
                    <div>
                        <h1>
                            Nomor Rekening Tujuan : 131313131
                        </h1>
                    </div>
                </div>
            </div>
            <div>
                <vue-countdown :time="60 * 60 * 1000" :transform="transformSlotProps" v-slot="{ minutes, seconds }">
                    Time Remaining：{{ minutes }} minutes, {{ seconds }} seconds.
                </vue-countdown>
            </div>
        </div>
    </div>
</template>
  
<script>
import Api from '@/services/api';
import navCompt from './navCompt.vue';

export default {
    components: {
        navCompt
    },
    data() {
        return {
            user: {},
            userCheckoutData: [],
            checkoutStatus: '',
        };
    },
    created() {
        this.getUserData();
        this.getCheckoutData();
    },
    computed: {
        totalPayment() {
            let total = 0;
            this.userCheckoutData.forEach(checkout => {
                checkout.checkoutItems.forEach(item => {
                    total += item.ProductPrice;
                });
            });
            return total.toFixed(2); // Mengembalikan total dengan 2 desimal
        },
        userLog() {
            return this.$store.state.user;
        }
    },
    mounted() {
        this.getCheckoutData();
        this.getCheckoutStatus();
    },
    methods: {
        transformSlotProps(props) {
            const formattedProps = {};

            Object.entries(props).forEach(([key, value]) => {
                formattedProps[key] = value < 10 ? `0${value}` : String(value);
            });

            return formattedProps;
        },
        async getUserData() {
            try {
                const response = await Api.get('/users'); // Ganti dengan endpoint yang sesuai untuk mendapatkan data pengguna yang masuk
                this.user = response.data.data;
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        },
        async getCheckoutData() {
            try {
                const response = await Api.get('/checkout');
                this.userCheckoutData = response.data.data.filter(datas => datas.name === this.user.username);
            } catch (error) {
                console.error('Error fetching reserved seats:', error);
            }
        },
        async getCheckoutStatus() {
            try {
                const response = await Api.get('/user/checkout/status');
                this.checkoutStatus = response.data.data.status;
            } catch (error) {
                console.error('Error fetching user checkout status:', error);
            }
        },

    },
};
</script>
  