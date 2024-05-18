<template>
  <div>
    <h2>Client List</h2>
    <ul>
      <li v-for="client in clients" :key="client.document">
        {{ client.name }} - Active: {{ client.active ? 'Yes' : 'No' }}
        <button @click="toggleActive(client)">Toggle Active</button>
      </li>
    </ul>
  </div>
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
      client.active = !client.active;
    }
  }
};
</script>

<style scoped>
h2 {
  color: #2c3e50;
}
</style>
