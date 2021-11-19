<template>
  <div class="app">
    <navigation />
    <Landing id="landing" />
    <div class="blurb-group">
      <Billboard
        header="To Infinity and Beyond"
        :body="blurb1_text"
        :buttonText="blurb1_button"
        align="right"
        :buttonLink="blurb1_link"
        :billboardPic="BB1"
        id="billboard-1"
      />
      <div class="spacer" style="height: 15vh" />

      <Billboard
        header="The Hackathon for Change"
        :body="blurb2_text"
        align="left"
        :hasButton="false"
        :billboardPic="BB2"
        id="billboard-2"
      />
      <div class="spacer" style="height: 15vh" />
    </div>
    <!-- </div>
    </div>-->

    <!-- <div class="mobileBackgroundDarkest"> -->
    <AboutUsStats id="stats" />
    <div class="blurb-group blurb-align-right"></div>
    <div v-if="isMobile()" id="mobileSpacerLowerMid" class="spacer" style="height: 13vmax" />
    <!-- <img class="mobileSep" :src="B5" /> -->
    <div class="mobileFaqBackgroundDark faqBound">
      <FAQ id="faq1" initialSelect="general" :billboardPic="BB1" />
      <div v-if="!isMobile()" class="spacer" style="height: 7.5vh" />
      <div class="spacer" v-if="!isMobile()" style="height: 7.5vh" />
    </div>
    <div class="bottom">
      <img class="fadebottom" :src="BTest" />
      <div class="mobileBackgroundMid sponsorBound">
        <Sponsors :sponsorList="sponsors_data.primary" main id="sponsor" />
        <Sponsors :sponsorList="sponsors_data.secondary" secondary />
        <div class="f">
          <div class="spacer" v-if="!isMobile()" style="height: 20vh" />
          <Footer />
        </div>
      </div>
    </div>

    <!-- </div>-->
    <!-- make all background go down for mobile? -->
    <img id="logo" :src="Logo" />
    <img id="background" :src="Background" />
    <img id="leftBuilding" :src="LeftBuilding" />
    <img id="middleBuilding" :src="MiddleBuilding" />
    <img id="rightBuilding" :src="RightBuilding" />
    <img id="rightBuildingDesigns" :src="RightBuildingDesigns" />
    <img id="leftBuildingDesigns" :src="LeftBuildingDesigns" />
    <img id="metro" :src="Metro" />
    <img id="bridge" :src="Bridge" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Landing from "@/components/Landing.vue";
import Blurb from "@/components/Blurb.vue";
import FAQ from "@/components/Faq_test.vue";
import AboutUsStats from "@/components/AboutStats.vue";
import Sponsors from "@/components/Sponsors.vue";
import Billboard from "@/components/Billboard.vue";

import B1 from "@/assets/cyber/B1.svg";
import B2 from "@/assets/cyber/B2.svg";
import B3 from "@/assets/cyber/B3.svg";
import B4 from "@/assets/cyber/B4.svg";
import B5 from "@/assets/cyber/B5.svg";
import B6 from "@/assets/cyber/B6.svg";
import B7 from "@/assets/cyber/B7.svg";
import BTest from "@/assets/cyber/B5 (1).svg";

// @ts-ignore
import VueScrollReveal from "vue-scroll-reveal";
import VueRellax from "vue-rellax";
import Navigation from "@/components/Navbar.vue";
import sponsors_data from "@/data/sponsors_data";

import MiddleBuilding from "@/new_assets/back_middle_building_designs 1.png";
import LeftBuilding from "@/new_assets/left_building.png";
import RightBuilding from "@/new_assets/right_building.png";
import RightBuildingDesigns from "@/new_assets/right_building_designs.svg";
import LeftBuildingDesigns from "@/new_assets/left_building_designs.svg";
import Metro from "@/new_assets/metro.svg";
import Bridge from "@/new_assets/bridge.svg";
import Logo from "@/new_assets/DH splash art.png";
import Background from "@/new_assets/background.svg";
import BB1 from "@/new_assets/billboard.svg";
import BB2 from "@/new_assets/billboard_2.svg";

Vue.use(VueScrollReveal);
Vue.use(VueRellax);

export default Vue.extend({
  name: "app",
  components: {
    AboutUsStats,
    Navigation,
    Blurb,
    Landing,
    Sponsors,
    Billboard,
    FAQ,
  },
  data() {
    return {
      MiddleBuilding,
      LeftBuilding,
      RightBuilding,
      RightBuildingDesigns,
      LeftBuildingDesigns,
      Metro,
      Bridge,
      Logo,
      Background,

      B1,
      B2,
      B3,
      B4,
      B5,
      B6,
      B7,
      BTest,

      BB1,
      BB2,

      sponsors_data,
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
      blurb1_button: `DeltaHacks 8 DevPost`,
      blurb1_link: `https://deltahacks7.devpost.com/`,
      blurb2_text: `DeltaHacks is the annual hackathon for change, it's even in the name! The primary focus of DeltaHacks is to enable hackers from all over to make a change, whether it be in education, finance, health or any other field, we're extremely passionate about hacking to make a positive change! We work with McMaster University to welcome hackers of all levels, from the novice to the most experienced! We supply the food, venue, and workshops to provide even the most seasoned veterans with new experiences. Now in our 8th year running, DeltaHacks 8 is our biggest and best DeltaHacks yet. Join us this March and take part in an experience you won’t forget!`,
    };
  },
  methods: {
    isPreMobile: (): boolean => window.innerWidth <= 1250,
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
  overflow: hidden;
}

/* Newly added styles */

#leftBuilding {
  position: absolute;
  top: -12vh;
  width: 100%;
  z-index: -95;
}
#rightBuilding {
  position: absolute;
  top: -12vh;
  width: 100%;
  z-index: -95;
}
#middleBuilding {
  position: absolute;
  top: -12vh;
  left: 1vw;
  z-index: -90;
  width: 98%;
}
#rightBuildingDesigns {
  position: absolute;
  top: -12vh;
  width: 100%;
  display: block;
  z-index: -90;
}
#leftBuildingDesigns {
  position: absolute;
  top: -12vh;
  width: 100%;
  z-index: -90;
  left: 0.2vw;
}
#metro {
  position: absolute;
  z-index: -80;
  width: 100%;
  top: -12vh;
}
#bridge {
  position: absolute;
  z-index: -10;
  width: 100%;
  top: -12vh;
}
#background {
  position: absolute;
  z-index: -100;
  width: 100%;
  top: -12vh;
  overflow: visible;
}
#logo {
  z-index: -80;
  width: 80%;
  top: 10vh;
  left: 10vw;
  position: absolute;
} /* Newly added styles */

#billboard-1 {
  margin-top: 25%;
  margin-left: -5%;
}

#billboard-2 {
  margin-top: 0%;
  margin-left: -13%;
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
  margin-top: -8%;
}

#stats {
  width: 75%;
  margin-left: 9vw;
  margin-top: -10%;
}

.bottom {
  margin-top: 30vw;
  width: 100%;
}

.scroll {
  top: 20px;
  height: 100%;
}

.fadebottom {
  margin-top: -1vh;
  margin-bottom: -1vh;
  display: inline;
}

.faq1 {
  margin-bottom: 20vh;
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
  z-index: 100;
  margin-bottom: 10%;
}

@media screen and (max-width: 1100px) {
  .bottom {
    margin-top: 10%;
  }
  #billboard-1 {
    margin-top: 15%;
  }
  #billboard-2 {
    margin-top: -20%;
    margin-left: -15%;
  }
  #faq1 {
    margin-top: -10%;
  }
}

@media screen and (max-width: 720px) {
  #billboard-1 {
    margin-top: -10%;
    margin-left: -15%;
  }
  .mobileFaqBackgroundDark {
    background: rgba(26, 26, 26);
    margin-top: 20%;
  }

  #billboard-2 {
    margin-top: -30%;
    margin-left: -20%;
  }

  .faqBound {
    padding-top: 10%;
  }

  .scroll {
    max-height: none;
  }
  #faq1 {
    width: 100%;
    margin-left: 0;
    margin-top: 40%;
  }

  .bottom {
    margin-top: -25%;
  }

  #stats {
    width: 100%;
    margin-left: -3vw;
    margin-top: -25%;
    margin-bottom: 10%;
  }

  .cyberBlurb {
    width: 90% !important;
    margin: 0 0 !important;
    padding-top: 15% !important;
  }
  .blurb-group {
    display: flex;
    flex-direction: column;
    z-index: 100000;
    overflow: hidden;
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

@media screen and (max-width: 1500px) {
  .gradient {
    display: none;
  }
  /* .sideItem {
    display: none;
  } */
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
