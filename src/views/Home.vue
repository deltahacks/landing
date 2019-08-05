<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Sponsors :sponsorList="sponsors" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Sponsors from '@/components/Sponsors.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    Sponsors,
  },
  data: function() {
    return {
      sponsors: [
        {
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/1/10/TD_Bank.svg',
          href: 'https://jobs.td.com/en-CA/campus-recruitment/technology/',
          alt: 'TD Canada Trust',
          main: true,
        },
        {
          logo:
            'https://upload.wikimedia.org/wikipedia/en/a/a0/ArcelorMittal.svg',
          href: 'http://dofasco.arcelormittal.com/',
          alt: 'Dofasco Arcelor Mittal',
          main: true,
        },
        {
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/0/09/Rogers_logo.svg',
          href: 'https://jobs.rogers.com/',
          alt: 'Rogers',
          main: false,
        },
        {
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg',
          href: 'https://www.microsoft.com/',
          alt: 'Microsoft Corporation',
          main: true,
        },
        {
          logo:
            'https://d33wubrfki0l68.cloudfront.net/c886ec835d208031833aa739318e694375b36e0a/b95ba/img/sponsors/innovationfactory.gif',
          href: 'https://www.innovationfactory.com/',
          alt: 'Innovation Factory',
          main: false,
        },
        {
          logo:
            'http://www.torontoagilecommunity.org/download/attachments/14943235/LOYALTYONE.png?version=1&modificationDate=1467159171758&api=v2',
          href: 'https://www.loyalty.com/',
          alt: 'Loyalty One',
          main: true,
        },
        {
          logo:
            'https://cdn.freebiesupply.com/logos/large/2x/rbc-royal-bank-logo-png-transparent.png',
          href: 'http://www.rbc.com/techjobs',
          alt: 'Royal Bank of Canada',
          main: false,
        },
        {
          logo:
            'https://upload.wikimedia.org/wikipedia/commons/6/6c/Synopsys_Logo.svg',
          href: 'https://www.synopsys.com/',
          alt: 'Synopsys',
          main: true,
        },
        {
          logo:
            'https://d33wubrfki0l68.cloudfront.net/a2f762f1eba2b12c29b5246c6c67b373bac470bb/df6a0/img/sponsors/fdmgroup.jpg',
          href: 'https://www.fdmgroup.com/en-ca/ca-home/',
          alt: 'FDM',
          main: false,
        },
        {
          logo:
            'https://d33wubrfki0l68.cloudfront.net/71e7ec9aed080ec1c75b6008066bd429dd97c267/a9143/img/sponsors/bitalino.png',
          href: 'https://www.bitalino.com/',
          alt: 'Bitalino',
          main: false,
        },
        {
          logo:
            'https://d33wubrfki0l68.cloudfront.net/ce64cba831b56d3f1c48c17e3762f56197783b4f/c410e/img/sponsors/coinberry.png',
          href: 'http://www.coinberry.com/',
          alt: 'Coinberry',
          main: true,
        },
      ],
    };
  },
});
</script>
