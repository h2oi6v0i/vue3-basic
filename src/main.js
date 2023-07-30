import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);

// app.component('Appcard', AppCard); // 컴포넌트 전역 등록
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
