<template>
  <v-card class="pa-4">
    <h2>Product List</h2>
    <v-list>
      <v-list-item
        v-for="product in products"
        :key="product.name"
      >
        <v-list-item-content>
          <v-list-item-title>{{ product.name }}</v-list-item-title>
          <v-list-item-subtitle>Active: {{ product.active ? 'Yes' : 'No' }}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="toggleActive(product)" color="primary">Toggle Active</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
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
      this.$emit('toggle-active', product);
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
