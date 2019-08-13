
<template>
  <div class="topnav navbar">
    <vue-typed-js :strings="['DELTA']" :showCursor="false" :typeSpeed="100" style="position: fixed; padding-left 20px; left: 50px; top: 0.5px; color: #5fb9c9; font-family: 'Montserrat SemiBold';">
        <p class="typing"></p>  
    </vue-typed-js>
    <vue-typed-js :strings="['HACKS VI']" :showCursor="false" :typeSpeed="100" :startDelay="500" style=" position: fixed; padding-left 20px; left: 102px; color: #5fb9c9; font-family: 'Montserrat';">
        <p class="typing"></p>  
    </vue-typed-js>
    <a href="#news">RECAP</a>
    <a href="#contact">FAQ</a>
    <a href="#about">CONTACT</a>
    <a href="#proj">DH5 PROJECTS</a>
    <a v-scroll-to="'#example'">ABOUT</a>
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
  font-family: 'Montserrat'
}

/* Change the color of links on hover */
.topnav a:hover {
  background: rgba(255,255,255, 0.2);
  text-shadow: 0 1px 5px rgba(0,0,0,0.15);
  -moz-border-radius:422px;
  -webkit-border-radius:42px;
  border-radius:42px;
}



/* Add a color to the active/current link */
.topnav a.active {
	cursor:pointer;
	color:#5fb9c9;
  -moz-border-radius:422px;
  -webkit-border-radius:42px;
  border-radius:42px;
}
</style>
