
<template>
  <div class="topnav navbar">
    <p style="float: left; padding-left: 8%;">DELTAHCACKS VI</p>
    <a class="active" href="#home">ABOUT</a>
    <a href="#news">RECAP</a>
    <a href="#contact">FAQ</a>
    <a href="#about">CONTACT</a>
    <a href="#proj">DH5 PROJECTS</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',
  components: {},
});
</script>

<style scoped>

.navbar {
  overflow: hidden;
  background-color: #333;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
}

/* Add a black background color to the top navigation */
.topnav {
  background-color: transparent;
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: right;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #4CAF50;
  color: white;
}
</style>
