
<template>
  <div class="flex-container">
    <div id="particles-js">
      <div id="left">
        <h1 class="landing-title">
          Delta
          <span style="font-weight: lighter">Hacks</span> VI
        </h1>
        <a class="act-btn" href>Sign Up</a>
        <a class="act-btn" href>Sponsors</a>
      </div>
      <div id="right"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import 'particles.js';

export default {
  name: 'particles',
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 150,
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
            value: 5,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 0,
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
              enable: true,
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
};
</script>

<style>
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
  background-image: url('../assets/landing-bg.svg');
}

.act-btn {
  text-decoration: none;
  color: black;
  padding: 2% 5%;
  background: white;
  border-radius: 5%;
  display: inline-block;
  margin: 0 3%;
}

.act-btn:hover {
  opacity: 0.8;
}

.landing-title {
  font-size: 5em;
  color: white;
  margin-top: 30%;
}

/* .flex-container > div {
    background: transparent;
  width: 100%;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
} */
</style>

