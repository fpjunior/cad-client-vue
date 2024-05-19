import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';  // Adicione esta linha

const app = createApp(App);

app.use(router);
app.use(vuetify);  // Adicione esta linha

app.mount('#app');
