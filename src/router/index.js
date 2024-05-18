import { createRouter, createWebHistory } from 'vue-router';
import HomeDefault from '../views/HomeDefault.vue';
import ProductsDefault from '../views/ProductsDefault.vue';
import ProductsClients from '../views/ProductsClients.vue';
import ProductClientAssociation from '../views/ProductClientAssociation.vue';

const routes = [
  { path: '/', name: 'HomeDefault', component: HomeDefault },
  { path: '/products', name: 'ProductsDefault', component: ProductsDefault },
  { path: '/clients', name: 'ProductsClients', component: ProductsClients },
  { path: '/associate', name: 'ProductClientAssociation', component: ProductClientAssociation },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
