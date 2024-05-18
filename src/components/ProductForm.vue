<template>
  <div>
    <h2>New Product</h2>
    <form @submit.prevent="addProduct">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" required>
      </div>
      <div>
        <label for="active">Active:</label>
        <select v-model="active" required>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <button type="submit">Add Product</button>
    </form>
  </div>
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
      // Emit an event to the parent component to add the product
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
}
</style>
