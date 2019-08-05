<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Sponsors :sponsorList=sponsors />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import Sponsors from "@/components/Sponsors.vue";

export default Vue.extend({
  name: "home",
  components: {
    HelloWorld,
    Sponsors
  },
  data: function() {
    return {
      sponsors: [
        {
          logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Toronto-Dominion_Bank_logo.svg/1144px-Toronto-Dominion_Bank_logo.svg.png', 
          href: 'https://jobs.td.com/en-CA/campus-recruitment/technology/',
          alt: 'TD Canada Trust',
          main: true
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/bfea261bb3cd8907917ae7697046d3564eea043f/0d064/img/sponsors/arcelormittal.png', 
          href: 'http://dofasco.arcelormittal.com/',
          alt: 'Dofasco Arcelor Mittal',
          main: true
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/69362d963adbdcff20fdd1c0b7fd856ad56d8009/403d0/img/sponsors/rogers.png',
          href: 'https://jobs.rogers.com/',
          alt: 'Rogers',
          main: false,
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/0e4c0d2948408b89ddf105e62b646c5fcdef7ccf/0aa29/img/sponsors/microsoft.png',
          href: 'https://www.microsoft.com/',
          alt: 'Microsoft Corporation',
          main: true,
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/c886ec835d208031833aa739318e694375b36e0a/b95ba/img/sponsors/innovationfactory.gif',
          href: 'https://www.innovationfactory.com/',
          alt: 'Innovation Factory',
          main: false,
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/bfaf84ccc2a7cba0a12b6b565a52f0165de0228b/27b5d/img/sponsors/loyaltyone.png', 
          href: 'https://www.loyalty.com/',
          alt: 'Loyalty One',
          main: true,
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/2930acce9df0cd572eb2a4613fda77f3b752529a/54371/img/sponsors/rbc.png',
          href: 'http://www.rbc.com/techjobs',
          alt: 'Royal Bank of Canada',
          main: false,
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/be5d90322830dd67600492dfbe286ae5732be5eb/4a626/img/sponsors/synopsys.png',
          href: 'https://www.synopsys.com/',
          alt: 'Synopsys',
          main: true,
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/a2f762f1eba2b12c29b5246c6c67b373bac470bb/df6a0/img/sponsors/fdmgroup.jpg',
          href: 'https://www.fdmgroup.com/en-ca/ca-home/',
          alt: 'FDM',
          main: false,
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/71e7ec9aed080ec1c75b6008066bd429dd97c267/a9143/img/sponsors/bitalino.png',
          href: 'https://www.bitalino.com/',
          alt: 'Bitalino',
          main: false,
        },
        {
          logo: 'https://d33wubrfki0l68.cloudfront.net/ce64cba831b56d3f1c48c17e3762f56197783b4f/c410e/img/sponsors/coinberry.png',
          href: 'http://www.coinberry.com/',
          alt: 'Coinberry',
          main: true,
        }
      ]
    }
  }
});
</script>
