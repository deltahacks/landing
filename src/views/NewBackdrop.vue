<template>
  <div :class="{ app: true, blend: true }">
    <div class="scroll">
      <div class="mobileBackgroundLight">
        <navigation />
        <Landing id="landing" />
        <img class="sideItem" id="leftCyber" :src="LeftCyber" />
        <img class="sideItem" id="rightCyber" :src="RightCyber" />
        <div id="mobileSpacerMidTop" class="spacer" style="height: 30vh" />
      </div>
      <div class="blurb-group">
        <div class="mobileBackgroundDark mobileTopBlurb">
          <img class="mobileSep" id="B3" :src="B5" />
          <Blurb
            header="To Infinity and Beyond"
            :body="blurb1_text"
            :buttonText="blurb1_button"
            align="right"
            :buttonLink="blurb1_link"
            class="cyberBlurb"
            id="blurb-1"
          />
          <div id="mobileSpacerMid" class="spacer" style="height: 15vh" />
          <img class="mobileSep" :src="B6" />
        </div>
        <div class="mobileBackgroundMid">
          <Blurb
            header="The Hackathon for Change"
            :body="blurb2_text"
            align="left"
            :hasButton="false"
            class="cyberBlurb"
            id="blurb-2"
          />
          <div id="mobileSpacerUpperMid" class="spacer" style="height: 15vh" />
          <img class="mobileSep" :src="B4" />
        </div>
      </div>
      <div class="mobileBackgroundDarkest">
        <AboutUsStats id="stats" />
        <div class="blurb-group blurb-align-right"></div>
        <div id="mobileSpacerLowerMid" class="spacer" style="height: 13vmax" />
        <img class="mobileSep" :src="B5" />
        <div class="mobileBackgroundDark faqBound">
          <FAQ id="faq1" initialSelect="general" />
          <div class="spacer" v-if="!isMobile()" style="height: 7.5vh" />
          <img class="mobileSep" :src="B3" />
        </div>
        <div class="mobileBackgroundMid">
          <Sponsors :sponsorList="sponsors_data.primary" main id="sponsor" />
          <Sponsors :sponsorList="sponsors_data.secondary" secondary />
          <div class="f">
            <div class="spacer" v-if="!isMobile()" style="height: 20vh" />
            <Footer />
          </div>
        </div>
      </div>
    </div>
    <div class="gradient" id="c0" :style="{ opacity: opacities[0] }" />
    <div class="gradient" id="c1" :style="{ opacity: opacities[1] }" />
    <div class="gradient" id="c2" :style="{ opacity: opacities[2] }" />
    <div class="gradient" id="c3" :style="{ opacity: opacities[3] }" />
    <div class="gradient" id="c4" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Landing from "@/components/Landing.vue";
import Blurb from "@/components/Blurb.vue";
import FAQ from "@/components/Faq.vue";
import AboutUsStats from "@/components/AboutStats.vue";
import Sponsors from "@/components/Sponsors.vue";
import Footer from "@/components/Footer.vue";

import LeftCyber from "@/assets/cyber/left_asset.svg";
import RightCyber from "@/assets/cyber/right_asset.svg";
import B1 from "@/assets/cyber/B1.svg";
import B2 from "@/assets/cyber/B2.svg";
import B3 from "@/assets/cyber/B3.svg";
import B4 from "@/assets/cyber/B4.svg";
import B5 from "@/assets/cyber/B5.svg";
import B6 from "@/assets/cyber/B6.svg";
import B7 from "@/assets/cyber/B7.svg";

// @ts-ignore
import VueScrollReveal from "vue-scroll-reveal";
import Navigation from "../components/Navbar.vue";
import VueRellax from "vue-rellax";
import sponsors_data from "@/data/sponsors_data.ts";

Vue.use(VueScrollReveal);
Vue.use(VueRellax);

export default Vue.extend({
  name: "app",
  components: {
    AboutUsStats,
    FAQ,
    Navigation,
    Blurb,
    Landing,
    Sponsors,
    Footer,
  },
  data() {
    return {
      B1,
      B2,
      B3,
      B4,
      B5,
      B6,
      B7,
      scr: 0,
      sponsors_data,
      LeftCyber,
      RightCyber,
      opacities_map: { color0: 0, color1: 1, color2: 2, color3: 3 },
      opacities: ["1", "1", "1", "1"],
      threshholds_map: {
        point0: 0,
        point1: 1,
        point2: 2,
        point3: 3,
        point4: 4,
      },
      threshholds: [0, 1400, 2800, 3600, 3900],
      th_mobile: [0, 1400, 2800, 3600, 4400],
      blurb1_text: `At DeltaHacks, we believe change comes from dreaming big. Each year we enable over 800 students from across North America, working hard over 24 hours, to bring their big ideas to life. Our team works diligently year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, whether it be with a team, or on your own. Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at DeltaHacks 8!`,
      blurb1_button: `DeltaHacks 7 DevPost`,
      blurb1_link: `https://deltahacks7.devpost.com/`,
      blurb2_text: `DeltaHacks is the annual hackathon for change, it's even in the name! The primary focus of DeltaHacks is to enable hackers from all over to make a change, whether it be in education, finance, health or any other field, we're extremely passionate about hacking to make a positive change! We work with McMaster University to welcome hackers of all levels, from the novice to the most experienced! We supply the food, venue, and workshops to provide even the most seasoned veterans with new experiences. Now in our 8th year running, DeltaHacks 8 is our biggest and best DeltaHacks yet. Join us this March and take part in an experience you won’t forget!`,
    };
  },
  methods: {
    isMobile: (): boolean => window.innerWidth <= 720,
    handleScroll() {
      const y = window.scrollY || window.pageYOffset;
      for (let i = 0; i < this.opacities.length; i++) {
        if (!this.isMobile()) {
          Vue.set(
            this.opacities,
            i,
            String(
              (y - this.threshholds[i + 1]) /
                -(this.threshholds[i + 1] - this.threshholds[i])
            )
          );
        } else {
          Vue.set(
            this.opacities,
            i,
            String(
              (y - this.th_mobile[i + 1]) /
                -(this.th_mobile[i + 1] - this.th_mobile[i])
            )
          );
        }
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
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
  overflow-x: hidden;
}

.cyberBlurb {
  width: 50%;
}

.mobileSep {
  display: none;
}

#blurb-1 {
  padding-top: 20vh;
  margin-left: 20%;
}

#blurb-2 {
  margin-left: 15%;
  width: 55%;
}

.sideItem {
  z-index: 2;
  width: 38vw;
  position: absolute;
}

#leftCyber {
  left: -20%;
  top: 43vh;
}

#rightCyber {
  top: 55vh;
  right: -18%;
}

#faq1 {
  width: 80%;
  margin-left: 8vw;
}

#stats {
  width: 75%;
  margin-left: 9vw;
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
  height: 200vh;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
}
#c0 {
  background: rgb(55, 55, 55) none repeat scroll 0% 0%;
  z-index: -1;
}
#c1 {
  background: rgb(55, 55, 55) none repeat scroll 0% 0%;
  z-index: -2;
}
#c2 {
  background: rgb(45, 45, 45) none repeat scroll 0% 0%;
  z-index: -3;
}
#c3 {
  background: rgb(36, 36, 36) none repeat scroll 0% 0%;
  z-index: -4;
}
#c4 {
  background-color: rgb(24, 24, 24);
  z-index: -5;
}

#faq1 {
  z-index: 1;
  margin-bottom: 10%;
}

@media screen and (max-width: 720px) {
  .faqBound {
    padding-top: 10%;
  }
  .scroll {
    max-height: none;
  }
  #faq1 {
    width: 100%;
    margin-left: 0;
  }
  #stats {
    width: 100%;
    margin-left: 0;
  }
  .cyberBlurb {
    width: 90% !important;
    margin: 0 0 !important;
    padding-top: 15% !important;
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

@media screen and (max-width: 1250px) {
  .gradient {
    display: none;
  }
  .sideItem {
    display: none;
  }
  .mobileBackgroundLight {
    background-color: rgb(55, 55, 55);
  }
  .mobileBackgroundMid {
    background-color: rgb(40, 40, 40);
  }
  .mobileBackgroundDark {
    background-color: rgb(26, 26, 26);
  }
  .mobileBackgroundDarkest {
    background-color: rgb(12, 12, 12);
  }
  #mobileSpacerMidTop {
    height: 0vh !important;
  }
  #mobileSpacerMid {
    height: 5vh !important;
  }
  #mobileSpacerUpperMid {
    height: 5vh !important;
  }
  #mobileSpacerLowerMid {
    height: 10vh !important;
  }
  #B3 {
    margin-top: -7vh;
  }
  .mobileSep {
    margin-top: -1vh;
    margin-bottom: -1vh;
    display: inline;
  }
  .mobileTopBlurb {
    background-color: rgb(55, 55, 55);
  }
}

@media screen and (max-width: 720px) {
  .mobileTopBlurb {
    background-color: rgb(26, 26, 26);
  }
  #mobileSpacerMidTop {
    height: 20vh !important;
  }
  #B3 {
    display: unset;
  }
}

@media screen and (max-width: 1700px) {
  .f {
    display: none;
  }
}

@media screen and (max-width: 1250px) {
  .f {
    display: inline;
  }
}
</style>
