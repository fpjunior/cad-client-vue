<template>
    <div>
      <h2>Associate Products to Clients</h2>
      <form @submit.prevent="associateProducts">
        <div>
          <label for="client">Client:</label>
          <select v-model="selectedClient" required>
            <option v-for="client in clients" :key="client.document" :value="client.document">
              {{ client.name }}
            </option>
          </select>
        </div>
        <div>
          <label for="products">Products:</label>
          <div v-for="product in products" :key="product.name">
            <input type="checkbox" :value="product.name" v-model="selectedProducts">
            {{ product.name }}
          </div>
        </div>
        <button type="submit">Associate</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AssociationForm',
    data() {
      return {
        selectedClient: '',
        selectedProducts: []
      };
    },
    props: {
      clients: {
        type: Array,
        required: true
      },
      products: {
        type: Array,
        required: true
      }
    },
    methods: {
      associateProducts() {
        // Emit an event to the parent component to associate products
        this.$emit('associate-products', {
          client: this.selectedClient,
          products: this.selectedProducts
        });
        this.selectedClient = '';
        this.selectedProducts = [];
      }
    }
  };
  </script>
  
  <style scoped>
  h2 {
    color: #2c3e50;
  }
  </style>
  