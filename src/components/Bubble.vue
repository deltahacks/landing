<template>
  <svg>
    <circle :cx="x" :cy="yVal" :r="r" fill="#4B7582" />
    <text :x="x" :y="yVal-r*0.1" text-anchor="middle" fill="white" :font-size="r*0.5" font-family="Arial" dy=".3em">{{ number }}</text>
    <text :x="x" :y="yVal+r*.25" text-anchor="middle" fill="white" :font-size="r*.2" font-family="Arial" dy=".3em">{{ content }}</text>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Bubble',
  components: {
  },
  props: {
    r: Number,
    x: Number,
    y: Number,
    depth: Number,
    number: Number,
    content: String,
  },
  data: function() {
    return {
      yVal: this.y,
      time: 0,
      phase: Math.random() * 2 * Math.PI,
      period: 40 / (2 + this.depth),
      amplitude: this.depth / 2
    }
  },
  mounted: function() {
    setInterval(this.tick, 30);
  },
  created: function() {

  },
  methods: {
    tick: function() {
      this.time += 1;
      this.yVal += this.amplitude * Math.sin(this.time/this.period + this.phase);
    }
  }
});
</script>

<style>
  text {
    font-family: 'Montserrat', sans-serif;
  }
</style>
