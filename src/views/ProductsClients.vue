<template>
  <div>
    <h1>Manage Clients</h1>
    <ClientForm @add-client="addClient"/>
    <ClientList :clients="clients" @toggle-active="toggleActive"/>
  </div>
</template>

<script>
import ClientForm from '../components/ClientForm.vue';
import ClientList from '../components/ClientList.vue';

export default {
  name: 'ProductsClients',
  components: {
    ClientForm,
    ClientList
  },
  data() {
    return {
      clients: []
    };
  },
  methods: {
    addClient(client) {
      this.clients.push(client);
    },
    toggleActive(client) {
      const index = this.clients.findIndex(c => c.document === client.document);
      if (index !== -1) {
        this.clients[index].active = !this.clients[index].active;
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
