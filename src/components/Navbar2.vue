<template>
  <div class="nav-box">
    <a href="https://www.my.deltahacks.com" class="right-link">Login</a>
    <!-- <div class="dropdown mobile">
      <button class="dropbtn mobile" @click="show = !show">
        <img
          src="../assets/hamburger.png"
          alt
          style="height: 20px; width: 20px;"
          :class="{ invert: !scrolled }"
        />
      </button>
      <transition name="fade" mode="out-in">
        <div class="dropdown-content mobile" style="right:0;" v-show="show">
          <a v-scroll-to="'#aboutScroll'" id="aboutDrop" class="active browser"
            >ABOUT</a
          >
        </div>
      </transition>
    </div> -->
    <div class="rounded-box">
      <a href="https://deltahacks.com" id="title" class="heading">
        Delta<span style="font-weight: 300">Hacks</span>
        7
      </a>
      <a class="heading link" v-scroll-to="'#footer'" @scroll="handleScroll">
        Contact
      </a>
      <a class="heading link" v-scroll-to="'#sponsor'" @scroll="handleScroll">
        Sponsors
      </a>
      <a class="heading link" v-scroll-to="'#faq1'" @scroll="handleScroll">
        FAQ
      </a>
      <a class="heading link" v-scroll-to="'#blurb-2'" @scroll="handleScroll">
        About
      </a>
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
      show: false,
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
