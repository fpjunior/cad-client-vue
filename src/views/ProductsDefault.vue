<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-center">Manage Products</h1>
        <v-card class="pa-4">
          <ProductForm @add-product="addProduct"/>
          <ProductList :products="products" @toggle-active="toggleActive"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ProductForm from '../components/ProductForm.vue';
import ProductList from '../components/ProductList.vue';

export default {
  name: 'ProductsDefault',
  components: {
    ProductForm,
    ProductList
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    addProduct(product) {
      this.products.push(product);
    },
    toggleActive(product) {
      const index = this.products.findIndex(p => p.name === product.name);
      if (index !== -1) {
        this.products[index].active = !this.products[index].active;
      }
    }
  }
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}
</style>
