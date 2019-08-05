
<template>
  <div class="container">
    <h1>PAST SPONSORS</h1>
    <hr>
    <p>Interested in sponsoring? Contact us at <a href="mailto:sponsorship@deltahacks.com">sponsorship@deltahacks.com</a></p>

    <div class="square level--1">
      <div v-for='sponsor in sponsorList'>
        <a :href="sponsor.href" target="_blank"> 
          <img :src='sponsor.logo' :alt='sponsor.alt' data-tilt data-tilt-perspective="500">
        </a>
      </div>
    </div>

    <h1>PARTNERS</h1>
    <hr>
      <!-- PARTNERS LIST GOES HERE -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'Sponsors',
  components: {
  },
  props: {
    sponsorList: Array,
  },
  mounted() {
    const VanillaTilt = require('vanilla-tilt');
  }
})
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
  width: 75%;
  margin: 0 auto;
  background-color: #2052F5;
  color: white;
}

.square {
  display: -webkit-flex;
  -webkit-flex-direction: row;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  
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

.level--1 {
  width: 100%;
}
.level--1 > div {
  margin: 0 auto;
  margin-top: 25px;
  line-height: 25px;
}


.level--1 > div > a > img {
  max-width: 300px;
  max-height: 300px;
}

.level--2 > div {
  margin: 0 auto;
  margin-top: 25px;
  line-height: 30px;
}

</style>

