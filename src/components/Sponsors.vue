
<template>
  <div class="container">
    <h1>PAST SPONSORS</h1>
    <hr>
    <p>Interested in sponsoring? Contact us at <a href="mailto:sponsorship@deltahacks.com">sponsorship@deltahacks.com</a></p>

    <div class="square level--1">
      <div v-for='sponsor in sponsorList'>
        <a :href="sponsor.href">
          <img :src='sponsor.logo' :alt='sponsor.alt' data-tilt>
        </a>
      </div>
    </div>
    
      <h1 class="level">LEVEL 2</h1>
<!--    <div class="square level--2">
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
      </div>      -->
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
    window.VanillaTilt = require('vanilla-tilt');
    VanillaTilt.init(this.$refs.tilt);
  }
})
</script>

<style>
/*
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100%;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
*/

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
  transform: perspective(1000px)
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
/*
.level--2 > div:hover {
  animation: shake 0.5s; 

}*/
/*

Animations

*/
/*
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}*/
</style>

