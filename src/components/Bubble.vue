<template>
  <svg :id="depth">
    <circle :cx="x" :cy="y" :r="r" fill="#4B7582" />
    <text :x="x" :y="y-r*0.1" text-anchor="middle" fill="white" :font-size="r*0.5" font-family="Arial" dy=".3em">{{ number }}</text>
    <text :x="x" :y="y+r*.25" text-anchor="middle" fill="white" :font-size="r*.2" font-family="Arial" dy=".3em">{{ content }}</text>
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
});
</script>

<style scoped>
  text {
    font-family: 'Montserrat', sans-serif;
  }
  svg#one {
    animation: bounce 3.0s infinite;
    -webkit-animation: bounce 3.0s infinite;
    -moz-animation: bounce 3.0s infinite;
    -o-animation: bounce 3.0s infinite; 
  }
  svg#two {
    animation: bounce 2.5s infinite;
    -webkit-animation: bounce 2.5s infinite;
    -moz-animation: bounce 2.5s infinite;
    -o-animation: bounce 2.5s infinite; 
  }
  @-webkit-keyframes bounce {
      0%,  
      100% {
        -webkit-transform: translateY(0);
      } 
      50% {
          -webkit-transform: translateY(-10px);
      }
  }
  @-moz-keyframes bounce {
      0%, 
      100% {
        -moz-transform: translateY(0);
      }
      50% {
        -moz-transform: translateY(-10px);
      }
  }
  @-o-keyframes bounce {
      0%,
      100% {
        -o-transform: translateY(0);
      }
      50% {
        -o-transform: translateY(-10px);
      }
  }
  @keyframes bounce {
      0%,  
      100% {
          transform: translateY(0);
      }
      50% {
          transform: translateY(-10px);
      }
  }
</style>
