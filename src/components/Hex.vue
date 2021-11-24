<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient
        :id="number"
        :y1="y - r"
        :x1="x - r"
        :x2="x + r"
        :y2="y + r"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" :stop-color="start_gradient" />
        <stop offset="1" :stop-color="end_gradient" />
      </linearGradient>
      <filter id="glow">
        <feGaussianBlur stdDeviation="7" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="inner-glow">
        <feFlood flood-color="red" />
        <feComposite in2="SourceAlpha" operator="out" />
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite operator="atop" in2="SourceGraphic" />
      </filter>
    </defs>
    <g id="Layer_2" dcata-name="Layer 2">
      <g id="Layer_1-2" data-name="Layer 1">
        <g class="cls-1">
          <polygon
            class="cls-2"
            :points="points"
            :fill="gradient()"
            :fill-opacity="0.7"
            :stroke="stroke"
            :stroke-width="4"
            filter="url(#glow)"
          />
        </g>
      </g>
      <text
        :x="x"
        :y="yVal - r * 0.1"
        text-anchor="middle"
        fill="white"
        :font-size="r * 0.55"
        font-family="montserrat"
        font-weight="500"
        dy=".25em"
      >{{ number }}</text>
      <text
        :x="x"
        :y="yVal + r * 0.25"
        text-anchor="middle"
        fill="white"
        :font-size="r * 0.25"
        font-family="montserrat"
        font-weight="430"
        dy=".5em"
      >{{ content }}</text>
    </g>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Bubble",
  components: {},
  props: {
    r: Number,
    x: Number,
    y: Number,
    points: String,
    depth: Number,
    number: Number,
    content: String,
    start_gradient: String,
    end_gradient: String,
    stroke: String,
  },
  data() {
    return {
      yVal: this.y,
      time: 0,
      phase: Math.random() * 30 * Math.PI,
      period: 90 / (10 + this.depth),
      amplitude: this.depth / 3,
      stroke2: this.stroke,
    };
  },
  mounted() {
    // requestAnimationFrame(this.tick);
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
      return "url(#" + this.number + ")";
    },
  },
});
</script>

<style scoped>
text {
  font-family: "Montserrat", sans-serif;
}

.cls-1 {
  opacity: 1;
}

.cls-2 {
  opacity: 1;
}
</style>
