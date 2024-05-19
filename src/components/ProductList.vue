<template>
  <div class="p-m-4">
    <h2 class="text-center">Product List</h2>
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="active" header="Active" :body="activeTemplate"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="price" header="Price"></Column>
      <Column header="Actions" :body="actionTemplate"></Column>
    </DataTable>
  </div>
</template>

<script>
import { DataTable } from 'primevue/datatable';
import { Column } from 'primevue/column';
// import Button from 'primevue/button';
import { fetchProducts } from '../services/apiService';

export default {
  name: 'ProductList',
  components: {
    DataTable,
    Column,
    // Button
  },
  data() {
    return {
      products: []
    };
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      fetchProducts().subscribe(
        data => {
          console.log('Fetched products:', data);
          this.products = data;
          console.log('Products in state:', this.products);
        },
        error => {
          console.error('Error fetching products:', error);
        }
      );
    },
    activeTemplate(slotProps) {
      const active = slotProps.data.active;
      if (typeof active === 'object') {
        return active.label;
      }
      return active ? 'Yes' : 'No';
    },
    actionTemplate(slotProps) {
      return `
        <Button label="Edit" icon="pi pi-pencil" class="p-button-rounded p-button-text p-mr-2" @click="editProduct(${slotProps.data.id})" />
      `;
    },
    editProduct(id) {
      alert(`Edit product with ID: ${id}`);
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
