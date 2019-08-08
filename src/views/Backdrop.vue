<template>
<div class="app">
	<div class="section1" id="d1">
      <h1>{{scr}}</h1>
            </div>
            </div>
</template>
<style scoped>
.section1{
background: linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%);
  /* background-color: rgb(69, 111, 225); */
  height:5000px;
}
h1 {
  position: fixed;
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
    this.scr=window.scrollY;
  var y = (window.scrollY || window.pageYOffset)
   if(y<440){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%)";}
  if(y>440){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(32,82,95,1) 0%, rgba(32,82,115,1)"+(y/20)+ "%)";}
      if(y>880){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(32,82,115,1) 0%, rgba(32,82,135,1)"+(y/20)+ "%)";}
      if(y>1320){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(32,82,135,1) 0%, rgba(32,82,155,1)"+(y/20)+ "%)";}
    if(y>1760){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(32,82,155,1) 0%, rgba(32,82,175,1)"+(y/20)+ "%)";}
  if(y>2200){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(32,82,175,1) 0%, rgba(32,82,195,1)"+(y/35)+ "%)";}
  if(y>2640){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(32,82,195,1) 0%, rgba(32,82,205,1)"+(y/44)+ "%)";}
       if(y>3080){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(32,82,205,1) 0%, rgba(32,82,225,1)"+(y/44)+ "%)";}
       if(y>3520){
     document.getElementById("d1").style.background = "linear-gradient(180deg, rgba(32,82,225,1) 0%, rgba(32,82,245,1)"+(y/44)+ "%)";}
}},
created () {
  window.addEventListener('scroll', this.handleScroll);
},
destroyed () {
  window.removeEventListener('scroll', this.handleScroll);
},
});

</script>