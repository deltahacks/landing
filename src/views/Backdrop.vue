<template>
    <div id="app">
      <div><p>Implemented in plain old CSS right now - 5 divs</p></div>
        <div class="main b1"></div>
        <div class="main b2"></div>
        <div class="main b3"></div>
        <div class="main b4"></div>
        <div class="main b5"></div>
    </div>
</template>

<style scoped>
.main {
    width: 100vw;
    height: 100vh;
}

.b1 {
  background: rgb(37,36,64);
background: linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%);
}

.b2 {
  background: rgb(32,82,95);
background: linear-gradient(180deg, rgba(32,82,95,1) 0%, rgba(32,82,135,1) 100%);
}

.b3 {
background: rgb(32,82,115);
background: linear-gradient(180deg, rgba(32,82,135,1) 0%, rgba(32,82,175,1) 100%);
}
.b4 {
background: rgb(32,82,135);
background: linear-gradient(180deg, rgba(32,82,175,1) 0%, rgba(32,82,195,1) 100%);

}
.b5 {
background: rgb(32,82,205);
background: linear-gradient(180deg, rgba(32,82,195,1) 0%, rgba(32,82,225,1) 100%);
}
</style>


<script lang="ts">
// import Vue from "vue";

// export default Vue.extend({
// });
</script>
