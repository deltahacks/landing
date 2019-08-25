<template>
  <div class="container">
    <div class="container-item bubbles">
      <link href="https://fonts.googleapis.com/css?family=Montserrat:500&display=swap" rel="stylesheet"> 
      <svg viewBox="0 0 1000 500" v-if="$mq === 'desktop'">
        <Bubble v-for="bubble in bubbles" v-bind:key="bubble"
          :r=bubble.desktop.r
          :x=bubble.desktop.x
          :y=bubble.desktop.y
          :number="bubble.number"
          :content="bubble.content"
          :depth="bubble.depth"
          :start_gradient="bubble.start_gradient"
          :end_gradient="bubble.end_gradient"
        ></Bubble>
      </svg>
      <svg viewBox="0 0 500 700" v-if="$mq === 'mobile'">
        <Bubble v-for="bubble in bubbles" v-bind:key="bubble"
          :r=bubble.mobile.r
          :x=bubble.mobile.x
          :y=bubble.mobile.y
          :number="bubble.number"
          :content="bubble.content"
          :depth="bubble.depth"
          :start_gradient="bubble.start_gradient"
          :end_gradient="bubble.end_gradient"
        ></Bubble>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Bubble from '@/components/Bubble.vue';
import VueMq from 'vue-mq';

Vue.use(VueMq, {
  breakpoints: {
    mobile: 420,
    tablet: 430,
    desktop: Infinity,
  },
});

export default Vue.extend({
  name: 'About Us',
  components: {
    Bubble,
  },
  data() {
    return {
      bubbles: [
        {
          desktop: {
            r: 125,
            x: 500,
            y: 220,
          },
          mobile: {
            r: 125,
            x: 350,
            y: 350,
          },
          number: 700,
          content: 'Hackers',
          depth: 1,
          start_gradient: '#9bcd6d',
          end_gradient: '#651b3a',
        },
        {
          desktop: {
            r: 75,
            x: 300,
            y: 130,
          },
          mobile: {
            r: 55,
            x: 260,
            y: 170,
          },
          number: 36,
          content: 'Hours',
          depth: 2,
          start_gradient: '#625254',
          end_gradient: '#e3388b',
        },
        {
          desktop: {
            r: 60,
            x: 310,
            y: 280,
          },
          mobile: {
            r: 30,
            x: 180,
            y: 370,
          },
          number: 36,
          content: 'Hours',
          depth: 1,
          start_gradient: '#a97c50',
          end_gradient: '#2a3d90',
        },
        {
          desktop: {
            r: 75,
            x: 165,
            y: 250,
          },
          mobile: {
            r: 55,
            x: 160,
            y: 260,
          },
          number: 36,
          content: 'Hours',
          depth: 2,
          start_gradient: '#625254',
          end_gradient: '#e3388b',
        },
        {
          desktop: {
            r: 75,
            x: 700,
            y: 130,
          },
          mobile: {
            r: 55,
            x: 210,
            y: 500,
          },
          number: 36,
          content: 'Hours',
          depth: 2,
          start_gradient: '#a97c50',
          end_gradient: '#2a3d90',
        },
        {
          desktop: {
            r: 75,
            x: 700,
            y: 300,
          },
          mobile: {
            r: 55,
            x: 360,
            y: 560,
          },
          number: 36,
          content: 'Hours',
          depth: 2,
          start_gradient: '#624481',
          end_gradient: '#2a3d90',
        },
      ],
    };
  },
});
</script>

<style>

.bubbles {
  position: relative;
}

</style>