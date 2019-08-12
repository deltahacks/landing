<template>
  <svg>
    <link href="https://fonts.googleapis.com/css?family=Montserrat:800,600&display=swap" rel="stylesheet"> 
    <circle :cx="x" :cy="y" :r="r" fill="#4B7582"  />
    <text :x="x" :y="y-r*0.1" text-anchor="middle" fill="white" :font-size="r*0.5" font-family="Arial" dy=".3em">{{ number }}</text>
    <text :x="x" :y="y+r*.25" text-anchor="middle" fill="white" :font-size="r*.2" font-family="Arial" dy=".3em">{{ content }}</text>
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
      number: String,
      content: String,
  },
  computed: {
    translateXY: function() {
      return {
        transform: 'translate('+this.x+'px,'+this.y+'px)',
      };
    },
  },
  
});
</script>

<style scoped>
  text {
    font-family: 'Montserrat', sans-serif;
  }
</style>
