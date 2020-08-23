<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Sponsors :sponsorList="sponsors" main />
    <Sponsors :sponsorList="sponsors" secondary />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Landing from '@/components/Landing.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Sponsors from '@/components/Sponsors.vue';
const VueScrollReveal = require('vue-scroll-reveal'); // tslint:disable-line

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

import InnovationFactory from '@/assets/sponsors/InnovationFactory.png';
import Nokia from '@/assets/sponsors/Nokia.png';
import ArcelorMittal from '@/assets/sponsors/ArcelorMittal.png';
import MacEng from '@/assets/sponsors/MacEng.png';
import TD from '@/assets/sponsors/TD.png';
import MSE from '@/assets/sponsors/MSE.png';
import RBC from '@/assets/sponsors/RBC.png';
import CSE from '@/assets/sponsors/CSE.png';
import MES from '@/assets/sponsors/MES.png';
import Algorand from '@/assets/sponsors/Algorand.png';
import Deloitte from '@/assets/sponsors/Deloitte.png';
import FDM from '@/assets/sponsors/FDM.svg';
import L3Harris from '@/assets/sponsors/L3Harris.png';
import Voiceflow from '@/assets/sponsors/Voiceflow.png';
import DigitalOcean from '@/assets/sponsors/Digitalocean.png';
import Hypercare from '@/assets/sponsors/Hypercare.png';

interface Sponsor {
  logo: any;
  href: string;
  alt: string;
}

interface SponsorsData {
  sponsors: Sponsor[];
}

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    Landing,
    Sponsors,
  },
  data(): SponsorsData {
    return {
      sponsors: [
        {
          logo: TD,
          href: 'https://jobs.td.com/en-CA/campus-recruitment/technology/',
          alt: 'TD Canada Trust',
        },
      ],
    };
  },
});
</script>
