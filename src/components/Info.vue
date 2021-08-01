<template>
<div class="buttonbox">
    <form :action="b1Link">
        <input class="button tempFontFix" type="submit" :value="b1Text">
    </form>
    <form :action="b2Link">
        <input class="button tempFontFix" type="submit" :value="b2Text">
    </form>
    <form :action="b3Link">
        <input class="button tempFontFix" type="submit" :value="b3Text">
    </form>
</div>    
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
        b1Text: 'Challenges',
        b2Text: 'Info Packages',
        b3Text: 'Schedule',
        b1Link: 'https://deltahacks7.devpost.com/',
        b2Link: 'AttendeeInformation.pdf',
        b3Link: 'DH7Schedule.pdf',
    };
  },
});
</script>

<style scoped>
.tempFontFix{
  font-family: 'Montserrat'!important;
}
.buttonbox {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 4vmin), calc(100% - 4vmin) 100%, 0 100%);
  margin-top: 2vmin;
  padding: 1vmin;
  text-align: center;
  background-color: #464646;
  width: 20vmax;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
   box-sizing: border-box;
   min-width: 325px;
   min-height: 175px
}
.mailbox {
  margin-top: 20px;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%);
  background-color: #464646;
  width: 20vmax;
  height: 10.2vmax;
  padding: 0px;
  color: white;
  display: inline-flex;
  display: flex;
  flex-direction: column;
  min-width: 325px;
  min-height: 175px
}
.button {
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 2vmin), calc(100% - 2vmin) 100%, 0 100%);
  background-color: #272727;
  border: none;
  width: 80%;
  color: white;
  padding: 1.5vmin;
  cursor: pointer;
  margin: 1vmin 0 1vmin 0;
  font-size: calc(10px + 0.6vmin);
  font-weight: 550;
}
.button:hover {
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.2s;
}

@media only screen and (max-width: 700px) and (min-width: 100px) {
.buttonbox {
  width: 95%;
  margin-top: 38%;
  padding: 3vmin;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 10vmin), calc(100% - 10vmin) 100%, 0 100%);
}
.button {
    font-size: calc(10px + 2vmin);
    padding: 4vmin;
    margin: 2vmin 0 2vmin 0;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 5vmin), calc(100% - 5vmin) 100%, 0 100%);
}
}
</style>