<template>
  <div :class="['about-container', left ? 'left' : 'right']">
    <h2 class="info-title">{{ heading }}</h2>
    <div class="about-description">
      <form :action="link1" style="display:inline; margin-right: 2vw;">
        <input class="about-button" type="submit" :value="button1" />
      </form>
      <form :action="link2" style="display:inline; margin-right: 2vw;">
        <input class="about-button" type="submit" :value="button2" />
      </form>
      <form :action="link3" style="display:inline; margin-right: 2vw;">
        <input class="about-button" type="submit" :value="button3" />
      </form>
      <form :action="link4" style="display:inline;">
        <input class="about-button" type="submit" :value="button4" />
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  props: {
    link1: String,
    link2: String,
    link3: String,
    link4: String,
    button1: String,
    button2: String,
    button3: String,
    button4: String,
    sub: String,
    text: String,
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
  padding: 5%;
  width: 78%;
  text-overflow: ellipsis;
}

.about-description {
  padding: 1% 3%;
  border-radius: 25px;
  margin: 2.5vh inherit;
  z-index: 40;
  border-radius: 50px;
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  background: rgba(255, 255, 255, 0.15);
  padding-bottom: 2vh;
  text-align: center;
  justify-content: center;
  align-items: center;
}

.left {
  color: white;
  text-align: left;
  padding: 5%;
  width: 90%;
  text-overflow: ellipsis;
}

.right p {
  line-height: 22px;
  margin-left: 25%;
}

.info-title {
  padding: 1% 3%;
  font-size: 35px;
  font-weight: 800;
  margin: 0;
}

.about-button {
  outline: none;
  padding: 10px 20px;
  color: white;
  font-size: 17px;
  font-weight: 800;
  background-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  border: none;
  border-radius: 20px;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  -webkit-appearance: none;
  margin: 1.5vh 0;
  min-width: 23.2%;
}

.about-button:hover {
  color: white;
  background-color: rgb(236, 240, 241, 0.3);
  transition: 0.2s;
}

.about-button:active {
  color: white;
  background-color: rgb(236, 240, 241, 0.6);
  transition: 0.2s;
}

@media screen and (max-width: 720px) {
  .right {
    width: 70%;
  }
  .right p {
    margin-left: 0;
  }
  .about-container {
    margin-top:30px;
    width: 100%;
    padding: 0;
    text-align: center;
  }
  .about-container > h2 {
    padding: 0 5%;
  }
  .about-description {
    margin-right: 4vw;
    margin-left: 4vw;
  }
  .about-description > p {
    padding: 0 5%;
  }
  .about-container > button {
    margin: 0 5%;
  }
}

p {
  font-size: 20px;
}

p:not(.blurb_sub) {
  text-align: center;
}
</style>