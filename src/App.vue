<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-primary">
      <router-link to="/" class="navbar-brand" style="color:yellow">Assessment Vue.js</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link" style="color:yellow">Lista de lidos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link" style="color:yellow">Adicionar conteúdo lido</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <h2>Lista de leituras concluidas</h2>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: "app"
  };
</script>

<style scoped>
  .container h2 {
    text-align: center;
    margin: 55px auto;
  }
  
  
</style>
