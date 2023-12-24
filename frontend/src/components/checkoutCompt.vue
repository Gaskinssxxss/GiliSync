<template>
    <div>
        <div>
            <navCompt class="bg-white"></navCompt>
        </div>
        <div class="mt-32 md:mt-52 px-5 ">
            <div class="text-left md:text-justify px-2 md:px-20 text-sm md:text-base">
                <div v-for="checkout in userCheckoutData" :key="checkout._id">
                    <p class="">{{ checkout.username }}</p>
                    <div v-for="item in checkout.checkoutItems" :key="item._id">
                        <div class="pt-10 md:pt-2 ">
                            <table>
                                <tr>
                                    <td class="px-4" style="border: 1px solid black;">Produk </td>
                                    <td class="px-4" style="border: 1px solid black;"><span class="text-sky-700">{{
                                        item.productName
                                    }}</span></td>
                                </tr>
                                <tr>
                                    <td class="px-4" style="border: 1px solid black;">Quantity </td>
                                    <td class="px-4" style="border: 1px solid black;"><span class="text-emerald-600">{{
                                        item.ProductQuantity }}</span></td>
                                </tr>
                                <tr>
                                    <td class="px-4" style="border: 1px solid black;">Price </td>
                                    <td class="px-4" style="border: 1px solid black;"><span class="text-yellow-500">{{
                                        item.ProductPrice
                                    }}</span></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>

                <div>
                    <table>
                        <tr>
                            <td style="border: 1px solid black; padding-right: 40px;"><span class="pl-4">Status </span></td>
                            <td style="border: 1px solid black; padding-right: 53px;"><span class="text-lime-500 pl-4">{{
                                checkoutStatus
                            }}</span></td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="pt-10 px-2 md:px-20">
                <div class="text-red-600">
                    <table class="mb-10" style="border: 1px solid black;">
                        <tr>
                            <td class="px-4" style="border: 1px solid black;">Total Payment </td>
                            <td class="px-4" style="border: 1px solid black;">${{ totalPayment }}</td>
                        </tr>
                    </table>

                    <table>
                        <tr>
                            <td style="border: 1px solid black;">
                                <h1 class="pl-4">From </h1>
                        <tr>
                            <td class="px-4" style="border: 1px solid black;">Nama Rekening </td>
                            <td class="px-4" style="border: 1px solid black;">{{ userLog.namaRekening }}</td>
                        </tr>
                        <tr>
                            <td class="px-4" style="border: 1px solid black;">Nama Bank </td>
                            <td class="px-4" style="border: 1px solid black;">{{ userLog.namaBank }}</td>
                        </tr>
                        <tr>
                            <td class="px-4" style="border: 1px solid black;">Nomor Rekening </td>
                            <td class="px-4" style="border: 1px solid black;">{{ userLog.nomorRekening }}</td>
                        </tr>
                        </td>
                        </tr>
                    </table>
                </div>
                <div class="pt-10 text-cyan-600">
                    <table>
                        <tr style="border: 1px solid black;">
                            <td>
                                <h1 class="pl-4">From </h1>
                        <tr>
                            <td class="px-4" style="border: 1px solid black;">Nama Rekening Tujuan </td>
                            <td class="px-4" style="border: 1px solid black;">HailLucy</td>
                        </tr>
                        <tr>
                            <td class="px-4" style="border: 1px solid black;">Nama Bank Tujuan </td>
                            <td class="px-4" style="border: 1px solid black;">Bankin</td>
                        </tr>
                        <tr>
                            <td class="px-4" style="border: 1px solid black;">Nomor Rekening Tujuan </td>
                            <td class="px-4" style="border: 1px solid black;">131313131</td>
                        </tr>
                        </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="px-2 md:px-20 pt-10 text-pink-700">
                <vue-countdown :time="60 * 60 * 1000" :transform="transformSlotProps" v-slot="{ minutes, seconds }">
                    Time Remaining：{{ minutes }} minutes, {{ seconds }} seconds.
                </vue-countdown>
            </div>
        </div>
    </div>
    <div class="mt-20 md:mt-0 pt-10 md:pt-20 lg:pt-32">
        <footerCompt>

        </footerCompt>
    </div>
</template>
  
<script>
import Api from '@/services/api';
import navCompt from './navCompt.vue';
import footerCompt from './footerCompt.vue';

export default {
    components: {
        navCompt,
        footerCompt
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
            return total.toFixed(2);
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
                const response = await Api.get('/users');
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
  