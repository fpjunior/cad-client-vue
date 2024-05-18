<template>
  <div>
    <h2>New Client</h2>
    <form @submit.prevent="addClient">
      <div>
        <label for="name">Name:</label>
        <input type="text" v-model="name" required>
      </div>
      <div>
        <label for="document">Document:</label>
        <input type="text" v-model="document" required>
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="text" v-model="phone" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required>
      </div>
      <div>
        <label for="active">Active:</label>
        <select v-model="active" required>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <button type="submit">Add Client</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ClientForm',
  data() {
    return {
      name: '',
      document: '',
      phone: '',
      email: '',
      active: 'true'
    };
  },
  methods: {
    addClient() {
      const client = {
        name: this.name,
        document: this.document,
        phone: this.phone,
        email: this.email,
        active: this.active === 'true'
      };
      // Emit an event to the parent component to add the client
      this.$emit('add-client', client);
      this.name = '';
      this.document = '';
      this.phone = '';
      this.email = '';
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
