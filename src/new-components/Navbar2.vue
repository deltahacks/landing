<template>
  <div>
  <div class="test">a</div>
  <div class="nav-container">
    <img class='home' src="../assets/logolarge.png" alt="DH Logo" @click="goHome">
    <a class="link" v-scroll-to="'#blurb-1'" @scroll="handleScroll">
      About
    </a>
    <a class="link" v-scroll-to="'#faq1'" @scroll="handleScroll">
      FAQ
    </a>
    <a class="link" v-scroll-to="'#sponsor'" @scroll="handleScroll">
      Sponsors
    </a>
    <a class="link" href="mailto:hello@deltahacks.com" target=“_blank”> 
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
  z-index: 2;
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

@media screen and (max-width: 720px){
  .home{
    width: auto;
    height: 3.5vmax;
    margin: 5vmin 3.5vmin 5vmin 5vmin;
  }
  .link{
    font-size: 3.5vmin;
    font-weight: 1000;
    margin: 0 1.5vmin 0 1.5vmin;
  }
  .bar{
    font-size: 3.5vmin;
    font-weight: 900;
    margin: 0 1.5vmin 0 1.5vmin;
  }
}
</style>
