<template>
  <v-card class="pa-4">
    <h2>Product List</h2>
    <v-list>
      <v-list-item
        v-for="product in products"
        :key="product.id"
      >
        <v-list-item-content>
          <v-list-item-title>{{ product.name }}</v-list-item-title>
          <v-list-item-subtitle>Active: {{ product.active ? 'Yes' : 'No' }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="toggleActive(product)" color="primary">Toggle Active</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import { fetchProducts, updateProduct } from '../services/apiService';

export default {
  name: 'ProductList',
  data() {
    return {
      products: []
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      fetchProducts()
        .subscribe(data => {
          this.products = data;
        });
    },
    toggleActive(product) {
      product.active = !product.active;
      updateProduct(product)
        .subscribe(() => {
          this.fetchProducts();
        });
    }
  }
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}
</style>
