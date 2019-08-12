
<template>
  <div class="topnav navbar">
    <vue-typed-js :strings="['DELTAHACKS VI']" :showCursor="false" style="padding-left: 8%;">
      <p class="typing" ></p>
    </vue-typed-js>
    <a class="active" v-scroll-to="'#example'">ABOUT</a>
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: rgba(255,255,255,0.4);
  border-bottom: 1px solid rgba(225,225,225,0.5);
  z-index: 1000;
}

/* Add a black background color to the top navigation */
.topnav {
  overflow: hidden;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: right;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 15px;
  margin-right: 10px;
}

/* Change the color of links on hover */
.topnav a:hover {
  background: rgba(255,255,255, 0.2);
  text-shadow: 0 1px 5px rgba(0,0,0,0.15);
}



/* Add a color to the active/current link */
.topnav a.active {
  background-color:#49ad63;
	-moz-border-radius:422px;
	-webkit-border-radius:42px;
	border-radius:42px;
	border:1px solid #2e6934;
	display:inline-block;
	cursor:pointer;
	color:#5fb9c9;
  padding: 8px 12px;
  margin-top: 5px;
}
</style>
