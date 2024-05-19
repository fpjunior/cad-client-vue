<template>
  <div class="p-m-4">
    <h1 class="text-center">Home</h1>
    <Button label="Manage Products" icon="pi pi-check" class="p-m-2" @click="navigate('/products')"></Button>
    <Button label="Manage Clients" icon="pi pi-users" class="p-m-2" @click="navigate('/clients')"></Button>
    <Button label="Associate Products to Clients" icon="pi pi-link" class="p-m-2" @click="navigate('/associate')"></Button>
  </div>
</template>

<script>
export default {
  name: 'HomeDefault',
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
