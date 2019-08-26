<template>
  <div class="container back">
    <div v-if="main">
          <img class="rocket-img" src="../assets/blastoff.png" />
      <h1 id="sponsors-title">Past Sponsors</h1>
      <p id="sponsors-subtitle">
        Interested in sponsoring? Contact us at
        <a href="mailto:sponsorship@deltahacks.com">
          sponsorship@deltahacks.com
        </a>
      </p>
    </div>
    <div :class="['square', getClass]">
      <div v-for="sponsor in shuffle(sponsorList)" v-bind:key="sponsor" v-scroll-reveal>
        <a :href="sponsor.href" target="_blank">
          <img :src="sponsor.logo" :alt="sponsor.alt" data-tilt data-tilt-perspective="500" />
        </a>
      </div>
    </div>
    <div v-if="secondary">
      <!-- <h1>PARTNERS</h1>
      <hr /> -->
      <!-- PARTNERS LIST GOES HERE -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
// @ts-ignore
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  scale: 1.35,
  distance: '10px',
  mobile: true,
});

export default Vue.extend({
  name: 'Sponsors',
  components: {},
  props: {
    sponsorList: Array,
    main: Boolean,
    secondary: Boolean,
  },
  methods: {
    shuffle: function shuffle(a: any) {
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    },
  },
  computed: {
    getClass() {
      if (this.main) {
        return 'level--1';
      } else if (this.secondary) {
        return 'level--2';
      }
    },
  },

  mounted() {
    const VanillaTilt = require('vanilla-tilt');
  },
});
</script>

<style>
/*

Psuedo Elements

*/

::selection {
  color: white;
  background: grey;
}

/*

Block level elements

*/
html {
  overflow-x: hidden;
}
hr {
  background-color: white;
  height: 3px;
  border: 0;
  width: 50%;
}

img {
  user-select: none;
}

/*

Classes

*/
.container {
  padding-top: 30px;
  padding-bottom: 50px;
  width: 80%;
  margin: 0 auto;
}

.square {
  display: -webkit-flex;
  -webkit-flex-direction: row;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 40px;
}

div > p > a {
  color: red;
  z-index: 100;
}

@media screen and (max-width: 500px) {
  .level--1 > div > a > img {
    max-width: 250px;
    max-height: 250px;
  }
}

.level--1 {
  width: 100%;
}
.level--1 > div {
  margin-left: 2.5%;
  margin-right: 2.5%;
  margin-top: 25px;
  line-height: 25px;
}

.level--1 > div > a > img {
  box-sizing: border-box;
  max-width: 300px;
  max-height: 300px;
}

.level--2 {
  width: 99%;
  margin-left: 2%;
}

.level--2 > div {
  margin-left: 2%;
  margin-right: 2%;
  margin-top: 25px;
  line-height: 30px;
}

.level--2 > div > a > img {
  max-width: 225px;
  max-height: 225px;
}

.rocket-img {
  z-index: 0 !important;
  display: flex;
  position: absolute;
  margin-top: -65vh;
  opacity: 1 !important;
  overflow: hidden;
  max-width: 100%;
}
.back {
  margin-top: 30vh;
  background: rgba(239, 247, 255, 1);
  width: 100%;
  }

#sponsors-title {
  font-weight: bold;
  font-family: Montserrat;
    position: relative;
  z-index: 10;
}

#sponsors-subtitle {
  font-weight: bold;
  font-family: Montserrat;
    position: relative;
  z-index: 10;
  }

</style>

