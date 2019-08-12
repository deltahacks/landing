<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <Sponsors />
    <AboutUsStats />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Sponsors from '@/components/Sponsors.vue';
import AboutUsStats from '@/components/AboutUsStats.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    Sponsors,
    AboutUsStats,
  },
});
</script>
