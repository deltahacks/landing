
<template>
<div id="b">
  <img id="bruh" src="../assets/cyber/title_nostars.svg" />
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
    <div id="left">
      <h1 class="landing-title">
        <span id="delta-title">Delta<span id="hacks-title">Hacks</span> 7</span>
      </h1>
      <h1 class="landing-subtitle">at McMaster University</h1>
      <Header/>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '@/new-components/Header.vue';
import 'particles.js';
import Mlh from '@/assets/mlh.png';

declare global {
  interface Window {
    particlesJS: any;
  }
}

export default Vue.extend({
  name: 'particles',
  components: {
    Header,
  },
  mounted() {
    this.initParticles();
  },
  data() {
    return {
      Mlh,
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

#delta-title {
  font-weight: 600;
}
#hacks-title {
  font-weight: 200;
}

#bruh {
  position: absolute;
  z-index: 1;
  background-image: url('../assets/cyber/title_nostars.svg');
  background-repeat: no-repeat;
  width: 99vmax;
  height: 50vmax;
}

.flex-container {
  font-family: 'Montserrat';
  display: flex;
  flex-direction: row;
  flex-direction: row-reverse;
  align-content: center;
  width: 100%;
  height: 87vh;
  padding-top: 2%;
  z-index: 1000;
}

#particles-js {
  width: 100%;
  height: 55%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

#left {
  z-index: 3;
  flex: 1;
  text-align: left;
  padding-left: 10vw;
  padding-top: 0.5vh;
}

.landing-title {
  font-size: 4.5vw;
  color: white;
  font-weight: 600;
  margin-bottom: 0vh;
}

.landing-subtitle {
  margin-top: 0vh;
  margin-bottom: 0vh;
  font-size: 1.8vw;
  font-weight: 300;
}

.landing-left-mlh {
  margin: 2vh 0 0vh;
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
    padding: 1vh;
  }
  
  .landing-title {
    font-size: 4em;
    color: white;
    font-weight: 600;
    margin-bottom: 0vh;
  }
  
  #left {
    flex: 1;
    text-align: center;
    padding-left: 0;
  }
  
  .landing-subtitle {
    margin-top: 0vh;
    font-size: 1.4em;
    font-weight: 300;
  }
  
  .landing-left-mlh {
    margin: 3vh 0 0;
    padding: 0vh 0px 0vh;
  }

}
@media only screen and (max-width: 1200px) {
  .flex-container {
    display: flex;
    flex-direction: column;
    padding: 1vh;
  }

  #left {
    flex: 1;
    text-align: center;
    padding-left: 0;
    padding-top: 12vh;
  }

  .landing-title {
    font-size: 2.5em;
    color: white;
    font-weight: 600;
    margin-bottom: 0vh;
  }
  
  .landing-subtitle {
    margin-top: 0vh;
    font-size: 1.2em;
    font-weight: 300;
  }

  .landing-left-mlh {
    margin: 3vh 0 0;
    padding: 0vh 0px 0vh;
  }

}
</style>
