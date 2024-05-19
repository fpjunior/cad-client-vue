<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-center">Manage Clients</h1>
        <v-card class="pa-4 mb-4">
          <ClientForm @add-client="addClient"/>
        </v-card>
        <v-card class="pa-4">
          <ClientList :clients="clients" @toggle-active="toggleActive"/>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ClientForm from '../components/ClientForm.vue';
import ClientList from '../components/ClientList.vue';
import { fetchClients } from '../services/apiService';

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
  created() {
    this.fetchClients();
  },
  methods: {
    fetchClients() {
      fetchClients().subscribe(data => {
        this.clients = data;
      });
    },
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
  margin-bottom: 20px;
}
</style>
