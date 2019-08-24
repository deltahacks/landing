<template>
  <div class="app blend">
    <div class="scroll">
      <Landing />
      <div id="spacer" style="height: 5500px" />
      <!-- <AboutUsStats /> -->
      <FAQ style="z-index: 1;" initialSelect="general 🙋" />
      <Sponsors :sponsorList="sponsors" main />
      <Sponsors :sponsorList="sponsors" secondary />
    </div>
    <div class="gradient" id="d1">
      <!-- <h1>{{ scr }}</h1> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FAQ from '@/components/Faq.vue';
import Landing from '@/components/Landing.vue';
import Sponsors from '@/components/Sponsors.vue';
import AboutUsStats from '@/components/AboutUsStats.vue';
const VueScrollReveal = require('vue-scroll-reveal'); // tslint:disable-line

Vue.use(VueScrollReveal);

import FDM from '@/assets/sponsors/FDM.svg';
import CSE from '@/assets/sponsors/CSE.svg';
import RBC from '@/assets/sponsors/RBC.svg';
import TWN from '@/assets/sponsors/TWN.svg';
import Obie from '@/assets/sponsors/Obie.png';
import TD from '@/assets/sponsors/TD_Bank.png';
import TripIt from '@/assets/sponsors/TripIt.svg';
import Sketch from '@/assets/sponsors/Sketch.svg';
import Wolfram from '@/assets/sponsors/Wolfram.svg';
import Synopsys from '@/assets/sponsors/Synopsys.svg';
import Bitalino from '@/assets/sponsors/Bitalino.png';
import Balsamiq from '@/assets/sponsors/Balsamiq.svg';
import Rogers from '@/assets/sponsors/Rogers_logo.svg';
import MapleSoft from '@/assets/sponsors/MapleSoft.png';
import Microsoft from '@/assets/sponsors/Microsoft.svg';
import Hypercare from '@/assets/sponsors/Hypercare.png';
import Coinberry from '@/assets/sponsors/Coinberry.png';
import LoyaltyOne from '@/assets/sponsors/LoyaltyOne.png';
import ArcelorMittal from '@/assets/sponsors/ArcelorMittal.svg';
import InnovationFactory from '@/assets/sponsors/InnovationFactory.png';

export default Vue.extend({
  name: 'app',
  components: {
    FAQ,
    Landing,
    Sponsors,
    AboutUsStats,
  },
  data() {
    return {
      scr: 0,
      sponsors: [
        {
          logo: TD,
          href: 'https://jobs.td.com/en-CA/campus-recruitment/technology/',
          alt: 'TD Canada Trust',
        },
        {
          logo: ArcelorMittal,
          href: 'http://dofasco.arcelormittal.com/',
          alt: 'Dofasco Arcelor Mittal',
        },
        {
          logo: Rogers,
          href: 'https://jobs.rogers.com/',
          alt: 'Rogers',
        },
        {
          logo: Microsoft,
          href: 'https://www.microsoft.com/',
          alt: 'Microsoft Corporation',
        },
        {
          logo: InnovationFactory,
          href: 'https://www.innovationfactory.com/',
          alt: 'Innovation Factory',
        },
        {
          logo: LoyaltyOne,
          href: 'https://www.loyalty.com/',
          alt: 'Loyalty One',
        },
        {
          logo: RBC,
          href: 'http://www.rbc.com/techjobs',
          alt: 'Royal Bank of Canada',
        },
        {
          logo: Synopsys,
          href: 'https://www.synopsys.com/',
          alt: 'Synopsys',
        },
        {
          logo: FDM,
          href: 'https://www.fdmgroup.com/en-ca/ca-home/',
          alt: 'FDM',
        },
        {
          logo: Bitalino,
          href: 'https://www.bitalino.com/',
          alt: 'Bitalino',
        },
        {
          logo: Coinberry,
          href: 'http://www.coinberry.com/',
          alt: 'Coinberry',
        },
        {
          logo: Wolfram,
          href: 'http://www.wolfram.com/',
          alt: 'Wolfram',
        },
        {
          logo: Hypercare,
          href: 'http://www.hypercare.com/',
          alt: 'Hypercare',
        },
        {
          logo: Obie,
          href: 'http://www.obie.ai/',
          alt: 'Obie AI',
        },
        {
          logo: Balsamiq,
          href: 'http://www.balsamiq.com/',
          alt: 'Balsamiq',
        },
        {
          logo: CSE,
          href: 'https://www.cse-cst.gc.ca/',
          alt: 'CSE',
        },
        {
          logo: TripIt,
          href: 'https://www.tripit.com/',
          alt: 'TripIt',
        },
        {
          logo: MapleSoft,
          href: 'https://www.maplesoft.com/',
          alt: 'MapleSoft',
        },
        {
          logo: Sketch,
          href: 'https://www.sketchapp.com/',
          alt: 'Sketch',
        },
        {
          logo: TWN,
          href: 'https://www.theweathernetwork.com/',
          alt: 'The Weather Network',
        },
      ],
    };
  },
  methods: {
    handleScroll() {
      this.scr = window.scrollY;
      const y = window.scrollY || window.pageYOffset;
      if (y < 440) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(37,36,64,1), rgba(32,65,95,1)' +
          Math.floor((-100 / 440) * y + 100) +
          '%, rgba(32,82,95,1) 100%)';
      } else if (y < 840) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,65,95,1), rgba(32,82,95,1)' +
          Math.floor((-1 / 4) * y + 210) +
          '%, rgba(32,82,115,1) 100%)';
      } else if (y < 1504) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,95,1), rgba(32,82,115,1)' +
          Math.floor((-25 / 166) * y + 226) +
          '%, rgba(32,82,135,1) 100%)';
      } else if (y < 2300) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,115,1), rgba(32,82,135,1)' +
          Math.floor((-25 / 199) * y + 288) +
          '%, rgba(32,82,155,1) 100%)';
      } else if (y < 3100) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,135,1), rgba(32,82,155,1)' +
          Math.floor((-1 / 8) * y + 388) +
          '%, rgba(32,82,175,1) 100%)';
      } else if (y < 4600) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,155,1), rgba(32,82,185,1)' +
          Math.floor((-1 / 9) * y + 444) +
          '%, rgba(32,82,215,1) 100%)';
        /*
      } else if (y < 3800) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,155,1), rgba(32,82,175,1)' +
          Math.floor((-1 / 7) * y + 542) +
          '%, rgba(32,82,195,1) 100%)';
      } else if (y < 4600) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,175,1), rgba(32,82,195,1)' +
          Math.floor((-1 / 8) * y + 575) +
          '%, rgba(32,82,205,1) 100%)';
*/
      } else if (y < 5000) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,185,1), rgba(32,82,215,1)' +
          Math.floor((-1 / 4) * y + 1250) +
          '%, rgba(32,82,235,1) 100%)';
      } else if (y < 5500) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,215,1), rgba(32,82,235,1)' +
          Math.floor((-1 / 5) * y + 1100) +
          '%, rgba(125,152,249,1) 100%)';
      } else {
        document.getElementById('d1')!.style.opacity = String(
          (-1 / 500) * y + 12
        );
      }
      if (y < 5500) {
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
.blend {
  background-blend-mode: overlay;
}

.scroll {
  top: 20px;
  height: 7000px;
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
</style>