import Vue from "vue";

import App from "./components/App.vue";

import router from "./router";
import { firebaseApp } from "./firebaseApp";

import store from "./store";

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch("signIn", user);
    router.push("/dashboard");
  } else {
    router.replace("/signin");
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
