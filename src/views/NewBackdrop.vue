<template>
  <div :class="{ app: true, blend: true }">
    <div class="scroll">
      <Landing id="landing" />
      <img v-if="!isMobile()" class="sideItem leftCyber" id="left-top-building" :src="LeftCyberBuilding" />
      <img v-if="!isMobile()" class="sideItem rightCyber" id="right-top-building" :src="RightCyberBuilding" />
      <img v-if="!isMobile()" class="sideItem leftCyber" id="left-construction" :src="LeftConstruction" />
      <img v-if="!isMobile()" class="sideItem rightCyber" id="right-construction" :src="RightConstruction" />
      <img v-if="!isMobile()" class="sideItem leftCyber" id="left-mid-building" :src="LeftMidBuilding" />
      <img v-if="!isMobile()" class="sideItem rightCyber" id="right-mid-building" :src="RightMidBuilding" />
      <img v-if="!isMobile()" class="sideItem leftCyber" id="left-lower-building" :src="LeftLowerBuilding" />
      <img v-if="!isMobile()" class="sideItem rightCyber" id="right-lower-building" :src="RightLowerBuilding" />

      <div class="blurb-group">
      </div>
      <div class="spacer" style="height: 10vh" />
      <div class="blurb-group blurb-align-right">
      </div>
      <div class="spacer" style="height: 10vh" />
      <div class="spacer" style="height: 50vh" />
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
import LeftCyberBuilding from '@/assets/cyber/left_top_building.svg';
import RightCyberBuilding from '@/assets/cyber/right_top_building.svg';
import LeftConstruction from '@/assets/cyber/left_construction.svg';
import RightConstruction from '@/assets/cyber/right_construction.svg';
import LeftMidBuilding from '@/assets/cyber/left_mid_building.svg';
import RightMidBuilding from '@/assets/cyber/right_mid_building.svg';
import LeftLowerBuilding from '@/assets/cyber/left_lower_building.svg';
import RightLowerBuilding from '@/assets/cyber/right_lower_building.svg';

// @ts-ignore
import VueScrollReveal from 'vue-scroll-reveal';
import Navigation from '../components/Navbar2.vue';
import VueRellax from 'vue-rellax';

Vue.use(VueScrollReveal);
Vue.use(VueRellax);

export default Vue.extend({
  name: 'app',
  components: {
    Landing,
  },
  data() {
    return {
      scr: 0,
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

.sideItem {
  width: 20vw;
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

#left-top-building {
  top: 600px;
}

#right-top-building {
  top: 600px;
}

#left-construction {
  left: -7%;
  top: 2300px;
}

#right-construction {
  top: 2250px;
}

#left-mid-building {
  top: 3300px;
  left: -6%;
}

#right-mid-building {
  top: 3150px;
}

#left-lower-building {
  left: -6%;
  top: 3750px;
}

#right-lower-building {
  top: 3750px;
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
