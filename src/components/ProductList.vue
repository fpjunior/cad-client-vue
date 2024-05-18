<template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.name">
        {{ product.name }} - Active: {{ product.active ? 'Yes' : 'No' }}
        <button @click="toggleActive(product)">Toggle Active</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductList',
  props: {
    products: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleActive(product) {
      product.active = !product.active;
    }
  }
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
</style>
