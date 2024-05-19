<template>
  <div class="p-m-4">
    <h2 class="text-center">Product List</h2>
    <DataTable :value="products" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column field="active" header="Active">
        <template #body="slotProps">
          {{ slotProps.data.active ? 'Yes' : 'No' }}
        </template>
      </Column>
      <Column header="Actions">
        <template #body="slotProps">
          <Button label="Edit" icon="pi pi-pencil" class="p-button-rounded p-button-text p-mr-2" @click="editProduct(slotProps.data)" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
import { DataTable } from 'primevue/datatable';
import { Column } from 'primevue/column';
import { Button } from 'primevue/button';
import { fetchProducts } from '../services/apiService';

export default {
  name: 'ProductList',
  components: {
    DataTable,
    Column,
    Button
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
      fetchProducts().subscribe(data => {
        this.products = data;
      }, error => {
        console.error('Error fetching products:', error);
      });
    },
    editProduct() {
      // Lógica para editar o produto
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
