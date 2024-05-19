import { createRouter, createWebHistory } from 'vue-router';
import HomeDefault from '../views/HomeDefault.vue';
import ProductsDefault from '../views/ProductsDefault.vue';
import ProductsClients from '../views/ProductsClients.vue';
import ProductClientAssociation from '../views/ProductClientAssociation.vue';
import ProductForm from '../components/ProductForm.vue';
import ProductList from '../components/ProductList.vue';

const routes = [
  { path: '/', name: 'HomeDefault', component: HomeDefault },
  { path: '/products', name: 'ProductsDefault', component: ProductsDefault },
  { path: '/clients', name: 'ProductsClients', component: ProductsClients },
  { path: '/associate', name: 'ProductClientAssociation', component: ProductClientAssociation },
  { path: '/products/add', name: 'ProductForm', component: ProductForm },
  { path: '/products/list', name: 'ProductList', component: ProductList },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
