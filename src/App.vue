<template>
  <div id="app">
    <!-- TITLE -->
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<style lang="scss">
$pokemon-green: #4ec0a6;
$pokemon-red: #fb6e6d;
$pokemon-blue: #58aaf2;
$pokemon-yellow: #fece4a;
$pokemon-purple: #7d548e;
$pokemon-brown: #b3736e;

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
