<template>
  <div>
  <div class="test">a</div>
  <div class="nav-container">
    <img class='home' src="../assets/logolarge.png" alt="DH Logo" @click="goHome">
    <a class="mlink" href="https://www.deltahacks.com/">
      <a class="bold">Delta</a>Hacks <a class="bold">7</a>
    </a>
    <a class="link" v-scroll-to="'#blurb-2'" @scroll="handleScroll">
      About
    </a>
    <a class="link" v-scroll-to="'#faq1'" @scroll="handleScroll">
      FAQ
    </a>
    <a class="link" v-scroll-to="'#sponsor'" @scroll="handleScroll">
      Sponsors
    </a>
    <a class="link" v-scroll-to="'#footer'" @scroll="handleScroll">
      Contact
    </a>
    <p class="bar">|</p>
    <a href="https://www.my.deltahacks.com" class="link">Login</a>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    goHome() {
      window.open('https://www.deltahacks.com/', '_self');
    },
  },
});
</script>

<style scoped>
.nav-container {
  height: auto;
  display: flex;
  justify-content: flex-start safe;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.2);
}

.home {
  width: auto;
  height: 2.4vw;
  margin: 1.35vw 2.5vw 1.35vw 8vw;
  transition: 0.5s;
  cursor: pointer;
}
.home:hover{
  filter: brightness(0.6);
}

.link {
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.375vw;
  font-weight: 650;
  margin: 0 1vw 0 1vw;
  text-decoration: none;
  transition: 0.5s;
  cursor: pointer;
}
.link:hover {
  filter: brightness(0.5);
}

.bar{
  color: white;
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25vw;
  font-weight: 600;
  margin: 0 1vw 0 1vw;
  text-decoration: none;
  transition: 0.5s;
  user-select: none;
}

.test{
  height: 100%;
  width: 100%;
  background-color: rgb(0, 0, 0);
  color:black;
  position:absolute;
  z-index: -5;
}

.mlink{
  display: none;
}

@media (orientation: portrait){
  /* .nav-container {
    justify-content: center;
  } */
  .home{
    width: auto;
    height: 4vmax;
    margin: 5.5vmin 3.5vmin 5.5vmin 10vmin;
  }
  .link{
    /* font-size: 3.5vmin;
    font-weight: 1000;
    margin: 0 1.5vmin 0 1.5vmin; */
    display: none;
  }
  .bar{
    /* font-size: 3.5vmin;
    font-weight: 900;
    margin: 0 1.5vmin 0 1.5vmin; */
    display: none;
  }
  .mlink{
    display: initial;
    color: white;
    border: none;
    outline: none;
    text-decoration: none;
    font-family: 'Montserrat', sans-serif;
    font-size: 6vmin;
    font-weight: 150;
    margin: 0 1.5vmin 0 1.5vmin; 
  }
  .mlink:active {
    filter: brightness(0.5);
  }
  .bold{
    font-weight: 525;
  }
}
</style>
