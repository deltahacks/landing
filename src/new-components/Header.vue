<template>
  <div class="back">
    <br />
    <div class="apps-due">
      <div class="apps-due-inner">
        <p id="apps-due-header">
          HACKER APPLICATIONS DROPPING IN T-MINUS
        </p>
        <h1 id="countdown">00 : 00 : 00</h1>
      </div>
    </div>
    <br />
    <div class="mailbox">
      <form v-on:submit.prevent="handleSubmit">
        <div id="mail-text">Mailing List Signup</div>
        <div v-if="!enteringInfo && !gotit" class="input-box">
          <input
            type="text"
            placeholder="Your Name"
            class="input-field"
            v-model="name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            class="input-field"
            v-model="email"
            required
          />
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
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      enteringInfo: false,
      email: '',
      name: '',
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

      this.name = '';
      this.email = '';

      const params = {
        email: email_address,
        name: name_input,
      };

      this.gotit = true;
      this.enteringInfo = false;

      const esc = encodeURIComponent;
      const query = Object.keys(params)
        // @ts-ignore
        .map((k) => esc(k) + '=' + esc(params[k]))
        .join('&');
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
.apps-due {
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
  background-color: #464646;
  width: 20vw;
  height: 10.5vh;
  color: white;
  display: inline-flex;
}
.apps-due-inner {
  margin: 0 1vw;
}

#apps-due-header {
  font-size: 0.72vw;
  font-weight: 600;
}
#countdown {
  font-size: 2.72vw;
  margin: 0px;
  margin-top: -1vh;
}

#mail-text {
  text-align: left;
  margin-top: 1vh;
  margin-left: 1.2vw;
  font-weight: 600;
  font-size: 1vw;
}
.mailbox {
  margin-top: 20px !important;
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%);
  background-color: #464646;
  width: 20vw;
  height: 19vh;
  padding: 0px;
  color: white;
  display: inline-flex;
  display: flex;
  flex-direction: column;
}
.input-field {
  margin: 0.2vw 0 0.1vw 1.2vw;
  width: 17vw;
  height: 3.5vh;
  background-color: #333333;
  border: 0px;
  text-align: center;
  color: white !important;
  cursor: pointer;
  padding: 0px;
  font-size: 0.8vw;
}
.input-field::placeholder {
  color: #dcdcdc !important;
}
.submit-button {
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
  margin-left: 1.2vw;
  background-color: #272727;
  border: 0px;
  height: 4vh;
  width: 6vw;
  color: white;
  margin-top: 0.3vw;
  cursor: pointer;
  padding: 0px;
  font-size: 0.8vw;
  font-weight: 550;
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
  margin-top: 1.2vh;
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