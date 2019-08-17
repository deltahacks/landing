<template>
  <div class="home">
   <HelloWorld
      v-scroll-reveal.reset="{ delay: 100 }"
      msg="Welcome to Your Vue.js + TypeScript App"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Landing from '@/components/Landing.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Sponsors from '@/components/Sponsors.vue';
import Sphere from '@/components/Sphere.vue';
const VueScrollReveal = require('vue-scroll-reveal');'

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    Landing,
  },
});
</script>
