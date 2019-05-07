import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "./components/Dashboard.vue";
import Signin from "./components/Signin.vue";
import Signup from "./components/Signup.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/dashboard", component: Dashboard },
    { path: "/signin", component: Signin },
    { path: "/signup", component: Signup }
  ]
});
