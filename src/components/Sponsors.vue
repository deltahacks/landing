
<template>
  <div class="container">
    <h1>PAST SPONSORS</h1>
    <hr>
    <p>Interested in sponsoring? Contact us at <a href="mailto:sponsorship@deltahacks.com">sponsorship@deltahacks.com</a></p>
      <h1 class="level">LEVEL 1</h1>
      <div class="square level--1">
        <div><a href="https://jobs.td.com/en-CA/campus-recruitment/technology/"><img src="https://d33wubrfki0l68.cloudfront.net/6e1756dae8e5dcbfc76ce11111de63ebd5caa630/96736/img/sponsors/td.jpg"></a></div>
        <div><img src="https://d33wubrfki0l68.cloudfront.net/bfea261bb3cd8907917ae7697046d3564eea043f/0d064/img/sponsors/arcelormittal.png"></div>
        <div><img src="https://d33wubrfki0l68.cloudfront.net/69362d963adbdcff20fdd1c0b7fd856ad56d8009/403d0/img/sponsors/rogers.png"></div>
        <div><img src="https://d33wubrfki0l68.cloudfront.net/0e4c0d2948408b89ddf105e62b646c5fcdef7ccf/0aa29/img/sponsors/microsoft.png"></div>
        <div><img src="https://d33wubrfki0l68.cloudfront.net/c886ec835d208031833aa739318e694375b36e0a/b95ba/img/sponsors/innovationfactory.gif"></div>
        <div><img src="https://d33wubrfki0l68.cloudfront.net/bfaf84ccc2a7cba0a12b6b565a52f0165de0228b/27b5d/img/sponsors/loyaltyone.png"></div>
        <div><img src="https://d33wubrfki0l68.cloudfront.net/2930acce9df0cd572eb2a4613fda77f3b752529a/54371/img/sponsors/rbc.png"></div>
      </div>
      
      <h1 class="level">LEVEL 2</h1>
      <div class="square level--2">
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>
        <div><img src="https://via.placeholder.com/200x100"></div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Sponsors',
  components: {}
})
</script>

<style>
/*
.flex-container {
  display: flex;
  flex-wrap: nowrap;
  background-color: DodgerBlue;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 100%;
  margin: 10px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
*/

hr {
  width: 50%;
  color: red;
}

img {
  user-select: none;

}

::selection {
  color: white;
  background: grey;
}

.container {
  padding-top: 30px;
  padding-bottom: 50px;
  width: 75%;
  margin: 0 auto;
  background-color: #2052F5;
  color: white;
}

.square {
  display: -webkit-flex;
  -webkit-flex-direction: row;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap; 
  
  margin-bottom: 40px;
}

.level {
  margin: 0 auto;
}

div > h1.level:nth-of-type(2) {
  margin-top: 40px;
}

div > p > a {
  color: red;
}

.level--1 {
  width: 100%;
}
.level--1 > div {
  margin: 0 auto;
  margin-top: 25px;
  line-height: 25px;
}

.level--1 > div:hover {
  animation: shake 0.5s; 
}

.level--1 > div > img {
  max-width: 300px;
  max-height: 300px;
}

.level--2 > div {
  margin: 0 auto;
  margin-top: 25px;
  line-height: 30px;
}

.level--2 > div:hover {
  animation: shake 0.5s; 

}

@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
</style>

