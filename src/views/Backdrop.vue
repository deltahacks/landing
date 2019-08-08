<template>
<div id="app">
	<div class="wrapper" id="d1">
      <h1>{{scr}}</h1>
            </div>
            </div>
</template>
<style scoped>
#d1{
background: linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%);
}
#d2,#d3,#d4,#d5{
background:black;
}
.wrapper {
  background-color: blue;
  position: relative;
  display: block;
   background-blend-mode:overlay;
     padding-top: 500vw;
}
.wrapper h1 {
  position: absolute;
  top: 10%;
  width: 70%;
  left: 0px;
  margin-left: 15%;
  text-align: center;
  display: block;
  font-family: Josefin Sans;
}

</style>
<script>
import Vue from 'vue';


export default Vue.extend({
  name: "app",
  data() {
		return{
         scrolled: false,
      description: 'Type any colour name, rgb, hex or hsl in the input below and see what happens!',
		bgc:{
			backgroundColor: ''
    },
    fin: "background: linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%);",
    scr: 0,
    col:'',
    }
	},
  methods: {
  handleScroll () {
    this.scrolled = window.scrollY > 0;
    this.scr=window.scrollY;
    var a=1;
    document.getElementById("d1").style.background="linear-gradient(to bottom, #252440"+(this.scr/10)+"%,#20525F"+(this.scr/20)+"%,#205273"+(this.scr/30)+"%,#205287"+(this.scr/40)+"%,#20529B"+(this.scr/50)+"%, #2052AF"+(this.scr/60)+"%, #2052C3"+(this.scr/70)+"%, #2052CD"+(this.scr/80)+"%, #2052E1"+(this.scr/90)+"%, #2052F5"+(this.scr/100)+"%)";
    // document.getElementById("d2").style.opacity =590-(this.scr/(590)) 
}},
created () {
  window.addEventListener('scroll', this.handleScroll);
},
destroyed () {
  // window.removeEventListener('scroll', this.handleScroll);
},
});

</script>