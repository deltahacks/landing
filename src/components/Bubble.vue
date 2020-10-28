<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient
        :id="number"
        :y1="y-r"
        :x1="x-r"
        :x2="x+r"
        :y2="y+r"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" :stop-color="start_gradient" />
        <stop offset="1" :stop-color="end_gradient" />
      </linearGradient>
    </defs>
    <g id="Layer_2" dcata-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g class="cls-1">
          <circle
            class="cls-2"
            :cx="x"
            :cy="yVal"
            :r="r"
            :fill="gradient()"
          />
        </g>
      </g>
      <text
        :x="x"
        :y="yVal - r * 0.1"
        text-anchor="middle"
        fill="white"
        :font-size="r * 0.5"
        font-family="Arial"
        dy=".3em"
      >
        {{ number }}
      </text>
      <text
        :x="x"
        :y="yVal + r * 0.25"
        text-anchor="middle"
        fill="white"
        :font-size="r * 0.2"
        font-family="Arial"
        dy=".3em"
      >
        {{ content }}
      </text>
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Bubble',
  components: {},
  props: {
    r: Number,
    x: Number,
    y: Number,
    depth: Number,
    number: Number,
    content: String,
    start_gradient: String,
    end_gradient: String,
  },
  data() {
    return {
      yVal: this.y,
      time: 0,
      phase: Math.random() * 30 * Math.PI,
      period: 90 / (10 + this.depth),
      amplitude: this.depth / 3,
    };
  },
  mounted() {
    requestAnimationFrame(this.tick);
  },
  methods: {
    tick() {
      this.time += 1;
      this.yVal +=
        0.5 *
        this.amplitude *
        Math.sin((this.time * 0.5) / this.period + this.phase);
      requestAnimationFrame(this.tick);
    },
    gradient() {
      return 'url(#' + this.number + ')';
    },
  },
});
</script>

<style scoped>
text {
  font-family: 'Montserrat', sans-serif;
}
.cls-1 {
  opacity: 0.25;
}
.cls-2 {
  opacity: 0.74;
}
</style>