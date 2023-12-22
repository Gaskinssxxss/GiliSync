import { createApp } from "vue";
import App from "./App.vue";

import router from "./services/router";
import store from "./services/store";

import VueToast from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import './assets/tailwind.css'

import VueNumberInput from '@chenfengyuan/vue-number-input';
import VueCountdown from '@chenfengyuan/vue-countdown';

import VueKinesis from "vue-kinesis";

createApp(App)
    .use(router)
    .use(VueToast)
    .use(store)
    .use(VueKinesis)
    .component(VueNumberInput.name, VueNumberInput)
    .component(VueCountdown.name, VueCountdown)
    .mount("#app");
