import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import 'primevue/resources/themes/saga-blue/theme.css';  // Tema PrimeVue
import 'primevue/resources/primevue.min.css';           // CSS PrimeVue
import 'primeicons/primeicons.css';                     // Ícones PrimeIcons

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

// eslint-disable-next-line vue/multi-word-component-names
app.component('Button', Button);

app.mount('#app');
