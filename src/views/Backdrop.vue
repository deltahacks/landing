<template>
<div>
<section id="container">
	<div>
    <div class="full"><h1>Div1</h1></div>
    <div class="full"><h1>Div2</h1></div>
    <div class="full"><h1>Div3</h1></div>
    <div class="full"><h1>Div4</h1></div>
    <div class="full"><h1>Div5</h1></div>
	</div>
</section>
</div>
</template>
<style scoped>
h1{
padding-top: 500px;
}
.full{
  height: 500px;
  text-align: center;
    vertical-align: middle
}
section {
  /* background: linear-gradient(to bottom, #B721FF, #2AF598, #fec051, #FEE140, #FA709A); */
    background: linear-gradient(to bottom, rgba(37,36,64,1), rgba(32,82,95,1), rgba(32,82,135,1) , rgba(32,82,175,1) , rgba(32,82,195,1));
  background-size: 100%;
  background-repeat: no-repeat;
}


#container {
  background-color: #FFF;
  /* margin: 80px 10%; */
  /* padding: 30px 60px; */
  border-radius: 20px;
  box-shadow: 0 3px 26px 0 rgba(0, 0, 0, 0.2);
  height: 500vh;
}

main {
  background-color: #f7f7f7;
  /* padding: 20px; */
  border-radius: 10px;
  color: #6b6b6b;
  /* margin: 40px 0; */
}

</style>
<script>
import Vue from 'vue';


export default Vue.extend({});
//   name: "app",
//   data() {
// 		return{
//          scrolled: false,
//       description: 'Type any colour name, rgb, hex or hsl in the input below and see what happens!',
// 		bgc:{
// 			backgroundColor: ''
//     },
//     fin: "background: linear-gradient(180deg, rgba(37,36,64,1) 0%, rgba(32,82,95,1) 100%);",
//     scr: 0,
//     col:'',
//     }
// 	},
//   methods: {
//   handleScroll () {
//     this.scrolled = window.scrollY > 0;
//     this.scr=window.scrollY;
//     var a=1;
//     document.getElementById("d1").style.background="linear-gradient(to bottom, #252440"+(this.scr/10)+"%,#20525F"+(this.scr/20)+"%,#205273"+(this.scr/30)+"%,#205287"+(this.scr/40)+"%,#20529B"+(this.scr/50)+"%, #2052AF"+(this.scr/60)+"%, #2052C3"+(this.scr/70)+"%, #2052CD"+(this.scr/80)+"%, #2052E1"+(this.scr/90)+"%, #2052F5"+(this.scr/100)+"%)";
//     // document.getElementById("d2").style.opacity =590-(this.scr/(590)) 
// }},
// created () {
//   window.addEventListener('scroll', this.handleScroll);
// },
// destroyed () {
//   // window.removeEventListener('scroll', this.handleScroll);
// },
// });

</script>