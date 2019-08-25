
<template>
  <div class="topnav navbar" :class="{ 'navbar-scrolled': scrolled }">
    <img
      src="../assets/logolarge.png"
      alt
      style="float: left; width: 1.5%; padding: 14px 55px;"
    />
    <vue-typed-js
      :strings="['DeltaHacks VI']"
      :showCursor="false"
      :typeSpeed="100"
      class="branding"
    >
      <p class="typing"></p>
    </vue-typed-js>
    <a v-scroll-to="'#example'" @scroll="handleScroll" id="proj" class="browser"
      >DH5 PROJECTS</a
    >
    <a
      v-scroll-to="'#example'"
      @scroll="handleScroll"
      id="contact"
      class="browser"
      >CONTACT</a
    >
    <a v-scroll-to="'#example'" @scroll="handleScroll" id="faq" class="browser"
      >FAQ</a
    >
    <a
      v-scroll-to="'#example'"
      @scroll="handleScroll"
      id="recap"
      class="browser"
      >RECAP</a
    >
    <a
      v-scroll-to="'#example'"
      @scroll="handleScroll"
      id="about"
      class="active browser"
      >ABOUT</a
    >
    <div class="dropdown mobile">
      <button class="dropbtn mobile">
        <img
          src="../assets/hamburger.png"
          alt
          style="height: 20px; width: 20px;"
        />
      </button>
      <div class="dropdown-content mobile" style="right:0;">
        <a
          v-scroll-to="'#example'"
          @scroll="handleScroll"
          id="aboutDrop"
          class="active browser"
          >ABOUT</a
        >
        <a
          v-scroll-to="'#example'"
          @scroll="handleScroll"
          id="recapDrop"
          class="browser"
          >RECAP</a
        >
        <a
          v-scroll-to="'#example'"
          @scroll="handleScroll"
          id="faqDrop"
          class="browser"
          >FAQ</a
        >
        <a
          v-scroll-to="'#example'"
          @scroll="handleScroll"
          id="contactDrop"
          class="browser"
          >CONTACT</a
        >
        <a
          v-scroll-to="'#example'"
          @scroll="handleScroll"
          id="projDrop"
          class="browser"
          >DH5 PROJECTS</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navigation',
  components: {},
  data() {
    return {
      show: true,
      scrolled: false,
    };
  },
  methods: {
    pickActive(element: string) {
      const divs = [
        '#about',
        '#recap',
        '#faq',
        '#contact',
        '#proj',
        '#aboutDrop',
        '#recapDrop',
        '#faqDrop',
        '#contactDrop',
        '#projDrop',
      ]; // tslint:disable-line
      for (const d of divs) {
        const header = document.querySelector(d); // tslint:disable-line
        if (header != null) {
          header.classList.remove('active');
        }
      }
      let header = document.querySelector(element);
      if (header != null) {
        header.classList.add('active');
      }
      header = document.querySelector(element + 'Drop');
      if (header != null) {
        header.classList.add('active');
      }
    },
    handleScroll() {
      if (window.scrollY > 0) {
        this.scrolled = true;
      } else {
        this.scrolled = false;
      }

      if (window.scrollY >= 0) {
        this.pickActive('#about');
      }
      if (window.scrollY > 50) {
        this.pickActive('#recap');
      }
      if (window.scrollY > 100) {
        this.pickActive('#faq');
      }
      if (window.scrollY > 150) {
        this.pickActive('#contact');
      }
      if (window.scrollY > 200) {
        this.pickActive('#proj');
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');

/* Add a black background color to the top navigation */
.topnav {
  overflow: visible;
  font-family: 'Montserrat';
}

.branding {
  position: fixed;
  padding-left: 20px;
  left: 70px;
  top: -0.5px;
  color: #5fb9c9;
}

.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 1000;
  font-weight: 600;
  color: white;
  transition-property: background-color, border-bottom;
  transition-duration: 0.2s;
}

.navbar.navbar-scrolled {
  background-color: rgba(255, 255, 255);
  border-bottom: 1px solid rgba(225, 225, 225, 0.5);
  color: black;
}

.browser {
  cursor: pointer;
}

/* Style the links inside the navigation bar */
.topnav a {
  float: right;
  /* color: black; */
  text-align: center;
  padding: 16px 5px;
  text-decoration: none;
  font-size: 15px;
  margin-right: 10px;
  font-family: 'Montserrat';
  transition: opacity 0.2s;
}

/* Change the color of links on hover */
.topnav a:hover {
  /* background: rgba(255, 255, 255, 0.2);
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  -moz-border-radius: 422px;
  -webkit-border-radius: 42px;
  border-radius: 42px; */
  opacity: 0.6;
}

/* Add a color to the active/current link */
.topnav a.active {
  cursor: pointer;
  color: #5fb9c9;
  -moz-border-radius: 422px;
  -webkit-border-radius: 42px;
  border-radius: 42px;
}

@media only screen and (max-width: 700px) {
  .browser {
    display: none;
  }
}

@media only screen and (min-width: 701px) {
  .mobile {
    display: none;
  }
}

.dropbtn {
  background-color: transparent;
  /* color: black; */
  padding: 13px;
  font-size: 16px;
  border: none;
  font-family: 'Montserrat';
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: block;
  padding-right: 30px;
  float: right;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  visibility: hidden;
  position: absolute;
  background-color: rgba(225, 225, 225, 0.5);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-bottom-left-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px;
  transition: visibility 0s, opacity 0.5s linear;
  opacity: 0;
  width: 98vw;
}

/* Links inside the dropdown */
.dropdown-content a {
  /* color: black; */
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  float: none;
  margin-right: 0px;
  width: 30%;
  margin-left: 35%;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  visibility: visible;
  opacity: 1;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.heighter {
  height: 200px;
}

#proj {
  margin-right: 50px;
}
</style>
