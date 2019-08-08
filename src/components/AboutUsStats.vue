<template>
  <div class="aligner">
    <div class="aligner-item vector-container">
      <svg width="400" height="400" transform="translate(0,60)">
        <circle cx="200" cy="200" r="200" fill="#5799a9"  />
        <text x="50%" y="40%" text-anchor="middle" fill="white" font-size="140px" font-family="Arial" dy=".3em">700
        </text>
        <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="70px" font-family="Arial" dy=".3em">Hackers
        </text>
      </svg>
      <svg width="300" height="300" transform="translate(-300,-380)" >
        <circle cx="150" cy="150" r="100" fill="#5799a9"  />
        <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="100px" font-family="Arial" dy=".3em">36</text>
        <text x="50%" y="65%" text-anchor="middle" fill="white" font-size="35px" font-family="Arial" dy=".3em">Hours</text>
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

.aligner {
  background-color: #356672;
  display: flex;
  align-items: center;
  justify-content: center;
}

.vector-container {
  width: 500px;
  height: 700px;
  position: relative;
}
.blue {
  background-color: #5799a9;
}
</style>