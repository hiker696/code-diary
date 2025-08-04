import { createApp } from 'vue';

import { createPinia } from 'pinia';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';

const pinia = createPinia();

// createApp(App).mount('#app');
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.mount('#app');