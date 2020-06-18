import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import { Auth } from "aws-amplify";

Vue.use(VueRouter);

const noCheck = ["Login", "Register"];

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: () => import(/* webpackChunkName: "login" */ "../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import(/* webpackChunkName: "Register" */ "../views/Register.vue"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (noCheck.includes(to.name)) {
    next();
  } else {
    console.log(Vue.prototype.$user);
    if (Vue.prototype.$user) {
      next();
    } else {
      next({ name: "Login" });
    }
  }
});

export default router;
