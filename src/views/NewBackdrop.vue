<template>
  <div :class="{ app: true, blend: true }">
    <div class="scroll">
      <Landing id="landing" />
      <!-- <img v-if="!isMobile()" class="sideItem leftCyber" :src="LeftCyber" />
      <img v-if="!isMobile()" class="sideItem rightCyber" :src="RightCyber" /> -->
      <div class="blurb-group">
        <NewBlurb 
          header="To Infinity and Beyond"
          :body="blurb1_text"
          :buttonText="blurb1_button"
          align="right"
          :buttonLink="blurb1_link"
          class="cyberBlurb"
          id="blurb-1"
        />
          <NewBlurb 
          header="The Hackathon for Change"
          :body="blurb1_text"
          align="left"
          :hasButton="false"
          class="cyberBlurb"
          id="blurb-2"
        />
      </div>
      <div class="blurb-group blurb-align-right">
      </div>
      <div class="spacer" style="height: 10vh" />
      <FAQ id="faq1" initialSelect="general" />
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
import Landing from '@/new-components/Landing.vue';
import NewBlurb from '@/new-components/New_Blurb.vue';
import FAQ from '@/new-components/Faq.vue';

import LeftCyberBuilding from '@/assets/cyber/left_top_building.svg';
import RightCyberBuilding from '@/assets/cyber/right_top_building.svg';
import LeftConstruction from '@/assets/cyber/left_construction.svg';
import RightConstruction from '@/assets/cyber/right_construction.svg';
import LeftMidBuilding from '@/assets/cyber/left_mid_building.svg';
import RightMidBuilding from '@/assets/cyber/right_mid_building.svg';
import LeftLowerBuilding from '@/assets/cyber/left_lower_building.svg';
import RightLowerBuilding from '@/assets/cyber/right_lower_building.svg';

import LeftCyber from '@/assets/cyber/left_side.svg';
import RightCyber from '@/assets/cyber/right_side.svg';

// @ts-ignore
import VueScrollReveal from 'vue-scroll-reveal';
import Navigation from '../components/Navbar2.vue';
import VueRellax from 'vue-rellax';

Vue.use(VueScrollReveal);
Vue.use(VueRellax);

export default Vue.extend({
  name: 'app',
  components: {
    FAQ,
    NewBlurb,
    Landing,
  },
  data() {
    return {
      scr: 0,
      LeftCyber,
      RightCyber,
      LeftCyberBuilding,
      RightCyberBuilding,
      LeftConstruction,
      RightConstruction,
      LeftMidBuilding,
      RightMidBuilding,
      LeftLowerBuilding,
      RightLowerBuilding,
      opacities_map: { color0: 0, color1: 1, color2: 2, color3: 3},
      opacities: ['1', '1', '1', '1'],
      threshholds_map: { point0: 0, point1: 1, point2: 2, point3: 3, point4: 4},
      threshholds: [0, 1400, 2800, 3600, 3900],
      th_mobile: [0, 1400, 2800, 3600, 4400],
      blurb1_text: `At DeltaHacks, we believe change comes from dreaming big. Each year we enable over 800 students from across Canada, working hard over 24 hours, to bring their big ideas to life. Our team works diligently year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, whether it be with a team, or on your own. Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at DeltaHacks 7!`,
      blurb1_button: `DeltaHacks 6 DevPost`,
      blurb1_link: `https://deltahacks6.devpost.com/`,
      blurb2_text2: `DeltaHacks is the annual hackathon for change, it's even in the name! The primary focus of DeltaHacks is to enable hackers from all over to make a change, whether it be in education, finance, health or any other field, we're extremely passionate about hacking to make a positive change! We work with McMaster University to welcome hackers of all levels, from the novice to the most experienced! We supply the food, venue, and workshops to provide even the most seasoned veterans with new experiences. Now in our 6th year running, DeltaHacks VI is our biggest and best DeltaHacks yet. Join us this January and take part in an experience you won’t forget!`,
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

.cyberBlurb {
  width: 50%;
}

#blurb-1 {
  margin-left: 20%;
}

#blurb-2 {
  margin-left: 10%;
}

.sideItem {
  width: 20vw;
}

#faq1 {
  width: 90%;
}
.leftCyber {
  z-index: 10;
  left: -12%;
  position: absolute;
}

.rightCyber {
  z-index: 10;
  right: 0;
  position: absolute;
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
  /* background-color: rgb(69, 111, 225); */
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

#faq1 {
  z-index: 1;
  margin-bottom: 10%;
}

@media screen and (max-width: 720px) {
  #faq1 {
    width: 100%;
  }
  .cyberBlurb {
    width: 100%;
    margin: 150px 0 !important;
  }
  .blurb-group {
    display: flex;
    flex-direction: column;
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
