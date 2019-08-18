
<template>
  <div class="container">
    <h1>PAST SPONSORS</h1>
    <hr />
    <p>
      Interested in sponsoring? Contact us at
      <a
        href="mailto:sponsorship@deltahacks.com"
      >sponsorship@deltahacks.com</a>
    </p>
    <div :class='["square", getClass]'>
      <div v-for="sponsor in shuffle(sponsorList)" v-bind:key="sponsor" v-scroll-reveal>
        <a :href="sponsor.href" target="_blank">
          <img :src="sponsor.logo" :alt="sponsor.alt" data-tilt data-tilt-perspective="500" />
        </a>
      </div>
    </div>
    <h1>PARTNERS</h1>
    <hr />
    <!-- PARTNERS LIST GOES HERE -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
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
  components: {
  },
  props: {
    sponsorList: Array,
    main: Boolean,
    secondary: Boolean,
  },
  methods: {
    shuffle: function shuffle(a) {
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
  background-color: #9fc9fff1;
  color: white;
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

.level {
  margin: 0 auto;
}

div > h1.level:nth-of-type(2) {
  margin-top: 40px;
}

div > p > a {
  color: red;
}

@media screen and (max-width: 500px) {
 .level--1 > div > a > img {
    max-width: 250px;
    max-height: 250px;
  }
}

.level--1 {
  width: 95%;
  margin-left: 3%
}
.level--1 > div {
  margin: 0 auto;
  margin-top: 25px;
  line-height: 25px;
}

.level--1 > div > a > img {
  box-sizing: border-box;
  max-width: 300px;
  max-height: 300px;
}

.level--2 {
  width: 80%;
  margin-left: 10%;
}

.level--2 > div {
  margin: 0 auto;
  margin-top: 25px;
  line-height: 30px;
}

.level--2 > div > a > img {
  max-width: 230px;
  max-height: 230px;
}
</style>

