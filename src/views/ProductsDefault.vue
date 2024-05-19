<template>
  <div class="p-m-4">
    <h1 class="text-center">Manage Products</h1>
    <Button label="Add Product" icon="pi pi-plus" class="p-m-2" @click="navigate('/products/add')"></Button>
    <Button label="View Products" icon="pi pi-list" class="p-m-2" @click="navigate('/products/list')"></Button>
  </div>
</template>

<script>
export default {
  name: 'ProductsDefault',
  methods: {
    navigate(path) {
      this.$router.push(path);
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
