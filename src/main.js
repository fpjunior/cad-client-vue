/* eslint-disable vue/multi-word-component-names */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/saga-blue/theme.css';  // Tema
import 'primevue/resources/primevue.min.css';           // Componentes base CSS
import 'primeicons/primeicons.css';                     // Ícones

import Button from 'primevue/button';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const app = createApp(App);

app.use(router);
app.use(PrimeVue);

app.component('Button', Button);
app.component('DataTable', DataTable);
app.component('Column', Column);

app.mount('#app');
