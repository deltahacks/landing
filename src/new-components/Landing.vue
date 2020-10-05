
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
    <div id="left">
      <h1 class="landing-title">
        DeltaHacks 7
      </h1>
      <h1 class="landing-subtitle">at McMaster University</h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Mlh from '@/assets/mlh.png';

export default Vue.extend({
  name: 'Landing',
  data() {
    return {
      Mlh,
    };
  },
});
</script>

<style>
.flex-container {
  font-family: 'Montserrat';
  display: flex;
  flex-direction: row;
  flex-direction: row-reverse;
  align-content: center;
  width: 90%;
  padding-top: 2%;
}

#left {
  flex: 1;
  text-align: left;
  padding-left: 8vw;
  padding-top: 5vh;
  /* background-image: url('../assets/landing-bg.svg'); */
}

.landing-title {
  font-size: 5em;
  color: white;
  font-weight: 600;
  margin-bottom: 0vh;
}

.landing-subtitle {
  margin-top: 0vh;
  font-size: 2.3em;
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
    padding-top: 12vh;
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
