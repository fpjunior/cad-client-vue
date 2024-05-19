<template>
  <v-card class="pa-4">
    <h2>New Client</h2>
    <v-form @submit.prevent="submitClient">
      <v-text-field v-model="name" label="Name" required></v-text-field>
      <v-text-field v-model="document" label="Document" required></v-text-field>
      <v-text-field v-model="phone" label="Phone" required></v-text-field>
      <v-text-field v-model="email" label="Email" required></v-text-field>
      <v-select v-model="active" :items="['true', 'false']" label="Active" required></v-select>
      <v-btn type="submit" color="primary">Add Client</v-btn>
    </v-form>
  </v-card>
</template>

<script>
import { addClient } from '../services/apiService';

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
    submitClient() {
      const client = {
        name: this.name,
        document: this.document,
        phone: this.phone,
        email: this.email,
        active: this.active === 'true'
      };
      addClient(client).subscribe(() => {
        this.$emit('add-client', client);
        this.resetForm();
      });
    },
    resetForm() {
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
  margin-bottom: 20px;
}
</style>
