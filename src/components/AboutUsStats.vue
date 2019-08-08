<template>
  <div class="container">
    <div class="container-item bubbles">
      <svg width="360" height="360" transform="translate(0,60)">
        <circle cx="180" cy="180" r="180" fill="#5799a9"  />
        <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="140px" font-family="Arial" dy=".3em">700
        </text>
        <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="70px" font-family="Arial" dy=".3em">Hackers
        </text>
      </svg>
      <svg width="200" height="200" transform="translate(-130,-310)" >
        <circle cx="100" cy="100" r="100" fill="#5799a9"  />
        <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="80px" font-family="Arial" dy=".3em">36</text>
        <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="30px" font-family="Arial" dy=".3em">Hours</text>
      </svg>
      <svg width="100" height="100" transform="translate(-240,-200)" >
        <circle cx="50" cy="50" r="50" fill="#5799a9"  />
        <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="25px" font-family="Arial" dy=".3em">36</text>
        <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="10px" font-family="Arial" dy=".3em">Hours</text>
      </svg>
      <svg width="200" height="200" transform="translate(-550,-120)" >
        <circle cx="100" cy="100" r="100" fill="#5799a9"  />
        <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="80px" font-family="Arial" dy=".3em">36</text>
        <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="30px" font-family="Arial" dy=".3em">Hours</text>
      </svg>
      <svg width="200" height="200" transform="translate(400,-520)" >
        <circle cx="100" cy="100" r="100" fill="#5799a9"  />
        <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="80px" font-family="Arial" dy=".3em">36</text>
        <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="30px" font-family="Arial" dy=".3em">Hours</text>
      </svg>
      <svg width="200" height="200" transform="translate(180,-300)" >
        <circle cx="100" cy="100" r="100" fill="#5799a9"  />
        <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="80px" font-family="Arial" dy=".3em">36</text>
        <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="30px" font-family="Arial" dy=".3em">Hours</text>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About Us',
  components: {},
});
</script>

<style>

.container {
  background-color: #356672;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bubbles {
  width: 500px;
  height: 700px;
  position: relative;
}
.blue {
  background-color: #5799a9;
}
</style>