<template>
  <v-card class="pa-4">
    <h2>New Product</h2>
    <v-form @submit.prevent="addProduct">
      <v-text-field
        v-model="name"
        label="Name"
        required
      ></v-text-field>
      <v-select
        v-model="active"
        :items="['true', 'false']"
        label="Active"
        required
      ></v-select>
      <v-btn type="submit" color="primary">Add Product</v-btn>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'ProductForm',
  data() {
    return {
      name: '',
      active: 'true'
    };
  },
  methods: {
    addProduct() {
      const product = {
        name: this.name,
        active: this.active === 'true'
      };
      this.$emit('add-product', product);
      this.name = '';
      this.active = 'true';
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
