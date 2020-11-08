<template>
  <div class="back">
    <br />
    <!-- <div class="apps-due">
      <div class="apps-due-inner">
        <p id="apps-due-header" style="font-size: 1.6em; font-weight: 600">
          HACKER APPLICATIONS DROPPING IN T-MINUS
        </p>
        <h1 id="countdown" style="font-size: 5em; margin-left: 3vw;">00 : 00 : 00</h1>
      </div>
    </div> -->
    <!-- <br /> -->
    <div class="mailbox">
      <!-- <a
        v-if="!enteringInfo && !gotit"
        class="mailing-button fade-in"
        @click="enteringInfo = true"
      >
        DH7 Mailing list
      </a> -->
      <form v-on:submit.prevent="handleSubmit">
        <div v-if="enteringInfo && !gotit" class="input-box">
          <p class="mailing-list-header">DH7 Mailing list</p>
          <br>
          <input
            type="text"
            placeholder="Your Name"
            class="input-field"
            v-model="name"
            required
          />
          <br>
          <input
            type="email"
            placeholder="Your Email"
            class="input-field"
            v-model="email"
            required
          />
          <br>
          <button type="submit" class="submit-button">Submit</button>
        </div>
      </form>
      <div
        v-if="gotit"
        class="fade-in confirmation-box"
      >
        Got it, thanks!
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      enteringInfo: true,
      email: "",
      name: "",
      gotit: false,
    };
  },
  methods: {
    handleSubmit() {
      // Changed it to use query params bc post request wasn't working, most likely due to cors errors.

      // tslint:disable-next-line
      const email_address = this.$data.email;
      // tslint:disable-next-line
      const name_input = this.$data.name;

      this.name = "";
      this.email = "";

      const params = {
        email: email_address,
        name: name_input,
      };

      this.gotit = true;
      this.enteringInfo = false;

      const esc = encodeURIComponent;
      const query = Object.keys(params)
        // @ts-ignore
        .map((k) => esc(k) + "=" + esc(params[k]))
        .join("&");
      const url =
        'https://us-central1-mydeltahacks.cloudfunctions.net/addEmailToMailchimp' +
        '?' +
        query;
      fetch(url, { mode: 'cors' }).then((response) => {
        /* :) */
      });

      setTimeout(() => {
        this.gotit = false;
      }, 4000);
    },
  },
});
</script>

<style>

p {
  text-align: center;
}
.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.4s;
}

@keyframes fadeInOpacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.back{
  margin-left:40px!important;
}
.navbar {
  clip-path: polygon(0% 0%, 100% 0%, 100% 30%, 90% 100%, 0% 100%);
  background-color: #464646;
  width: 370px;
  height: 70px;
  display: inline-flex;
}
.navbar-inner {
  margin: auto 25px;
}
.navbar-navlink {
  color: white;
  cursor: pointer !important;
}
.mailing-list-header{font-size: 3em;
padding-bottom: 0px!important;
margin-bottom: 0px!important;
}

.apps-due {
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
  background-color: #464646;
  /* width: 40vw;
  height: 30vh; */
    width: 800px;
  height: auto;
  color: white;
  display: inline-flex;
}
#apps-due-header{
  padding-bottom: 0px!important;
  margin-bottom: 0px!important;
}
#countdown{
    padding-top: 0px!important;
  margin-top: 10px!important;
  }
.apps-due-inner {
  margin-top: 5vh;
  margin-left:4vw;
    margin-right:4vw;
    margin-bottom: 2vh;
}
.mailbox {
  margin-top: 20px !important;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%);
  background-color: #464646;
  /* width: 370px;
  height: 200px; */
  height: auto;
  /* width: auto; */
  width: 800px;
  padding: 0px;
  color: white;
  display: inline-flex;
}
.input-field {
  margin-left: 3vw;
  margin-top: 0;
  margin-right:3vw;
  margin-bottom: 30px;
  width: 26.5vw;
  height: 5vh;
  background-color: #333333;
  border: 0px;
  text-align: center;
  color: white !important;
  cursor: pointer;
  padding: 0px;
  font-size: 1.6em;
}
.input-field::placeholder {
  color: #dcdcdc !important;
}
.submit-button {
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
  margin-left:  3vw;
  margin-bottom: 3vh;
  background-color: #333333;
  border: 0px;
  height: 5vh;
  width: 10vw;
  color: white;
  margin-top: 5px;
  cursor: pointer;
  padding: 0px;
  font-size: 1.6em;
}
.mailing-button {
  font-size: 20px;
  font-weight: 600;
  margin: auto;
  border: 2px solid white;
  border-radius: 30px;
  padding: 20px;
}
.mailing-button:hover {
  background-color: gray;
  cursor: pointer;
}
.input-box{
  margin-top: 5vh;
  margin-left:4vw;
    margin-right:4vw;
    margin-bottom: 2vh;
}
.confirmation-box{
  margin: auto;
  font-family: Montserrat; 
  font-size: 30px; 
  font-weight: 600;
}


/* ------------------------------- For Mobile devices --------------------------------- */
@media only screen and (max-width: 700px) and (min-width: 100px) {
.navbar, .apps-due, .mailbox {
  width: 95%;
}

.navbar-navlink{
  font-size: 3.7vw !important;
}
#apps-due-header{
  font-size: 3.2vw !important;
}

#countdown{
  font-size:12vw !important;
}

}
</style>