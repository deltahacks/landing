<template>
  <div class="container">
    <div class="container-item bubbles">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet"> 
      <svg viewBox="0 0 1000 1000">
        <Bubble :r=125 :x=500 :y=220 :number="700" :content="'Hackers'" :depth="'one'"></Bubble>
        <Bubble :r=75 :x=300 :y=130 :number="36" :content="'Hours'" :depth="'two'"></Bubble>
        <Bubble :r=60 :x=310 :y=280 :number="36" :content="'Hours'" :depth="'one'"></Bubble>
        <Bubble :r=75 :x=165 :y=250 :number="36" :content="'Hours'" :depth="'two'"></Bubble>
        <Bubble :r=75 :x=700 :y=130 :number="36" :content="'Hours'" :depth="'two'"></Bubble>
        <Bubble :r=75 :x=700 :y=300 :number="36" :content="'Hours'" :depth="'two'"></Bubble>
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

.container {
  background-color: #396575;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bubbles {
  height: 700px;
  position: relative;
}
</style>