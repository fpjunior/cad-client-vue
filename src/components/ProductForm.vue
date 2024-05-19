<template>
  <div class="form-container p-m-4">
    <h2 class="text-center">Add Product</h2>
    <form @submit.prevent="submitProduct">
      <div class="p-field p-grid">
        <label for="name" class="p-col-12 p-md-2">Name</label>
        <div class="p-col-12 p-md-10">
          <InputText v-model="name" id="name" class="w-full" required />
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="description" class="p-col-12 p-md-2">Description</label>
        <div class="p-col-12 p-md-10">
          <Textarea v-model="description" id="description" class="w-full" rows="4" required />
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="price" class="p-col-12 p-md-2">Price</label>
        <div class="p-col-12 p-md-10">
          <InputNumber v-model="price" id="price" class="w-full" mode="currency" currency="USD" locale="en-US" required />
        </div>
      </div>
      <div class="p-field p-grid">
        <label for="active" class="p-col-12 p-md-2">Active</label>
        <div class="p-col-12 p-md-10">
          <SelectButton v-model="active" :options="activeOptions" class="w-full" />
        </div>
      </div>
      <div class="p-field p-grid">
        <div class="p-col-12 p-md-10 p-offset-md-2">
          <Button label="Save" icon="pi pi-save" type="submit" class="p-mr-2" />
          <Button label="View Products" icon="pi pi-list" class="p-button-secondary" @click="viewProducts" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import InputNumber from 'primevue/inputnumber';
import SelectButton from 'primevue/selectbutton';
import Button from 'primevue/button';
import { addProduct } from '../services/apiService';

export default {
  name: 'ProductForm',
  components: {
    InputText,
    Textarea,
    InputNumber,
    SelectButton,
    Button,
  },
  data() {
    return {
      name: '',
      description: '',
      price: 0,
      active: true,
      activeOptions: [
        { label: 'Yes', value: true },
        { label: 'No', value: false },
      ],
    };
  },
  methods: {
    submitProduct() {
      const product = {
        name: this.name,
        description: this.description,
        price: this.price,
        active: this.active,
      };
      addProduct(product).subscribe(() => {
        this.$emit('product-saved');
        this.name = '';
        this.description = '';
        this.price = 0;
        this.active = true;
      });
    },
    viewProducts() {
      this.$router.push('/products/list');
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.w-full {
  width: 100%;
}
</style>
