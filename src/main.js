import { createApp } from 'vue';
import App from './App.vue';
import "./index.css"
import router from './Router/index.js';
import { createPinia } from 'pinia';

const pinia = createPinia();

createApp(App).use(pinia).use(router).mount('#app');
