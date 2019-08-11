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
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Sponsors from '@/components/Sponsors.vue';

import TD from '@/assets/sponsors/TD_Bank.svg';
import ArcelorMittal from '@/assets/sponsors/ArcelorMittal.svg';
import Rogers from '@/assets/sponsors/Rogers_logo.svg';
import Microsoft from '@/assets/sponsors/Microsoft.svg';
import InnovationFactory from '@/assets/sponsors/InnovationFactory.svg';
import LoyaltyOne from '@/assets/sponsors/LoyaltyOne.png';
import RBC from '@/assets/sponsors/RBC.svg';
import Synopsys from '@/assets/sponsors/Synopsys.svg';
import FDM from '@/assets/sponsors/FDM.svg';
import Bitalino from '@/assets/sponsors/Bitalino.png';
import Coinberry from '@/assets/sponsors/Coinberry.png';


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
    Sponsors,
  },
  data(): SponsorsData {
    return {
      sponsors: [
        {
          logo:
            TD,
          href: 'https://jobs.td.com/en-CA/campus-recruitment/technology/',
          alt: 'TD Canada Trust',
        },
        {
          logo:
            ArcelorMittal,
          href: 'http://dofasco.arcelormittal.com/',
          alt: 'Dofasco Arcelor Mittal',
        },
        {
          logo:
            Rogers,
          href: 'https://jobs.rogers.com/',
          alt: 'Rogers',
        },
        {
          logo:
            Microsoft,
          href: 'https://www.microsoft.com/',
          alt: 'Microsoft Corporation',
        },
        {
          logo:
            InnovationFactory,
          href: 'https://www.innovationfactory.com/',
          alt: 'Innovation Factory',
        },
        {
          logo:
            LoyaltyOne,
          href: 'https://www.loyalty.com/',
          alt: 'Loyalty One',
        },
        {
          logo:
            RBC,
          href: 'http://www.rbc.com/techjobs',
          alt: 'Royal Bank of Canada',
        },
        {
          logo:
            Synopsys,
          href: 'https://www.synopsys.com/',
          alt: 'Synopsys',
        },
        {
          logo:
            FDM,
          href: 'https://www.fdmgroup.com/en-ca/ca-home/',
          alt: 'FDM',
        },
        {
          logo:
            Bitalino,
          href: 'https://www.bitalino.com/',
          alt: 'Bitalino',
        },
        {
          logo:
            Coinberry,
          href: 'http://www.coinberry.com/',
          alt: 'Coinberry',
        },
      ],
    };
  },
});
</script>
