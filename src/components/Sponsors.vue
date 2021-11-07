<template>
  <div class="backSponsor">
    <div class="container">
      <div v-if="main">
        <h1 id="sponsors-title">Current and Former Sponsors</h1>
        <!-- <p id="sponsors-subtitle">
          Interested in sponsoring? Contact us at
          <a href="mailto:sponsorship@deltahacks.com"
            >sponsorship@deltahacks.com</a
          >
        </p>-->
      </div>
      <div :class="['square', getClass]">
        <div v-for="(sponsor, index) in sponsorList" v-bind:key="index" v-scroll-reveal>
          <a :href="sponsor.href" target="_blank">
            <img
              :src="sponsor.logo"
              :alt="sponsor.alt"
              data-tilt
              data-tilt-perspective="500"
              data-tilt-reverse="true"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import VueScrollReveal from "vue-scroll-reveal";
Vue.use(VueScrollReveal, {
  class: "v-scroll-reveal", // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1000,
  scale: 1.35,
  distance: "10px",
  mobile: true,
});

export default Vue.extend({
  name: "Sponsors",
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
        return "level--1";
      } else if (this.secondary) {
        return "level--2";
      }
    },
  },

  mounted() {
    const VanillaTilt = require("vanilla-tilt");
  },
});
</script>

<style>
img {
  user-select: none;
}
.backSponsor {
  width: 100vw;
  padding-top: 60px;
}
.container {
  width: 60%;
  margin: 0 auto;
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
  padding-bottom: 30px;
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
  margin-left: 0;
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
#sponsors-title {
  font-weight: 800;
  position: relative;
  font-size: 35px;
  align-items: center;
  text-align: center;
  justify-content: center;
}
#sponsors-subtitle {
  font-weight: bold;
  font-family: Montserrat;
  position: relative;
  align-items: center;
  text-align: center;
  justify-content: center;
}

@media screen and (max-width: 720px) {
  #sponsors-title {
    font-size: 20px;
  }
}
</style>
