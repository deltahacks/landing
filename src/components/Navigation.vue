
<template>
  <div class="topnav navbar" :class="{ 'navbar-scrolled': scrolled }">
    <img
      src="../assets/logolarge.png"
      alt
      style="float: left; width: 22px; padding: 16px 30px;"
    />
    <vue-typed-js
      :strings="['DeltaHacks VI']"
      :showCursor="false"
      :typeSpeed="10"
      class="branding"
    >
      <p class="typing"></p>
    </vue-typed-js>
    <a
      v-scroll-to="'#footer'"
      @scroll="handleScroll"
      id="contact"
      class="browser"
      >CONTACT</a
    >
    <a
      v-scroll-to="'#sponsor'"
      @scroll="handleScroll"
      id="sponsors"
      class="browser"
      >SPONSORS</a
    >
    <a v-scroll-to="'#faq1'" @scroll="handleScroll" id="faq" class="browser"
      >FAQ</a
    >
    <a
      v-scroll-to="'#blurb-2'"
      @scroll="handleScroll"
      id="about"
      class="browser"
      >ABOUT</a
    >
    <div class="dropdown mobile">
      <button class="dropbtn mobile" @click="show = !show">
        <img
          src="../assets/hamburger.png"
          alt
          style="height: 20px; width: 20px;"
          :class="{ invert: !scrolled }"
        />
      </button>
      <transition name="fade" mode="out-in">
        <div class="dropdown-content mobile" style="right:0;" v-show="show">
          <a
            v-scroll-to="'#aboutScroll'"
            @scroll="handleScroll"
            id="aboutDrop"
            class="active browser"
            >ABOUT</a
          >
          <a
            v-scroll-to="'#faqScroll'"
            @scroll="handleScroll"
            id="faqDrop"
            class="browser"
            >FAQ</a
          >
          <a
            v-scroll-to="'#sponsor'"
            @scroll="handleScroll"
            id="sponsorsDrop"
            class="browser"
            >SPONSORS</a
          >
          <a
            v-scroll-to="'#footer'"
            @scroll="handleScroll"
            id="contactDrop"
            class="browser"
            >CONTACT</a
          >
        </div>
      </transition>
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
      show: false,
      scrolled: false,
    };
  },
  methods: {
    pickActive(element: string) {
      const divs = [
        '#about',
        '#sponsors',
        '#faq',
        '#contact',
        '#aboutDrop',
        '#sponsorsDrop',
        '#faqDrop',
        '#contactDrop',
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
      var div3 = document.querySelector("#footer").offsetTop;
      console.log(window.scrollY)
      console.log(div3)
      var vh = screen.height
      console.log(vh)
      var aboutPos = document.querySelector("#blurb-2").offsetTop - 250
      var faqPos = document.querySelector("#faq1").offsetTop - 250
      var sponsorPos = document.querySelector("#sponsor").offsetTop - 250
      var footerPos = document.querySelector("#footer").offsetTop - (vh * 0.5)
      if (window.scrollY >= aboutPos) {
        this.pickActive('#about');
      }
      if (window.scrollY > faqPos) {
        this.pickActive('#faq');
      }
      if (window.scrollY > sponsorPos) {
        this.pickActive('#sponsors');
      }
      if (window.scrollY > footerPos) {
        this.pickActive('#contact');
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
  left: 45px;
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
  transition: color 0.1s;
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
  .mobile {
    color: black;
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
  /* visibility: hidden; */
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  /* border-bottom-left-radius: 10px 10px;
  border-bottom-right-radius: 10px 10px; */
  /* transition: visibility 0s, opacity 0.5s linear;
  opacity: 0; */
  width: 110vw;
}

/* Links inside the dropdown */
.dropdown-content a {
  /* color: black; */
  padding: 12px 25px;
  text-decoration: none;
  display: block;
  float: none;
  margin-right: 0px;
  width: 30%;
  margin-left: 35%;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #dddd;
  -moz-border-radius: 422px;
  -webkit-border-radius: 42px;
  border-radius: 42px;
  visibility: visible;
  opacity: 1;
}

/* Show the dropdown menu on hover */
/* .dropdown:hover .dropdown-content{
  visibility: visible;
  opacity: 1;
} */

/* Change the background color of the dropdown button when the dropdown content is shown */
#contact {
  margin-right: 50px;
}
.invert {
  filter: invert(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
