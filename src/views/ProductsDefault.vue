<template>
  <div class="products">
    <h1>Manage Products</h1>
    <ProductForm @add-product="addProduct"/>
    <ProductList :products="products" @toggle-active="toggleActive"/>
  </div>
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
.products {
  padding: 20px;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
}

button:hover {
  background-color: #369b74;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin: 10px 0 5px;
}

input, select {
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
}
</style>
