<template>
  <div class="home">
    <h1>Hello, World!</h1>
  </div>
</template>

<script lang="ts">
//Use this page to test out your components
import Vue from 'vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Sponsors from '@/components/Sponsors.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    Sponsors,
  },
});
</script>
