<template>
  <div class="app blend">
    <div class="scroll">
      <Landing />Example component in scroll
    </div>
    <div class="gradient" id="d1">
      <h1>{{scr}}</h1>
    </div>
  </div>
</template>
<style scoped>
.blend {
  background-blend-mode: overlay;
}
.scroll {
  top: 20px;
  height: 7000px;
}
.gradient {
  /* background-color: rgb(69, 111, 225); */
  background-image: linear-gradient(
    180deg,
    rgba(37, 36, 64, 1) 0%,
    rgba(32, 82, 95, 1) 100%
  );
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
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
import Landing from '@/components/Landing.vue';

export default Vue.extend({
  name: 'app',
  components: {
    Landing,
  },
  data() {
    return {
      scr: 0,
    };
  },
  methods: {
    handleScroll() {
      this.scr = window.scrollY;
      const y = window.scrollY || window.pageYOffset;
      if (y < 440) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(37,36,64,1), rgba(32,65,95,1)' +
          Math.floor((-100 / 440) * y + 100) +
          '%, rgba(32,82,95,1) 100%)';
      } else if (y < 840) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,65,95,1), rgba(32,82,95,1)' +
          Math.floor((-1 / 4) * y + 210) +
          '%, rgba(32,82,115,1) 100%)';
      } else if (y < 1504) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,95,1), rgba(32,82,115,1)' +
          Math.floor((-25 / 166) * y + 226) +
          '%, rgba(32,82,135,1) 100%)';
      } else if (y < 2300) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,115,1), rgba(32,82,135,1)' +
          Math.floor((-25 / 199) * y + 288) +
          '%, rgba(32,82,155,1) 100%)';
      } else if (y < 3100) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,135,1), rgba(32,82,155,1)' +
          Math.floor((-1 / 8) * y + 388) +
          '%, rgba(32,82,175,1) 100%)';
      } else if (y < 4600) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,155,1), rgba(32,82,185,1)' +
          Math.floor((-1 / 9) * y + 444) +
          '%, rgba(32,82,215,1) 100%)';
        /*
      } else if (y < 3800) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,155,1), rgba(32,82,175,1)' +
          Math.floor((-1 / 7) * y + 542) +
          '%, rgba(32,82,195,1) 100%)';
      } else if (y < 4600) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,175,1), rgba(32,82,195,1)' +
          Math.floor((-1 / 8) * y + 575) +
          '%, rgba(32,82,205,1) 100%)';
*/
      } else if (y < 5000) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,185,1), rgba(32,82,215,1)' +
          Math.floor((-1 / 4) * y + 1250) +
          '%, rgba(32,82,235,1) 100%)';
      } else if (y < 5500) {
        document.getElementById('d1')!.style.backgroundImage =
          'linear-gradient(180deg, rgba(32,82,215,1), rgba(32,82,235,1)' +
          Math.floor((-1 / 5) * y + 1100) +
          '%, rgba(125,152,249,1) 100%)';
      } else {
        document.getElementById('d1')!.style.opacity = String(
          (-1 / 500) * y + 12
        );
      }
      if (y < 5500) {
        document.getElementById('d1')!.style.opacity = '1';
      }
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