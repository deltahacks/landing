<template>
  <div :class="['billboard', align]">
    <img :src="billboardPic" />
    <div class="content">
      <div :class="align">
        <h2 class="heading">{{ header }}</h2>
        <p v-html="body"></p>
        <form v-if="hasButton" :action="buttonLink">
          <input class="button" type="submit" :value="buttonText" />
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    align: {
      type: String,
      default: "right",
    },
    header: {
      type: String,
      default: "Placeholder Header",
    },
    body: {
      type: String,
      default: `At DeltaHacks, we believe change comes from dreaming big. Each year we enable over 800 students from across Canada, working hard over 36 hours, to bring their big ideas to life. Our team works diligently year round to provide a welcoming atmosphere to all of our participants. DeltaHacks gives you the platform to make an idea a reality, whether it be with a team, or on your own. Unleash your creativity and make something great, we'll handle the rest! Make big ideas a reality at DeltaHacks VI!`,
    },
    hasButton: {
      type: Boolean,
      default: true,
    },
    buttonText: {
      type: String,
      default: "DeltaHacks VII Button",
    },
    billboardPic: {
      // Must pass in a loaded image
      type: Object,
      default: "@/new_assets/billboard.svg",
    },
    buttonLink: String,
  },
});
</script>

<style scoped>
.content {
  margin-left: 17%;
  margin-top: -35%;
  width: 70vw;
}

.billboard {
  width: 110vw;
  margin-left: -10%;
}

.right {
  text-align: right;
  padding: 5%;
  text-overflow: ellipsis;
}

.left {
  text-align: left;
  padding: 5%;
  text-overflow: ellipsis;
}

.center {
  text-align: center;
  padding: 5%;
  text-overflow: ellipsis;
}

.heading {
  color: rgb(56, 56, 56);
  padding-left: 1%;
  padding-right: 1%;
  font-size: 3.5vw;
  font-weight: 600;
}

.button {
  color: white;
  outline: none;
  border: none;
  padding: 1vmin 2vmin;
  font-size: 2.7vmin;
  font-weight: 550;
  background-color: rgb(30, 30, 30);
  cursor: pointer;
  margin: 1.5vh 0;
  -webkit-appearance: none;
}
.button:hover {
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.2s;
}
.button:active {
  background-color: rgba(0, 0, 0, 0.25);
  transition: 0.2s;
}
.mbutton {
  color: white;
  outline: none;
  border: none;
  padding: 2vmin 3vmin 2vmin 3vmin;
  font-size: 4.5vmin;
  font-weight: 550;
  background-color: rgb(30, 30, 30);
  cursor: pointer;
  -webkit-appearance: none;
  display: none;
}
.mbutton:hover {
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.2s;
}
.mbutton:active {
  background-color: rgba(0, 0, 0, 0.25);
  transition: 0.2s;
}

p {
  color: rgb(85, 85, 85);
  font-size: 1.5vw;
}

@media screen and (max-width: 720px) {
  p {
    color: rgb(85, 85, 85);
    font-size: 2vw;
  }

  .billboard {
    width: 130vw;
    margin-left: -100%;
  }

  .content {
    margin-left: 17%;
    margin-top: -35%;
    width: 80vw;
  }
}
</style>
