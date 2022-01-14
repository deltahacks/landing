<template>
  <div class="newbutton">
    <Button
      id="top-button"
      buttonText="Attendee Package"
      buttonLink="https://drive.google.com/file/d/1SyjFJFF4kRcehynNkD9GApXtZgzkcyue/view?usp=sharing"
    />
    <Button
      id="middle-button"
      buttonText="Event Schedule"
      buttonLink="https://drive.google.com/file/d/1xfTDyh5FFJ5SY2zAwJwOzK7prgng10Z-/view?usp=sharing"
    />
    <Button id="bottom-button" buttonText="Login" buttonLink="https://my.deltahacks.com/" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Info from "@/components/Info.vue";
import Button from "@/components/Button.vue";

export default Vue.extend({
  data() {
    return {
      enteringInfo: false,
      email: "",
      name: "",
      gotit: false,
      current: new Date(),
      target: new Date(1606003200),
      hours: 99,
      minutes: 99,
      seconds: 99,
      spad: "",
      mpad: "",
    };
  },
  components: {
    Info,
    Button,
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
        "https://us-central1-mydeltahacks.cloudfunctions.net/addEmailToMailchimp" +
        "?" +
        query;
      fetch(url, { mode: "cors" }).then((response) => {
        /* :) */
      });

      setTimeout(() => {
        this.gotit = false;
      }, 4000);
    },
  },
  mounted() {
    setInterval(
      () => {
        const dateFuture: Date = new Date(1606066031000);
        const dateNow: Date = new Date();

        let delta = Math.abs(dateFuture.valueOf() - dateNow.valueOf()) / 1000;

        // calculate (and subtract) whole hours
        const hours = Math.floor(delta / 3600);
        this.hours = hours;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        const minutes = Math.floor(delta / 60) % 60;
        this.minutes = minutes;
        this.mpad = this.minutes < 10 ? "0" : "";
        delta -= minutes * 60;

        // what's left is seconds
        const seconds = delta % 60; // in theory the modulus is not required
        this.seconds = Math.floor(seconds);
        this.spad = this.seconds < 10 ? "0" : "";
      },
      0,
      1000
    );
  },
});
</script>

<style>
#top-button {
  padding-right: 5vw;
}
#middle-button {
  padding-right: 3vw;
}

#bottom-button {
  padding-right: 5vw;
}

.newbutton {
  z-index: -80;
  width: 70%;
  padding-top: 5vw;
}

.fade-in {
  opacity: 1;
  animation-name: fadeInOpacity;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 0.4s;
}

#apply-link {
  color: white;
  text-decoration: none;
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
  height: 5.5vw;
  color: white;
  display: inline-flex;
  min-width: 325px;
  min-height: 90px;
}
.apps-due-inner {
  margin: 0 1vw;
}

#apps-due-header {
  font-size: max(0.7vw, 11.5px);
  font-weight: 600;
}
#countdown {
  font-size: max(22px, 1.2vw);
  margin: 0px;
  margin-top: -0.5vw;
}

#mail-text {
  text-align: left;
  margin-top: 3%;
  margin-left: 6%;
  font-weight: 600;
  font-size: calc(12px + 0.5vw);
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
  min-height: 175px;
}
#apply-text {
  text-align: left;
  margin-top: 5%;
  margin-bottom: 5%;
  margin-left: 6%;
  font-weight: 600;
  font-size: calc(12px + 0.5vw);
}
.apply {
  clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%);
  background-color: #464646;
  width: 20vmax;
  height: 8vmax;
  padding: 0px;
  color: white;
  display: inline-flex;
  display: flex;
  flex-direction: column;
  min-width: 325px;
  min-height: 15px;
}
.input-field {
  margin: 1% 0 0.5% 6%;
  width: 85%;
  height: 1.85vw;
  min-height: 30px;
  background-color: #333333;
  border: 0px;
  text-align: center;
  color: white !important;
  cursor: pointer;
  padding: 0px;
  font-size: calc(7px + 0.5vw);
}

input::placeholder {
  color: #dcdcdc !important;
  font-family: "Montserrat";
}

input:focus::placeholder {
  color: transparent;
}

.submit-button {
  clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
  margin-left: 6%;
  background-color: #272727;
  border: 0px;
  height: 2.2vw;
  width: 6vw;
  color: white;
  margin-top: 1.5%;
  cursor: pointer;
  padding: 0px;
  font-size: calc(10px + 0.3vw);
  font-weight: 550;
  min-height: 40px;
  min-width: 90px;
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
.input-box {
  margin-top: 1.2vh;
}
.confirmation-box {
  margin: auto;
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
}

@media only screen and (max-width: 1250px) {
  .apps-due {
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
    background-color: #464646;
    width: 35%;
    height: 9vw;
    color: white;
    display: inline-flex;
  }
  .apps-due-inner {
    margin: 0 1vw;
  }

  #apps-due-header {
    font-weight: 600;
  }
  #countdown {
    margin: 0px;
    margin-top: -0.5vw;
    padding-left: 0.2vmax;
  }

  #mail-text {
    text-align: left;
    margin-top: 2%;
    margin-left: 5%;
    font-weight: 600;
    font-size: 20px;
  }
  .mailbox {
    margin-top: 20px;
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%);
    background-color: #464646;
    width: 35%;
    height: 185px;
    padding: 0px;
    color: white;
    display: inline-flex;
    display: flex;
    flex-direction: column;
  }
  #apply-text {
    text-align: left;
    margin-top: 2%;
    margin-left: 5%;
    font-weight: 600;
    font-size: 20px;
  }
  .apply {
    clip-path: polygon(0% 0%, 100% 0%, 100% 80%, 90% 100%, 0% 100%);
    background-color: #464646;
    width: 35%;
    height: 100px;
    padding: 0px;
    color: white;
    display: inline-flex;
    display: flex;
    flex-direction: column;
  }
  .input-field {
    margin: 1.5% 0 0.8% 5%;
    width: 86%;
    height: 35px;
    background-color: #333333;
    border: 0px;
    text-align: center;
    color: white !important;
    cursor: pointer;
    padding: 0px;
    font-size: 13px;
  }
  .input-field::placeholder {
    color: #dcdcdc !important;
  }
  .submit-button {
    clip-path: polygon(0% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%);
    margin-left: 5%;
    background-color: #272727;
    border: 0px;
    height: 35px;
    width: 120px;
    color: white;
    margin-top: 1%;
    cursor: pointer;
    padding: 0px;
    font-size: 17px;
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
  .input-box {
    margin-top: 1.2vh;
  }
  .confirmation-box {
    margin: auto;
    font-family: Montserrat;
    font-size: 30px;
    font-weight: 600;
  }
}
/* ------------------------------- For Mobile devices --------------------------------- */
@media only screen and (max-width: 700px) and (min-width: 100px) {
  .navbar,
  .apps-due,
  .mailbox {
    width: 95%;
  }

  .navbar-navlink {
    font-size: 3.7vw !important;
  }
  #apps-due-header {
    font-size: 3.2vw !important;
  }

  #countdown {
    font-size: 12vw !important;
  }

  .apps-due {
    display: none;
  }
  .mailbox {
    margin-top: 38%;
  }
}

/* ------------------------------- For Mobile devices (Button) --------------------------------- */

@media screen and (max-width: 1100px) {
  .newbutton {
    z-index: -80;
    width: 80%;
    top: 38vw;
    left: 3vw;
    position: absolute;
  }
}

@media screen and (max-width: 720px) {
  .newbutton {
    z-index: -80;
    width: 80%;
    top: 45vw;
    left: 3vw;
    position: absolute;
  }
}
</style>
