<template>
  <div class="home">
    <h1>Home</h1>
    <nav>
      <router-link to="/products">Manage Products</router-link>
      <router-link to="/clients">Manage Clients</router-link>
      <router-link to="/associate">Associate Products to Clients</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HomeDefault'
};
</script>

<style scoped>
.home {
  text-align: center;
  margin-top: 50px;
}

nav {
  margin: 20px 0;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
}

nav a:hover {
  text-decoration: underline;
}

h1 {
  color: #2c3e50;
}
</style>
