<template>
  <div :class="['about-container', left ? 'left' : 'right']">
    <h2>{{ heading }}</h2>
    <div class="about-description">
      <p>{{ description }} </p>
      <p>{{ more_text }}</p>
    </div>
    <button id="about-button">More Info</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      x: 1,
    };
  },
  props: {
    left: Boolean,
    right: Boolean,
    heading: {
      default: 'This is a sample header',
      type: String,
    },
    description: {
      default:
        'This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text. \
                This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text. \
                This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text. \
                This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text. \
                This is sample body text. This is sample body text. This is sample body text. This is sample body text. This is sample body text.',
      type: String,
    },

    more_text: {
      default: 'More text here. More text here. More text here',
      type: String,
    },
  },
});
</script>

<style scoped>
.right {
  color: white;
  text-align: right;
  padding: 10%;
  width: 70%;
  text-overflow: ellipsis;
}

.left {
  color: white;
  text-align: left;
  padding: 10%;
  width: 70%;
  text-overflow: ellipsis;
}

.about-container > h2 {
  font-size: 35px;
  font-weight: 600;
}

.about-description > p {
  line-height: 22px;
}

#about-button {
  outline: none;
  width: 180px;
  margin-top: 17px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  background-color: rgba(81, 169, 185);
  border: 1px solid rgb(65, 137, 150);
  border-radius: 20px;
  height: 40px;
  transition: 0.1s ease-in-out;
  cursor: pointer;
}

#about-button:hover {
  color: white;
  background-color: rgb(178, 215, 221, 0.5);
  transition: 0.2s;
}

#about-button:active {
  color: white;
  background-color: rgb(178, 215, 221, 1);
  transition: 0.2s;
}

@media screen and (max-width: 720px) {
  .about-container {
    width: 100%;
    padding: 0;
  }
  .about-container > h2 {
    padding: 0 5%;
  }
  .about-description > p {
    padding: 0 5%;
  }
  .about-container > button {
    margin: 0 5%;
  }
}
</style>