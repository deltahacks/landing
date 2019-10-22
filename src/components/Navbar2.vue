<template>
  <div class="nav-box">
    <a href="https://www.my.deltahacks.com" class="right-button">Login</a>
    <div class="rounded-box">
      <a href="https://deltahacks.com" id="title" class="heading">
        Delta<span style="font-weight: 300">Hacks</span>
        VI
      </a>
      <h1 id="name" class="heading">
        <!-- {{ first }}<span style="font-weight: 300">{{ last }}</span> -->
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Navbar2',
  components: {},
  data() {
    return {
      dhs: ['DH VI', 'DH V', 'DH IV', 'DH III', 'DH II'],
      current: 'DH VI',
      drawer: null,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
      first: 'Welcome',
      last: '',
    };
  },
  methods: {
    tst() {
      console.log('tst_error');
    },
  },
  async beforeMount() {
    // console.log('mounted');
    // const genderStatus = await this.checkGenderInput(appEmail);
  },
});
</script>
<style scoped src='../assets/css/navbar.css'>
</style>
