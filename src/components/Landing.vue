
<template>
  <div class="flex-container">
    <a
      id="mlh-trust-badge"
      class="mlh-badge"
      href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white"
      target="_blank"
    >
      <img
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-white.svg"
        alt="Major League Hacking 2020 Hackathon Season"
        style="width:100%"
      />
    </a>
    <div id="particles-js"></div>
    <img class="main-planet" :src="Planet" />
    <div id="left">
      <h1 class="landing-title">
        Delta<span style="color:blue; font-weight: 300">Hacks</span>
        7 
      </h1>
      <img class="vi-back" :src="VI" />
      <div class="landing-left-container">
        <a
          v-if="!enteringName && !enteringEmail && !gotit"
          class="landing-button fade-in"
          @click="enteringName = true"
        >
          DH7 Mailing list
        </a>
        <!-- <a
          v-if="!enteringName && !enteringEmail && !gotit"
          class="landing-button fade-in"
          href="https://www.my.deltahacks.com"
        >Login</a> -->
        <!-- <a class="landing-button fade-in" href="/DH-Schedule.pdf">Schedule</a>
        <a class="landing-button fade-in" href="/DH-Challenges.pdf">Challenges</a>
        <a class="landing-button fade-in" href="/DH-Workshops.pdf">Workshops</a> -->
        <!-- <a
          v-if="!enteringName && !enteringEmail && !gotit"
          class="landing-button fade-in"
          v-scroll-to="'#sponsor'"
        >
          Sponsor
        </a>-->
        <div v-if="enteringName" class="email-group fade-in">
          <div class="email-button" @click="(enteringName = false), (enteringEmail = false)">
            <i
              class="fa fa-arrow-circle-o-left fa-3x"
              :style="{ alignSelf: 'center', marginRight: '19px', fontSize: '3.5em' }"
            />
          </div>
          <input
            type="text"
            placeholder="Your Name"
            id="email-input"
            v-model="name"
            required
            @keyup.enter="(enteringName = false), (enteringEmail = true)"
          />
          <div class="email-button" @click="(enteringName = false), (enteringEmail = true)">
            <i
              v-show="name.length >= 2"
              class="fa fa-arrow-circle-o-right fa-3x fade-in"
              :style="{ alignSelf: 'center', fontSize: '3.5em' }"
            />
          </div>
        </div>
        <form v-on:submit.prevent="handleSubmit">
          <div v-if="enteringEmail && !gotit" class="email-group">
            <div class="email-button" @click="(enteringName = true), (enteringEmail = false)">
              <i
                class="fa fa-arrow-circle-o-left fa-3x"
                :style="{ alignSelf: 'center', marginRight: '19px', fontSize: '3.5em' }"
              />
            </div>
            <input type="email" placeholder="Your email" id="email-input" v-model="email" required />
            <button type="submit" class="email-button">
              <i
                class="fa fa-arrow-circle-o-right fa-3x"
                :style="{ alignSelf: 'center', fontSize: '4.2em' }"
              />
            </button>
          </div>
        </form>
        <div
          v-if="gotit"
          class="fade-in"
          style="font-family: Montserrat; font-size: 30px; font-weight: 600"
        >Got it, thanks!</div>
        <span
          v-if="!enteringName && !enteringEmail && !gotit"
          class="landing-date"
        >McMaster University</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import 'particles.js';
import VI from '@/assets/vi.svg';
import Planet from '@/assets/planetpng.png';
import Mlh from '@/assets/mlh.png';
import axios from 'axios';

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
      Mlh,
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
    handleSubmit() {
      // Changed it to use query params bc post request wasn't working, most likely due to cors errors.

      // tslint:disable-next-line
      const email_address = this.$data.email;
      // tslint:disable-next-line
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

      const esc = encodeURIComponent;
      const query = Object.keys(params)
        // @ts-ignore
        .map((k) => esc(k) + '=' + esc(params[k]))
        .join('&');
      const url =
        'https://us-central1-mydeltahacks.cloudfunctions.net/addEmailToMailchimp' +
        '?' +
        query;
      fetch(url, { mode: 'cors' }).then((response) => {
        /* :) */
      });

      setTimeout(() => {
        this.gotit = false;
      }, 4000);
    },
  },
});
</script>

<style>
.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.4s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

#email-input {
  height: 45px;
  width: 350px;
  text-align: center;
  font-weight: 600;
  text-decoration: none;
  font-size: 18px;
  opacity: 0.99;
  color: white;
  border-radius: 30px;
  margin-right: 20px !important;
  outline: none;
  /* margin-right: 10px !important;
  margin-left: 10px !important; */
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.1s ease-in-out;
  z-index: 10000;
  border: none;
}

#email-input::placeholder {
  color: white;
  opacity: 0.5;
}

#email-input:focus {
  outline: none;
  border: none;
}
.email-group {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.email-button {
  border: 0;
  padding: 0;
  background: none;
  z-index: 1000;
  cursor: pointer;
}
.email-button > i {
  color: white;
}

.flex-container {
  font-family: 'Montserrat';
  display: flex;
  flex-direction: row;
  flex-direction: row-reverse;
  align-content: center;
  width: 90%;
  padding-top: 2%;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

#left {
  flex: 1;
  text-align: center;
  /* background-image: url('../assets/landing-bg.svg'); */
}

.landing-date {
  margin-top: 5vh;
  font-size: 1em;
  display: block;
  font-weight: 600;
}

.landing-title {
  font-size: 5em;
  color: white;
  padding-top: 15%;
  font-weight: 600;
}
.landing-left-mlh {
  margin: 2vh 0 0vh;
}
.landing-left-container {
  margin: -2vh 5vw 0;
  padding: 4vh 2vw 3vh;
  background: rgb(236, 240, 241, 0.2);
  /* background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0),
    rgba(255, 0, 0, 1)
  ); */
  border-radius: 40px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.mlh-logo {
  height: 20px;
  opacity: 0.7;
}
.mlh-button {
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  /* font-weight: 800; */
  opacity: 0.99;
  padding: 10px 12px;
  border-radius: 30px;
  /* margin-right: 10px !important; */
  /* margin-left: 10px !important; */
  transition: 0.2s ease-in-out;
  cursor: pointer;
  z-index: 99999;
  position: relative;
  color: silver;
}
.mlh-button:hover {
  color: white;
}
.mlh-button:hover > img {
  opacity: 1;
  transition: 0.4s;
}
.landing-button {
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  font-weight: 800;
  opacity: 0.99;
  padding: 10px 20px;
  color: rgba(255, 255, 255, 1);
  border-radius: 30px;
  margin-right: 10px !important;
  margin-left: 10px !important;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  transition: 0.1s ease-in-out;
  cursor: pointer;
  z-index: 99999;
  position: relative;
}

.landing-button:hover {
  color: white;
  background-color: rgb(236, 240, 241, 0.3);
  transition: 0.2s;
}
.landing-button:active {
  color: white;
  background-color: rgb(236, 240, 241, 0.6);
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
  height: 45%;
  padding-top: 10%;
  z-index: 1;
  object-fit: contain;
}

.mlh-badge {
  display: block;
  max-width: 100px;
  min-width: 60px;
  position: fixed;
  right: 50px;
  top: 0;
  width: 10%;
  z-index: 10000;
}

@media only screen and (max-width: 700px) and (min-width: 1200px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  #left {
    width: 100%;
    position: absolute;
    margin-top: 70%;
    padding: 0;
  }
  .landing-title {
    font-size: 2.8em;
  }
  .main-planet {
    width: 80%;
    height: 50%;
    align-self: center;
    padding: 0;
    padding-left: 10%;
    padding-top: 0%;
    z-index: 0;
  }
  #email-input {
    font-size: 18px;
    width: 70vw;
  }

  .landing-button {
    z-index: 1000;
    display: block;
    text-align: center;
    margin: 1.5vh auto;
  }
  .landing-left-mlh {
    margin: 3vh 0 0;
    padding: 0vh 0px 0vh;
  }

  .landing-left-container {
    margin-top: 5vh;
    padding: 15px 10px;
  }

  .email-group {
    width: 90%;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 1200px) {
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
    font-size: 2.8em;
  }
  .main-planet {
    width: 80%;
    height: 50%;
    align-self: center;
    padding: 0;
    padding-left: 10%;
    padding-top: 0%;
    z-index: 0;
  }
  #email-input {
    font-size: 18px;
    width: 70vw;
  }

  .landing-button {
    z-index: 1000;
    display: block;
    text-align: center;
    margin: 1.5vh auto;
  }
  .landing-left-mlh {
    margin: 3vh 0 0;
    padding: 0vh 0px 0vh;
  }

  .landing-left-container {
    margin-top: 5vh;
    padding: 15px 10px;
  }

  .email-group {
    width: 90%;
    margin: 0 auto;
  }
}
</style>