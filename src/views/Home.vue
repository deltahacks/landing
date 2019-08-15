<template>
  <div class="home">
    <Landing />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Landing from '@/components/Landing.vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Sponsors from '@/components/Sponsors.vue';

export default Vue.extend({
  name: 'home',
  components: {
    HelloWorld,
    Landing,
  },
});
</script>
