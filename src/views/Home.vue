<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld  v-scroll-reveal.reset="{ delay: 100 }" msg="Welcome to Your Vue.js + TypeScript App" />
    <Sponsors/>
    <br>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Sponsors from '@/components/Sponsors.vue';
import VueScrollReveal from 'vue-scroll-reveal';

// Using ScrollReveal's default configuration
Vue.use(VueScrollReveal);

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    Sponsors,
  },
});
</script>
