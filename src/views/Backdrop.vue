<template>
<div class="app blen">
  	<div class="section" id="d1"><h1>{{scr}}</h1></div>
    <div class="section" id="d2"><a href="#d3">D2, Next -> d3</a></div>
    <div class="section" id="d3"><a href="#d4">D3, Next -> d4</a></div>
    <div class="section" id="d4"><a href="#d5">D4, Next -> d5</a></div>
    <div class="section" id="d5"><a href="#d6">D5, Next -> d6</a></div>
    <div class="section" id="d6"><a href="#d7">D6, Next -> d7</a></div>
    <div class="section" id="d7"><a href="#d8">D7, Next -> d8</a></div>
    <div class="section" id="d8"><a href="#d9">D8, Next -> d9</a></div>
    <div class="section" id="d9"></div>
    </div>
</template>
<style scoped>
.blen {
   background-blend-mode: overlay;
}
.section {
  /* background-color: rgb(69, 111, 225); */
  background: linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%);
  height:100vh;
}
h1 {
  position: fixed;
  top: 10%;
  width: 70%;
  left: 0px;
  margin-left: 15%;
  text-align: center;
  display: block;
  font-family: Josefin Sans;
}

</style>
<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app',
  data() {
    return{
      scrolled: false,
      description: 'Type any colour name, rgb, hex or hsl in the input below and see what happens!',
      bgc: {
        backgroundColor: '',
      },
      fin: 'background: linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%);',
      scr: 0,
      col: '',
    };
  },
  methods: {
    handleScroll() {
      this.scr = window.scrollY;
      const y = (window.scrollY || window.pageYOffset);
      if (y < 440) {
        document.getElementById('d1')!.style.background = 'linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%)'; }
      if (y > 440) {
        document.getElementById('d2')!.style.background = 'linear-gradient(180deg, rgba(32,82,95,1) 0%, rgba(32,82,115,1)' + (y / 12.8) + '%)'; }
      if (y > 840) {
        document.getElementById('d3')!.style.background = 'linear-gradient(180deg, rgba(32,82,115,1) 0%, rgba(32,82,135,1)' + (y / 23.44) + '%)'; }
      if (y > 1504) {
        document.getElementById('d4')!.style.background = 'linear-gradient(180deg, rgba(32,82,135,1) 0%, rgba(32,82,155,1)' + (y / 38.4) + '%)'; }
      if (y > 2300) {
        document.getElementById('d5')!.style.background = 'linear-gradient(180deg, rgba(32,82,155,1) 0%, rgba(32,82,175,1)' + (y / 54) + '%)'; }
      if (y > 3100) {
        document.getElementById('d6')!.style.background = 'linear-gradient(180deg, rgba(32,82,175,1) 0%, rgba(32,82,195,1)' + (y / 69) + '%)'; }
      if (y > 3800) {
        document.getElementById('d7')!.style.background = 'linear-gradient(180deg, rgba(32,82,195,1) 0%, rgba(32,82,205,1)' + (y / 84) + '%)'; }
      if (y > 4600) {
        document.getElementById('d8')!.style.background = 'linear-gradient(180deg, rgba(32,82,205,1) 0%, rgba(32,82,225,1)' + (y / 96) + '%)'; }
      if (y > 5000) {
        document.getElementById('d9')!.style.background = 'linear-gradient(180deg, rgba(32,82,225,1) 0%, rgba(32,82,245,1)' + (y / 114) + '%)'; }
    },
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});

</script>