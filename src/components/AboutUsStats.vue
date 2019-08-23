<template>
  <div class="container">
    <div class="container-item bubbles">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet"> 
      <svg id="desktop" viewBox="0 0 1000 1000">
        <Bubble :r=125 :x=500 :y=220 :number="700" :content="'Hackers'" :depth="1"></Bubble>
        <Bubble :r=75 :x=300 :y=130 :number="36" :content="'Hours'" :depth="2"></Bubble>
        <Bubble :r=60 :x=310 :y=280 :number="36" :content="'Hours'" :depth="1"></Bubble>
        <Bubble :r=75 :x=165 :y=250 :number="36" :content="'Hours'" :depth="2"></Bubble>
        <Bubble :r=75 :x=700 :y=130 :number="36" :content="'Hours'" :depth="2"></Bubble>
        <Bubble :r=75 :x=700 :y=300 :number="36" :content="'Hours'" :depth="2"></Bubble>
      </svg>
      <svg id="mobile" viewBox="0 0 500 700">
        <Bubble :r=125 :x=350 :y=350 :number="700" :content="'Hackers'" :depth="1"></Bubble>
        <Bubble :r=55 :x=260 :y=170 :number="36" :content="'Hours'" :depth="2"></Bubble>
        <Bubble :r=30 :x=180 :y=370 :number="36" :content="'Hours'" :depth="1"></Bubble>
        <Bubble :r=55 :x=160 :y=260 :number="36" :content="'Hours'" :depth="2"></Bubble>
        <Bubble :r=55 :x=210 :y=500 :number="36" :content="'Hours'" :depth="2"></Bubble>
        <Bubble :r=55 :x=360 :y=560 :number="36" :content="'Hours'" :depth="2"></Bubble>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Bubble from '@/components/Bubble.vue';

export default Vue.extend({
  name: 'About Us',
  components: {
    Bubble,
  },
});
</script>

<style>

.bubbles {
  height: 700px;
  position: relative;
}

@media screen and (max-width: 420px) {
  #mobile { display: block; }
  #desktop { display: none; }
}

@media screen and (min-width: 421px) {
  #mobile { display: none; }
  #desktop { display: block; }
}
</style>