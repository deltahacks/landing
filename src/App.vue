<template>
  <div id="app">
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
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat-Light.ttf');
  font-weight: 300;
}
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat-Regular.ttf');
}
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat-SemiBold.ttf');
  font-weight: 600;
}
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat-Bold.ttf');
  font-weight: 700;
}
@font-face {
  font-family: 'Montserrat';
  src: url('assets/fonts/Montserrat-ExtraBold.ttf');
  font-weight: 800;
}

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