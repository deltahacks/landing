import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
const VueScrollTo = require("vue-scrollto");
const VueTypedJs = require("vue-typed-js");

Vue.config.productionTip = false;

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 1500,
  easing: "ease",
  offset: -200,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true,
});

Vue.use(VueTypedJs);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
