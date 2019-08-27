<template>
  <div :class="{ app: true, blend: true, change: change }">
    <div class="scroll">
      <Landing />
      <img class="spshp" :src="SAT" />
      <NewAbout heading="Explore the unexplored" :left="true" />
      <NewAbout heading="To Infinity and Beyond" :left="false" />
      <AboutUsStats />
      <FAQ id="faq" initialSelect="general 🙋" />
      <div id="spacer" style="height: 2850px" />
      <Sponsors :sponsorList="sponsors_data.primary" main />
      <Sponsors :sponsorList="sponsors_data.secondary" secondary />
      <Footer />
    </div>
    <div class="gradient" id="d1">
      <!-- <h1>{{ scr }}</h1> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FAQ from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';
import Landing from '@/components/Landing.vue';
import Sponsors from '@/components/Sponsors.vue';
import AboutUsStats from '@/components/AboutUsStats.vue';
import NewAbout from '@/components/NewAbout.vue';
import SAT from '@/assets/sat.png';
const VueScrollReveal = require('vue-scroll-reveal');

import sponsors_data from '@/data/sponsors_data.ts';

Vue.use(VueScrollReveal);

export default Vue.extend({
  name: 'app',
  components: {
    FAQ,
    Footer,
    Landing,
    Sponsors,
    AboutUsStats,
    NewAbout,
  },
  data() {
    return {
      change: false,
      scr: 0,
      sponsors_data,
      SAT,
    };
  },
  methods: {
    handleScroll() {
      this.scr = window.scrollY;
      const y = window.scrollY || window.pageYOffset;
      if (y < 560) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(37,36,64,1), rgba(32,65,95,1)' +
          Math.floor(-0.18 * y + 100) +
          '%, rgba(32,82,95,1) 100%)';
      } else if (y < 1120) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,65,95,1), rgba(32,82,95,1)' +
          Math.floor(-0.18 * y + 200) +
          '%, rgba(42,82,115,1) 100%)';
      } else if (y < 1680) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,95,1), rgba(42,82,115,1)' +
          Math.floor(-0.18 * y + 300) +
          '%, rgba(52,92,135,1) 100%)';
      } else if (y < 2240) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(42,82,115,1), rgba(52,92,135,1)' +
          Math.floor(-0.18 * y + 400) +
          '%, rgba(62,102,155,1) 100%)';
      } else if (y < 2800) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(52,92,135,1), rgba(62,102,155,1)' +
          Math.floor(-0.18 * y + 500) +
          '%, rgba(72,112,175,1) 100%)';
      } else if (y < 3300) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(62,102,155,1), rgba(72,112,195,1)' +
          Math.floor((-1 / 5) * y + 660) +
          '%, 87CEFA 100%)';
      } else if (y >= 3300) {
        document.getElementById('d1')!.style.opacity = String(
          (-1 / 420) * y + 62 / 7
        );
      } else {
        document.getElementById('d1')!.style.opacity = '1';
        document.getElementById('d1')!.style.background = 'white';
      }
      this.change = y >= 3300;
      if (y < 3300) {
        document.getElementById('d1')!.style.opacity = '1';
      }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped>
.app {
  color: white;
  transition: color 1s;
  height: 7000px;
  overflow: hidden;
}
.change {
  color: black;
}

.blend {
  background-blend-mode: overlay;
}

.scroll {
  top: 20px;
  height: 100%;
}

.gradient {
  /* background-color: rgb(69, 111, 225); */
  background-image: linear-gradient(
    180deg,
    rgba(37, 36, 64, 1) 0%,
    rgba(32, 82, 95, 1) 100%
  );
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
  color: black;
}

h1 {
  position: fixed;
  top: 10%;
  width: 70%;
  left: 0px;
  margin-left: 15%;
  text-align: center;
  display: block;
  font-family: Josefin Sans;
}

#faq {
  z-index: 1;
  margin-bottom: 10%;
}
.spshp {
  float: right;
  margin-top: 10vh;
  margin-right: 5vw;
  padding-left: 3vw;
  /* z-index: 0; */
  width: 35%;
}
</style>