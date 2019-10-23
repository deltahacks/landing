<template>
  <div id="app">
    <navigation />
    <router-view />
  </div>
</template>

<script>
import Navigation from './components/Navbar2.vue';

export default {
  components: {
    Navigation,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600,800&display=swap');

body {
  margin: 0 !important;
}
#app {
  font-family: Montserrat;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@media screen and (max-width: 720px) {
  body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
}
/* #nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>