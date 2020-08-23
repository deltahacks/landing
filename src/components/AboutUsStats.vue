<template>
  <div class="container" id="aboutScroll">
    <div class="container-item bubbles">
      <div id="desktop">
        <svg viewBox="0 0 900 500">
          <Bubble
            v-for="(bubble, index) in bubbles"
            v-bind:key="index"
            :r="bubble.desktop.r"
            :x="bubble.desktop.x"
            :y="bubble.desktop.y"
            :number="bubble.number"
            :content="bubble.content"
            :depth="bubble.depth"
            :start_gradient="bubble.start_gradient"
            :end_gradient="bubble.end_gradient"
          />
        </svg>
      </div>
      <div id="mobile">
        <svg viewBox="0 0 500 700">
          <Bubble
            v-for="(bubble, index) in bubbles"
            v-bind:key="index"
            :r="bubble.mobile.r"
            :x="bubble.mobile.x"
            :y="bubble.mobile.y"
            :number="bubble.number"
            :content="bubble.content"
            :depth="bubble.depth"
            :start_gradient="bubble.start_gradient"
            :end_gradient="bubble.end_gradient"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Bubble from '@/components/Bubble.vue';

export default Vue.extend({
  name: 'About',
  components: {
    Bubble,
  },
  mounted() {
    this.getlasthash();
  },
  methods: {
    getlasthash() {
      const url =
        'https://api.github.com/repos/deltahacks/landing_v2/git/refs/heads/master';
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = (e) => {
        const response = JSON.parse(xhr.responseText);
        this.lasthash = response.object.sha;
        this.getcommit(this.lasthash);
      };
      xhr.send(null);
    },
    getcommit(last: string) {
      const url =
        'https://api.github.com/repos/deltahacks/landing_v2/compare/' +
        this.firsthash +
        '...' +
        last;
      const xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      xhr.onload = (e) => {
        const response = JSON.parse(xhr.responseText);
        this.bubbles[2].number = response.total_commits + 1;
      };
      xhr.send(null);
    },
  },
  data() {
    return {
      firsthash: 'e917936d8a82b49cb4cef3fff1d8be732008ab18',
      lasthash: '',
      bubbles: [
        {
          desktop: {
            r: 125,
            x: 480,
            y: 220,
          },
          mobile: {
            r: 150,
            x: 310,
            y: 340,
          },
          number: 800,
          content: 'Hackers',
          depth: 1,
          start_gradient: '#9bcd6d',
          end_gradient: '#651b3a',
        },
        {
          desktop: {
            r: 75,
            x: 280,
            y: 130,
          },
          mobile: {
            r: 75,
            x: 230,
            y: 100,
          },
          number: 24,
          content: 'Hours',
          depth: 2,
          start_gradient: '#625254',
          end_gradient: '#e3388b',
        },
        {
          desktop: {
            r: 60,
            x: 290,
            y: 280,
          },
          mobile: {
            r: 60,
            x: 70,
            y: 380,
          },
          number: 111,
          content: 'Commits',
          depth: 1,
          start_gradient: '#a97c50',
          end_gradient: '#2a3d90',
        },
        {
          desktop: {
            r: 75,
            x: 145,
            y: 250,
          },
          mobile: {
            r: 75,
            x: 90,
            y: 230,
          },
          number: 200,
          content: 'Projects',
          depth: 2,
          start_gradient: '#625254',
          end_gradient: '#e3388b',
        },
        {
          desktop: {
            r: 75,
            x: 680,
            y: 130,
          },
          mobile: {
            r: 90,
            x: 130,
            y: 550,
          },
          number: 63,
          content: 'Schools',
          depth: 2,
          start_gradient: '#a97c50',
          end_gradient: '#2a3d90',
        },
        {
          desktop: {
            r: 75,
            x: 680,
            y: 300,
          },
          mobile: {
            r: 80,
            x: 340,
            y: 600,
          },
          number: 55,
          content: 'Mentors',
          depth: 3,
          start_gradient: '#000',
          end_gradient: '#fff',
        },
      ],
    };
  },
});
</script>

<style>
.bubbles {
  position: relative;
  padding-top: 0;
}

@media only screen and (max-width: 700px) {
  #mobile {
    display: block;
  }
  #desktop {
    visibility: hidden;
    width: 0px;
  }
}

@media only screen and (min-width: 701px) {
  #mobile {
    display: none;
  }
  #desktop {
    display: block;
  }
}
</style>