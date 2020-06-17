import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/iview.js";

import Amplify, { Auth } from "aws-amplify";
let awsconfig = {};
awsconfig.Auth = {
  userPoolId: "ap-northeast-1_wu7DIYmET",
  userPoolWebClientId: "3c0bcdgbu87c3jg8chfj56ogcf",
};
Amplify.configure(awsconfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

Auth.currentAuthenticatedUser().catch(() => {
  router.push({ name: "Login" });
});
