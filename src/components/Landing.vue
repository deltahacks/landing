
<template>
  <div class="flex-container">
    <div id="particles-js"></div>
    <img class="main-planet" :src="Planet" />
    <div id="left">
      <h1 class="landing-title">
        Delta<span style="font-weight: 300">Hacks</span> VI
      </h1>
      <img class="vi-back" :src="VI" />
      <a
        v-if="!enteringName && !enteringEmail && !gotit"
        class="act-btn"
        @click="enteringName = true"
      >
        Mailing list
      </a>
      <a v-if="!enteringName && !enteringEmail && !gotit" class="act-btn">
        Sponsor
      </a>
      <div v-if="enteringName" class="email-group">
        <input
          type="text"
          placeholder="Your Name"
          id="email-input"
          v-model="name"
          @keyup.enter="(enteringName = false), (enteringEmail = true)"
        />
        <div
          id="email-submit"
          @click="(enteringName = false), (enteringEmail = true)"
        >
        <transition name="fade">
          <i
            v-show="name.length >= 2"
            class="fa fa-arrow-circle-o-right fa-3x"
            :style="{ alignSelf: 'center' }"
          ></i>
        </transition>
        </div>
      </div>
      <transition name="fade">
        <div v-if="gotit" style="font-family: Montserrat; font-size: 30px;">
          Got it, thanks!
        </div>
      </transition>
      <form v-on:submit.prevent="handleSubmit">
        <div v-if="enteringEmail && !gotit" class="email-group">
          <input
            type="email"
            placeholder="Your email"
            id="email-input"
            v-model="email"
            required
          />
            <button type="submit" id="email-submit">
            <i
              class="fa fa-arrow-circle-o-right fa-4x"
              :style="{ alignSelf: 'center' }"
            ></i>
            </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import 'particles.js';
import VI from '@/assets/vi.svg';
import Planet from '@/assets/main_planet.svg';
const axios = require('axios');
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
      Planet,
      enteringName: false,
      enteringEmail: false,
      email: '',
      name: '',
      gotit: false,
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
    handleSubmit() {
      // Changed it to use query params bc post request wasn't working, most likely due to cors errors.
      const email_address = this.$data.email;
      const name_input = this.$data.name;
      this.name = '';
      this.email = '';

      const params = {
        email: email_address,
        name: name_input,
      };

      this.gotit = true;
      this.enteringName = false;
      this.enteringEmail = false;
      console.log('N word');

      const esc = encodeURIComponent;
      const query = Object.keys(params)
        // @ts-ignore
        .map((k) => esc(k) + '=' + esc(params[k]))
        .join('&');
      const url =
        'https://us-central1-mydeltahacks.cloudfunctions.net/addEmailToMailchimp' +
        '?' +
        query;
      fetch(url, { mode: 'cors' }).then(function(response) {});

      setTimeout(() => {
        this.gotit = false;
      }, 4000);
    },
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,600,700&display=swap');

#email-input {
  height: 45px;
  width: 350px;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  font-family: Montserrat;
  opacity: 0.9;
  border: 1px solid rgb(58, 140, 155);
  font-weight: bold;
  color: white;
  border-radius: 30px;
  margin-right: 20px !important;
  background-color: rgba(81, 169, 185);
  outline: none;
}

#email-input::placeholder {
  color: white;
  opacity: 0.5;
}

#email-input:focus {
  outline: none;
  border: 2px solid rgb(128, 241, 203);
}
.email-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#email-submit {
  border:0;
  padding: 0;
  background:none;
  z-index: 1000;
  cursor: pointer;
}
#email-submit > i {
  color: white;
}

.flex-container {
  font-family: 'Montserrat';
  display: flex;
  flex-direction: row;
  flex-direction: row-reverse;
  width: 90%;
  padding-top: 2%;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

#left {
  flex: 1;
  /* background-image: url('../assets/landing-bg.svg'); */
}

.landing-title {
  font-size: 5em;
  color: white;
  padding-top: 25%;
  font-weight: 700;
}

.act-btn {
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-family: Montserrat;
  opacity: 0.99;
  padding: 10px 20px;
  color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  margin-right: 20px !important;
  background-color: rgba(81, 169, 185);
  transition: 0.1s ease-in-out;
  cursor: pointer;
  z-index: 10000;
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

.main-planet {
  width: 40%;
  height: 60%;
  padding-top: 7%;
  z-index: 1;
  position: relative;
}

@media only screen and (max-width: 800px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  #left {
    width: 100%;
    position: absolute;
    margin-top: 50%;
    padding: 0;
  }
  .landing-title {
    font-size: 3.5em;
  }
  .main-planet {
    width: 60%;
    align-self: center;
    padding: 0;
    padding-left: 10%;
    height: 60%;
    z-index: 0;
  }
  #email-input {
    font-size: 18px;
    width: 70vw;
  }
  .act-btn {
    z-index: 1000;
  }
}

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter  /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.fade2-enter-active,
.fade2-leave-active {
  transition: opacity 0.2s;
}
.fade2-enter, .fade2-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>