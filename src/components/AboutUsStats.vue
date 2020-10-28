<template>
  <div class="container" id="aboutScroll">
    <div class="container-item hexes">
      <div id="desktop">
        <svg viewBox="0 0 900 500">
          <Hex
            v-for="(hex, index) in hexes"
            v-bind:key="index"
            :points="hex.desktop.points"
            :r="hex.desktop.r"
            :x="hex.desktop.x"
            :y="hex.desktop.y"
            :number="hex.number"
            :content="hex.content"
            :depth="hex.depth"
            :start_gradient="hex.start_gradient"
            :end_gradient="hex.end_gradient"
            :stroke="hex.stroke"
          />
        </svg>
      </div>
      <div id="mobile">
        <svg viewBox="0 0 500 700">
          <Hex
            v-for="(hex, index) in hexes"
            v-bind:key="index"
            :points="hex.mobile.points"
            :r="hex.mobile.r"
            :x="hex.mobile.x"
            :y="hex.mobile.y"
            :number="hex.number"
            :content="hex.content"
            :depth="hex.depth"
            :start_gradient="hex.start_gradient"
            :end_gradient="hex.end_gradient"
            :stroke="hex.stroke"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Hex from '@/new-components/Hex.vue';

export default Vue.extend({
  name: 'About',
  components: {
    Hex,
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
        this.hexes[2].number = response.total_commits + 1;
      };
      xhr.send(null);
    },
  },
  data() {
    return {
      firsthash: 'e917936d8a82b49cb4cef3fff1d8be732008ab18',
      lasthash: '',
      hexes: [
        {
          desktop: {
            points: '417.5,328 542.5,328 605,220 542.5,115.5 417.7,115.5 355,220',
            r: 125,
            x: 480,
            y: 220,
          },
          mobile: {
             points: '385,210 235,210 160,340 235,470 385,470 460,340',
            r: 150,
            x: 310,
            y: 340,
          },
          number: 800,
          content: 'Hackers',
          depth: 1,
          start_gradient: '#808080',
          end_gradient: '#808080',
          stroke: '#2bb4c4',
        },
        {
          desktop: {
            points: '252.5,194.95 327.5,194.95 365,130 327.5,65.05 252.5,65.05 215,130',
            r: 75,
            x: 290,
            y: 130,
          },
          mobile: {
            points: '328,35 253,35 215,100 253,165 327,165 365,100',
            r: 75,
            x: 290,
            y: 100,
          },
          number: 24,
          content: 'Hours',
          depth: 2,
          start_gradient: '#808080',
          end_gradient: '#808080',
          stroke: '#2bb4c4',
        },
        {
          desktop: {
            points: '260,331.96 320,331.96 350,280 320,228.04 260,228.04 230,280',
            r: 60,
            x: 290,
            y: 280,
          },
          mobile: {
            points: '120,388 60,388 30,440 60,492 120,492 150,440',
            r: 60,
            x: 90,
            y: 440,
          },
          number: 111,
          content: 'Commits',
          depth: 1,
          start_gradient: '#808080',
          end_gradient: '#808080',
          stroke: '#ed4d67',
        },
        {
          desktop: {
            points: '599.5,174.95 672.5,174.95 710,110 672.5,45.05 599.5,45.05 560,110',
            r: 75,
            x: 635,
            y: 110,
          },
          mobile: {
            points: '128,165 52,165 15,230 53,295 127,295 165,230',
            r: 75,
            x: 90,
            y: 230,
          },
          number: 200,
          content: 'Projects',
          depth: 2,
          start_gradient: '#808080',
          end_gradient: '#808080',
          stroke: '#f8d466',

        },
        // {
        //   desktop: {
        //     r: 75,
        //     x: 680,
        //     y: 130,
        //   },
        //   mobile: {
        //     r: 90,
        //     x: 130,
        //     y: 550,
        //   },
        //   number: 63,
        //   content: 'Schools',
        //   depth: 2,
        //   start_gradient: '#a97c50',
        //   end_gradient: '#2a3d90',
        // },
        {
          desktop: {
            points: '627.5,374.95 702.5,374.95 740,310 702.5,245.05 627.5,245.05 590,310',
            r: 75,
            x: 665,
            y: 310,
          },
          mobile: {
            points: '360,531 280,531 240,600 280,669 360,669 400,600',
            r: 80,
            x: 320,
            y: 600,
          },
          number: 55,
          content: 'Mentors',
          depth: 3,
          start_gradient: '#808080',
          end_gradient: '#808080',
          stroke: '#ed4d67',
        },
      ],
    };
  },
});
</script>

<style>
.hexes {
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