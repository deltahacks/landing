<template>
  <div id="app">
    <div>
      <parallax :fixed="true">
        <img style="display:float; margin-top:0" src="../assets/Backimg/gradient1.png">
      </parallax>
      </div>
      <div>
        <h1>First</h1>
        </div>
            <div>
      <parallax>
        <img style="display:float; margin-top:0" src="../assets/Backimg/gradient2.png">
      </parallax>
      </div>
          <div>
      <parallax>
        <img style="display:float; margin-top:0" src="../assets/Backimg/gradient3.png">
      </parallax>
      </div>
          <div>
      <parallax>
        <img style="display:float; margin-top:0" src="../assets/Backimg/gradient4.png">
      </parallax>
      </div>
          <div>
      <parallax>
        <img style="display:float; margin-top:0" src="../assets/Backimg/gradient5.png">
      </parallax>
      </div>
    </div>
  
</template>

<script>
import Vue from 'vue'
import Parallax from "vue-parallaxy";

export default {
  name: 'app',
  components: {
    Parallax
  }
}
</script>

<style>
h1{
  float: center;
}
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
