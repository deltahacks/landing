
<template>
  <div class="topnav navbar">
    <vue-typed-js  :strings="['DELTA']" :showCursor="true" :typeSpeed="100" style="position: fixed; padding-left 20px; left: 50px; top: 0.5px; color: #5fb9c9; font-family: 'Montserrat SemiBold', sans-serif;">
        <p class="typing"></p>  
    </vue-typed-js>
    <vue-typed-js :strings="['HACKS VI']" :showCursor="false" :typeSpeed="100" :startDelay="600" style=" position: fixed; padding-left 20px; left: 102px; color: #5fb9c9; font-family: 'Montserrat', sans-serif;">
        <p class="typing"></p>  
    </vue-typed-js>
    <a href="#proj" id="proj">DH5 PROJECTS</a>
    <a href="#about" id="contact">CONTACT</a>
    <a href="#contact" @scroll="handleSCroll" id="faq">FAQ</a>
    <a href="#news" id="recap">RECAP</a>
    <a v-scroll-to="'#example'" id="about" class="active">ABOUT</a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',
  components: {},
  data: {
    scrollPosition: 0,
  },
  methods: {
      handleSCroll(event: any) {
        let header = document.querySelector('#about');
        if (window.scrollY > 0) {
          header = document.querySelector('#recap');
          if (header != null) {header.classList.remove('active'); }
          header = document.querySelector('#about');
          if (header != null ) {header.classList.add('active'); }
        }
        if (window.scrollY > 50) {
          header = document.querySelector('#faq');
          if (header != null ) {header.classList.remove('active'); }
          header = document.querySelector('#about');
          if (header != null ) {header.classList.remove('active'); }
          header = document.querySelector('#recap');
          if (header != null ) {header.classList.add('active'); }
        }
        if (window.scrollY > 100) {
          header = document.querySelector('#contact');
          if (header != null ) {header.classList.remove('active'); }
          header = document.querySelector('#recap');
          if (header != null ) {header.classList.remove('active'); }
          header = document.querySelector('#faq');
          if (header != null ) {header.classList.add('active'); }
        }
        if (window.scrollY > 150) {
          header = document.querySelector('#proj');
          if (header != null ) {header.classList.remove('active'); }
          header = document.querySelector('#faq');
          if (header != null ) {header.classList.remove('active'); }
          header = document.querySelector('#contact');
          if (header != null ) {header.classList.add('active'); }
        }
        if (window.scrollY > 200) {
          header = document.querySelector('#contact');
          if (header != null ) {header.classList.remove('active'); }
          header = document.querySelector('#proj');
          if (header != null ) {header.classList.add('active'); }
        }
      },
    },
    created() {
      window.addEventListener('scroll', this.handleSCroll);

    },
    destroyed() {
      window.removeEventListener('scroll', this.handleSCroll);
    },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
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
