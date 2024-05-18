<template>
  <div>
    <h1>Associate Products to Clients</h1>
    <AssociationForm :clients="clients" :products="products" @associate-products="associateProducts"/>
  </div>
</template>

<script>
import AssociationForm from '../components/AssociationForm.vue';

export default {
  name: 'ProductClientAssociation',
  components: {
    AssociationForm
  },
  data() {
    return {
      clients: [],
      products: []
    };
  },
  methods: {
    associateProducts(association) {
      const clientIndex = this.clients.findIndex(c => c.document === association.client);
      if (clientIndex !== -1) {
        this.clients[clientIndex].products = association.products;
      }
    }
  }
};
</script>

<style scoped>
h1 {
  color: #2c3e50;
}
</style>
