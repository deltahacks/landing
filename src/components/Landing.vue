
<template>
  <div class="flex-container">
    <div id="particles-js"> </div>
    <div id="left">
      <h1 class="landing-title">
        Delta<span style="font-weight: 300">Hacks</span> VI
      </h1>
      <img class="vi-back" :src="VI" />
      <a class="act-btn" href="#">Apply</a>
      <a class="act-btn" href="#">Sponsor</a>
    </div>
    <div id="right"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import 'particles.js';
import VI from '@/assets/vi.svg';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default Vue.extend({
  name: 'particles',
  mounted() {
    this.initParticles();
  },
  data() {
    return {
      VI,
    };
  },
  methods: {
    initParticles() {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 200,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: '#ffffff',
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#ffffff',
            },
            polygon: {
              nb_sides: 5,
            },
            image: {
              src: 'img/github.svg',
              width: 50,
              height: 50,
            },
          },
          opacity: {
            value: 0.48927153781200905,
            random: false,
            anim: {
              enable: true,
              speed: 0.3,
              opacity_min: 0,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: false,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.1,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detect_on: 'window',
          events: {
            onhover: {
              enable: true,
              mode: 'bubble',
            },
            onclick: {
              enable: false,
              mode: 'push',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 200,
              size: 3,
              duration: 3,
              opacity: 1,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.5,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    },
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap');

.flex-container {
  font-family: 'Montserrat';
}

#particles-js {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#left {
  width: 50%;
  height: 100%;
  float: left;
  /* background-image: url('../assets/landing-bg.svg'); */
}

.landing-title {
  font-size: 5em;
  color: white;
  margin-top: 35%;
  font-weight: 700;
}

/* .act-btn:hover {
  box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px #1b50b3 !important;
  background: #1b50b3 !important;
  color: #b5cefb !important;
}

.act-btn {
  font-family: Montserrat;
  font-weight: bold;
  -webkit-box-pack: center !important;
  -ms-flex-pack: center !important;
  -webkit-box-align: center !important;
  -ms-flex-align: center !important;
  margin: 0px !important;
  position: relative !important;
  display: -webkit-inline-box !important;
  display: -moz-inline-box !important;
  display: -ms-inline-flexbox !important;
  display: -webkit-inline-flex !important;
  display: inline-flex !important;
  -webkit-align-items: center !important;
  align-items: center !important;
  -webkit-justify-content: center !important;
  justify-content: center !important;
  height: 40px !important;
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  padding-left: 16px !important;
  padding-right: 16px !important;
  border: none !important;
  border-radius: 4px !important;
  cursor: pointer !important;
  outline: none !important;
  text-decoration: none !important;
  -moz-box-sizing: border-box !important;
  box-sizing: border-box !important;
  -ms-touch-action: manipulation !important;
  touch-action: manipulation !important;
  -webkit-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
  background: #1865f2 !important;
  color: #ffffff !important;
  margin-right: 10px !important;
} 
*/

.act-btn {
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-family: Montserrat;
  opacity: 0.99;
  padding: 10px 20px;
  color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  margin-right: 20px !important;
  background-color: rgba(81, 169, 185);
}

.act-btn:hover {
  color: white;
  background-color: rgb(178, 215, 221, 0.5);
  transition: 0.2s;
}
.act-btn:active {
  color: white;
  background-color: rgb(178, 215, 221, 1);
  transition: 0.2s;
}

.vi-back {
  display: none;
  width: 15%;
  opacity: 0.5;
  position: relative;
}
</style>