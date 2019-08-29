<template>
  <div :class="{ app: true, blend: true, change: change }">
    <div class="scroll">
      <Landing id="landing" />
      <div class="astr2">
        <img :src="ASTR2" />
      </div>
      <img class="spshp" :src="SAT" />
      <div class="astr1">
        <img :src="ASTR1" />
      </div>
      <NewAbout
        heading="To Infinity and Beyond"
        :text="text1"
        :sub="text1_sub"
        :button="text1_button"
        :left="true"
      />
      <AboutUsStats />
      <img class="astr3" :src="ASTR3" />
      <NewAbout
        heading="The hackathon for change"
        :text="text2"
        :sub="text2_sub"
        :button="button2"
        :left="false"
      />
      <FAQ id="faq" initialSelect="general 🙋" />
      <div id="spacer" style="height: 1050px" />
      <Sponsors :sponsorList="sponsors_data.primary" main />
      <Sponsors :sponsorList="sponsors_data.secondary" secondary />
      <Footer />
    </div>
    <div class="gradient" id="d1" :style="{ opacity: d1Opacity }" />
    <div class="gradient" id="d2" :style="{ opacity: d2Opacity }" />
    <div class="gradient" id="d3" :style="{ opacity: d3Opacity }" />
    <div class="gradient" id="d4" :style="{ opacity: d4Opacity }" />
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
import ASTR1 from '@/assets/Astronaut1.svg';
import ASTR2 from '@/assets/Astronaut2.svg';
import ASTR3 from '@/assets/astro.svg';

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
      ASTR1,
      ASTR2,
      ASTR3,
      d1Opacity: '1',
      d2Opacity: '1',
      d3Opacity: '1',
      d4Opacity: '1',
      d5Opacity: '1',
      text1:
        "At DeltaHacks, we believe change comes from dreaming big. Our team works hard all year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, wether it be with a team, or on your own. Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at DeltaHacks VI!",
      text1_sub:
        'Check out some ideas people have brought to DeltaHacks in the past below!',
      text1_button: 'DeltaHacks V Projects',
      text2:
        "DeltaHacks is the annual hackathon for change, it's even in the name! We work with McMaster University to welcome hackers of all levels, from the novice to the seasoned pro! We provide the food, venue, and workshops to provide even the most seasoned veterans with new experiences. Now in our 6th year running, DeltaHacks VI is our biggest and best DeltaHacks yet. Join us in January and take part in an experience you won’t forget!",
      text2_sub: 'Interested in joining our team? Apply below!',
      button2: 'Apply to volunteer',
    };
  },
  methods: {
    handleScroll() {
      const y = window.scrollY || window.pageYOffset;
      if (y < 1400) {
        this.d1Opacity = String((-1 / 1400) * y + 1);
        this.d2Opacity = '1';
        this.d3Opacity = '1';
        this.d4Opacity = '1';
        this.d5Opacity = '1';
      } else if (y < 2800) {
        this.d1Opacity = '0';
        this.d2Opacity = String((-1 / 1400) * y + 2);
        this.d3Opacity = '1';
        this.d4Opacity = '1';
        this.d5Opacity = '1';
      } else if (y < 3600) {
        this.d1Opacity = '0';
        this.d2Opacity = '0';
        this.d3Opacity = String((-1 / 800) * y + 9 / 2);
        this.d4Opacity = '1';
        this.d5Opacity = '1';
      } else if (y < 4400) {
        this.d1Opacity = '0';
        this.d2Opacity = '0';
        this.d3Opacity = '0';
        this.d4Opacity = String((-1 / 800) * y + 11 / 2);
        this.d5Opacity = '1';
      } else if (y >= 4400) {
        this.d1Opacity = '0';
        this.d2Opacity = '0';
        this.d3Opacity = '0';
        this.d4Opacity = '0';
        this.d5Opacity = String(1);
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
  height: 5400px;
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
  color: black;
}
#d1 {
  background: rgb(32, 58, 67) none repeat scroll 0% 0%;
  z-index: -1;
}
#d2 {
  background: rgb(40, 60, 134) none repeat scroll 0% 0%;
  z-index: -2;
}
#d3 {
  background: rgb(91, 107, 167) none repeat scroll 0% 0%;
  z-index: -3;
}
#d4 {
  background: rgb(201, 214, 255) none repeat scroll 0% 0%;
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

.spshp {
  float: right;
  margin-top: 10vh;
  margin-right: 3vw;
  padding-left: 1vw;
  /* display:flex; */
  position: relative;
  /* z-index: 0; */
  width: 37%;
  transform: rotate(25deg);
}

.astr1 {
  position: absolute;
  margin-top: 38vh;
  margin-left: 70vw;
  width: 2.5%;
  transform: rotate(-4deg);
}

.astr2 {
  position: absolute;
  margin-top: 18vh;
  margin-left: 83vw;
  width: 3%;
  transform: rotate(3deg);
}

.astr3 {
  float: left;
  margin-top: 10vh;
  margin-right: 3vw;
  padding-left: 0vw;
  /* display:flex; */
  position: relative;
  /* z-index: 0; */
  width: 20%;
  transform: rotate(10deg);
}

#landing {
  height: 100vh;
}
</style>