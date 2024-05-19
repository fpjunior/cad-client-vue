<template>
  <v-card class="pa-4">
    <h2>Client List</h2>
    <v-list>
      <v-list-item v-for="client in clients" :key="client.document">
        <v-list-item-content>
          <v-list-item-title>{{ client.name }}</v-list-item-title>
          <v-list-item-subtitle>
            Document: {{ client.document }} - Active: {{ client.active ? 'Yes' : 'No' }}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click="toggleActive(client)" color="primary">Toggle Active</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  name: 'ClientList',
  props: {
    clients: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleActive(client) {
      this.$emit('toggle-active', client);
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
