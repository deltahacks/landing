<template>
  <div :class="{ app: true, blend: true, change: change }">
    <div class="scroll">
      <Landing />
      <NewAbout heading="Explore the unexplored" :left="true" />
      <AboutUsStats />
      <NewAbout heading="To Infinity and Beyond" :left="false" />
      <FAQ id="faq" initialSelect="general 🙋" />
      <div id="spacer" style="height: 2850px" />
      <Sponsors :sponsorList="sponsors_data.primary" main />
      <Sponsors :sponsorList="sponsors_data.secondary" secondary />
      <Footer />
    </div>
    <div class="gradient" id="d1" :style='{opacity: d1Opacity}'/>
    <div class="gradient" id="d2" :style='{opacity: d2Opacity}'/>
    <div class="gradient" id="d3" :style='{opacity: d3Opacity}'/>
    <div class="gradient" id="d4" :style='{opacity: d4Opacity}'/>
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
      d1Opacity: '1',
      d2Opacity: '1',
      d3Opacity: '1',
      d4Opacity: '1',
      d5Opacity: '1',
    };
  },
  methods: {
    handleScroll() {
      this.scr = window.scrollY;
      const y = window.scrollY || window.pageYOffset;
      if (y < 1400) {
        this.d1Opacity = String(
          (-1 / 1400) * y + 1,
        );
      } else if (y < 2800) {
        this.d1Opacity = '0';
        this.d2Opacity = String(
          (-1 / 1400) * y + 2,
        );
      } else if (y < 3400) {
        this.d1Opacity = '0';
        this.d2Opacity = '0';
        this.d3Opacity = String(
          (-1 / 600) * y + 17 / 3,
        );
      } else if (y < 4000) {
        this.d1Opacity = '0';
        this.d2Opacity = '0';
        this.d3Opacity = '0';
        this.d4Opacity = String(
          (-1 / 600) * y + 20 / 3,
        );
      } else if (y >= 4000) {
        this.d1Opacity = '0';
        this.d2Opacity = '0';
        this.d3Opacity = '0';
        this.d4Opacity = '0';
        this.d5Opacity = String(
          1,
        );
      }
      this.change = y >= 2400;
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
  color: black !important;
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
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
  will-change: transform;
  color: black;
}
#d1 {
  background: rgb(32,58,67);
  z-index: -1;
}
#d2 {
  background: rgb(40,60,134);
  z-index: -2;
}
#d3 {
  background: rgb(91, 107, 167);
  z-index: -3;
}
#d4 {
  background: rgb(201,214,255);
  z-index: -4;
}
#d5 {
  color: white;
  z-index: -5;
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
</style>