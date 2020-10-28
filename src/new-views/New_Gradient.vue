<template>
  <div :class="{ app: true, blend: true }">
    <div class="scroll">
      <navigation />
      <Landing id="landing" />
      <div class="blurb-group">
        <img class="spshp" :src="SAT" />
        <div v-rellax="{ speed: -1.5 }" class="astr2">
          <img :src="ASTR2" />
        </div>
        <div v-rellax="{ speed: 1.5 }" class="astr1">
          <img :src="ASTR1" />
        </div>
        <Blurb
          heading="To Infinity and Beyond"
          :text="text1"
          :sub="text1_sub"
          :button="text1_button"
          :left="true"
          link="https://deltahacks6.devpost.com/"
          id="blurb-1"
        />
          <Blurb2
          heading="Information Packages"
          button1="Mentors"
          button2="Sponsors"
          button3="Challenger"
          button4="Judges"
          :left="true"
          link1="/Mentor-Information-Package.pdf"
          link2="/Sponsor-Information-Package.pdf"
          link3="/Challenger-Information-Package.pdf"
          link4="/Judge-Information-Package.pdf"
          id="blurb-1"
        />
      </div>
      <div class="spacer" style="height: 10vh" />
      <AboutUsStats />
      <div class="blurb-group blurb-align-right">
        <img class="astr3" :src="ASTR3" />
        <Blurb
          heading="The hackathon for change"
          :text="text2"
          :button="button2"
          :left="false"
          id="blurb-2"
          link="https://deltahacks5.devpost.com/"
        />
      </div>
      <div class="spacer" style="height: 10vh" />
      <FAQ id="faq1" initialSelect="general" />
      <div class="spacer" style="height: 50vh" />
      <Sponsors :sponsorList="sponsors_data.primary" main id="sponsor" />
      <Sponsors :sponsorList="sponsors_data.secondary" secondary />
      <Footer id="footer" />
    </div>
    <div class="gradient" id="c0" :style="{ opacity: opacities[0] }" />
    <div class="gradient" id="c1" :style="{ opacity: opacities[1] }" />
    <div class="gradient" id="c2" :style="{ opacity: opacities[2] }" />
    <div class="gradient" id="c3" :style="{ opacity: opacities[3] }" />
    <div class="gradient" id="c4" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FAQ from '@/components/Faq.vue';
import Footer from '@/components/Footer.vue';
import Landing from '@/components/Landing.vue';
import Sponsors from '@/components/Sponsors.vue';
import AboutUsStats from '@/components/AboutUsStats.vue';
import Blurb from '@/components/Blurb.vue';
import Blurb2 from '@/components/Blurb2.vue';
import SAT from '@/assets/sat.png';
import ASTR1 from '@/assets/Astronaut1.svg';
import ASTR2 from '@/assets/Astronaut2.svg';
import ASTR3 from '@/assets/astro.svg';

// @ts-ignore
import VueScrollReveal from 'vue-scroll-reveal';
import Navigation from '../components/Navbar2.vue';
import sponsors_data from '@/data/sponsors_data.ts';
import VueRellax from 'vue-rellax';

Vue.use(VueScrollReveal);
Vue.use(VueRellax);

export default Vue.extend({
  name: 'app',
  components: {
    FAQ,
    Footer,
    Landing,
    Sponsors,
    AboutUsStats,
    Blurb,
    Blurb2,
    Navigation,
  },
  data() {
    return {
      scr: 0,
      sponsors_data,
      SAT,
      ASTR1,
      ASTR2,
      ASTR3,
      opacities_map: { color0: 0, color1: 1, color2: 2, color3: 3},
      opacities: ['1', '1', '1', '1'],
      threshholds_map: { point0: 0, point1: 1, point2: 2, point3: 3, point4: 4},
      threshholds: [0, 1400, 2800, 3600, 3900],
      th_mobile: [0, 1400, 2800, 3600, 4400],
      text1: `At DeltaHacks, we believe change comes from dreaming big. Each year we enable over 800 students from across Canada, working hard over 24 hours, to bring their big ideas to life. Our team works diligently year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, whether it be with a team, or on your own. Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at DeltaHacks VI!`,
      text1_sub:
        'Check out some ideas people have brought to DeltaHacks in the past below!',
      text1_button: 'DeltaHacks VI Devpost',
      text2: `DeltaHacks is the annual hackathon for change, it's even in the name! The primary focus of DeltaHacks is to enable hackers from all over to make a change, whether it be in education, finance, health or any other field, we're extremely passionate about hacking to make a positive change! We work with McMaster University to welcome hackers of all levels, from the novice to the most experienced! We supply the food, venue, and workshops to provide even the most seasoned veterans with new experiences. Now in our 6th year running, DeltaHacks VI is our biggest and best DeltaHacks yet. Join us this January and take part in an experience you won’t forget!`,
      text2_sub: 'Interested in joining our team? Apply below!',
      button2: 'DeltaHacks V Projects',
    };
  },
  methods: {
    isMobile: (): boolean => window.innerWidth <= 720,
    handleScroll() {
      const y = window.scrollY || window.pageYOffset;
      for (let i = 0; i < this.opacities.length; i++) {
        if (!this.isMobile()) {
          Vue.set(this.opacities, i, String ((y - this.threshholds[i + 1]) / -(this.threshholds[i + 1] - this.threshholds[i])));
        } else {
          Vue.set(this.opacities, i, String ((y - this.th_mobile[i + 1]) / -(this.th_mobile[i + 1] - this.th_mobile[i])));
        }
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
.blurb-align-right {
  margin-right: -200px !important;
}
.app {
  color: white;
  height: inherit;
}
.blend {
  background-blend-mode: overlay;
  height: 500vh;
}

.scroll {
  top: 20px;
  height: 100%;
}

.gradient {
  height: 200vh;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
}
#c0 {
  background: #5c58b6 none repeat scroll 0% 0%;
  z-index: -1;
}
#c1 {
  background: #b957ce none repeat scroll 0% 0%;
  z-index: -2;
}
#c2 {
  background: #5994ce none repeat scroll 0% 0%;
  z-index: -3;
}
#c3 {
  background: #3a4e93 none repeat scroll 0% 0%;
  z-index: -4;
}
#c4 {
  background-color: rgb(237, 247, 255);
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

#faq1 {
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
  width: 30%;
  transform: rotate(25deg);
}

.astr1 {
  position: absolute;
  margin-top: 28vh;
  margin-left: 70vw;
  width: 2.5%;
  transform: rotate(-4deg);
  z-index: 1;
}

.astr2 {
  position: absolute;
  margin-top: 18vh;
  margin-left: 90vw;
  width: 3%;
  transform: rotate(3deg);
  z-index: 1;
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

@media screen and (max-width: 720px) {
  .blurb-group {
    display: flex;
    flex-direction: column;
  }
  .astr1 {
    position: absolute;
    margin-top: 18vh;
    margin-left: 25vw;
    width: 6%;
    transform: rotate(-4deg);
    z-index: 1;
  }
  .astr2 {
    position: absolute;
    margin-top: 8vh;
    margin-left: 65vw;
    width: 7%;
    transform: rotate(3deg);
    z-index: 1;
  }
  .astr3 {
    margin-bottom: 10%;
    padding: 0;
    position: static;
    width: 30%;
    transform: rotate(10deg);
    align-self: center;
  }
  .spshp {
    margin-bottom: 10%;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
    position: static;
    width: 45%;
    transform: rotate(25deg);
    align-self: center;
  }
  .blurb-align-right {
    margin-right: 0 !important;
  }

  @media only screen and (max-width: 900px) {
    .blurb-group {
      margin-top: -70px;
    }
  }
}
</style>