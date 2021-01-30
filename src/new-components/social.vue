<template>
  <div :class='container'>
      <h2 class="heading"> {{ header }}</h2>
      <div class = "container">
        <img class='logo' id='facebook' src="../assets/facebook.png" @click="goFacebook">
        <img class='logo' id='twitter' src="../assets/twitter.png" @click="goTwitter">
        <img class='logo' id='instagram' src="../assets/instagram.png" @click="goInstagram">
      </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    props: {
        header: {
            type: String,
            default: 'Connect With Us',
        },
        buttonLink: String,
    },

    methods: {
        goFacebook() {
            window.open('https://www.facebook.com/thedeltahacks/');
        },
        goTwitter() {
            window.open('https://twitter.com/deltahacks?lang=en');
        },
        goInstagram() {
            window.open('https://www.instagram.com/deltahacks/?hl=en');
        },
    },
});
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    margin-left: 25vw;
    margin-right: 25vw;
    background: gray;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vw), calc(100% - 5vw) 100%, 5vw 100%, 0 calc(100% - 5vw));
}

.heading {
    text-align: center;
    color: black;
    font-size: 4.5vmin;
    font-weight: 600;
    margin: 0;
    padding-bottom: 2vmin;
}

.logo {
    margin-top: 3vw;
    margin-bottom: 3vw;
    flex-shrink: 1;
    height: 9vw;
    align-self: center;
}
#facebook {
    filter: invert() hue-rotate(320deg) saturate(3.2) brightness(160%) drop-shadow(0 0 0.6vw #ffba48);
}
#twitter {
    filter: hue-rotate(-25deg) saturate(3) brightness(110%) drop-shadow(0 0 0.6vw #40ccdb);
}
#instagram {
    filter: brightness(125%) saturate(1.5) drop-shadow(0 0 0.8vw #d8327b);
}
</style>