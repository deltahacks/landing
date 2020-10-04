<template>
<div>
  <p>This is the header components</p>
  <div class="back">
        <div class="grey-dh7-blob1">
        <div class="grey-dh7-blob1-inner">
          <div class="grey-dh7-blob1-navlink">
            <a>Schedule</a
            >&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;<a>Challenges</a>&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;<a
              >Workshops</a
            >
          </div>
        </div>
      </div><br>
      <div class="grey-dh7-blob2">
        <div class="grey-dh7-blob2-inner">
          <p style="font-size: 13px; font-weight: 600">
            HACKER APPLICATIONS DROPPING IN T-MINUS
          </p>
          <h1 style="font-size: 55px; margin: 0px">00 : 00 : 00</h1>
        </div>
      </div><br>
      <div class="grey-dh7-blob3">
        <div class="grey-dh7-blob3-inner">
          <p style="font-size: 20px; font-weight: 600; margin-bottom: 10px">
            DH7 MAILING LIST
          </p>
          <input class="grey-dh7-blob3-input" placeholder="Your Name" />
          <input class="grey-dh7-blob3-input" placeholder="Your Email" />
          <br />
          <button
            class="grey-dh7-blob3-button"
            onclick="alert('Wow you are on the waiting list lmaoo!')"
          >
            Submit
          </button>
        </div>
      </div>
      </div>
      </div>
</template>


<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
});
</script>

<style>
.back{
  background-color: #203a43;
  padding-left:200px;
  padding-top:20px;
  padding-bottom:20px;
}
p {
    text-align: center;
}
.grey-dh7-blob1 {
  clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 90% 100%, 0% 100%);
  background-color: #464646;
  width: 380px;
  height: 70px;
  margin-right: 200px !important ;
  /* margin-left: 300px; */
  /* align-items: center;
  text-align: center; */
  display: inline-flex;
}
.grey-dh7-blob1-inner {
  margin: auto 25px;
}
.grey-dh7-blob1-navlink {
  color: white;
  cursor: pointer !important;
}
.grey-dh7-blob2 {
  margin-top: 20px !important;
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
  background-color: #464646;
  width: 380px;
  height: 115px;
  margin-right: 200px !important ;
  color: white;
  /* margin-left: 300px; */
  /* align-items: center;
  text-align: center; */
  display: inline-flex;
}
.grey-dh7-blob2-inner {
  margin: 0 20px;
}
.grey-dh7-blob3 {
  margin-top: 20px !important;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%);
  background-color: #464646;
  width: 380px;
  height: 200px;
  margin-right: 200px !important ;
  padding: 0px;
  color: white;
  /* margin-left: 300px; */
  /* align-items: center;
  text-align: center; */
  display: inline-flex;
}
.grey-dh7-blob3-inner {
  margin: 0 0 0 0;
  padding: 0px;
}
.grey-dh7-blob3-input {
  margin: 5px 0 5px 30px;
  width: 300px;
  height: 35px;
  background-color: #333333;
  border: 0px;
  text-align: center;
  color: white !important;
  cursor: pointer;
  padding: 0px;
}
.grey-dh7-blob3-input::placeholder {
  color: #dcdcdc !important;
}
.grey-dh7-blob3-button {
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
  margin-left:30px;
  background-color: #333333;
  border: 0px;
  height: 35px;
  width: 100px;
  color: white;
  margin-top: 5px;
  cursor: pointer;
  padding: 0px;
}
</style>