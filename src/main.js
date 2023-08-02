import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);

// app.component('Appcard', AppCard); // 컴포넌트 전역 등록

/**
 * 모든 컴포넌트에 주입 가능
 * 모든 컴포넌트에서 사용하는 라이브러리가 있다면 provide 하는 것도 좋은 방법!
 */
app.provide('app-message', 'app message입니다!');
app.mount('#app');

import 'bootstrap/dist/js/bootstrap.js';
