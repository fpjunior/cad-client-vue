<template>
  <v-container>
    <h1>Home</h1>
    <v-btn color="primary" to="/products">Manage Products</v-btn>
    <v-btn color="primary" to="/clients">Manage Clients</v-btn>
    <v-btn color="primary" to="/associate">Associate Products to Clients</v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'HomeDefault'
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}
</style>
