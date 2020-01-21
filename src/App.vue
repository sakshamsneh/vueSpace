<template>
  <div id="app">
    <nav>
      <router-link to="/peoplespace">peoplespace</router-link>
      <router-link to="/issnow">issnow</router-link>
      <router-link to="/isspass">isspass</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import PeopleSpace from "./PeopleSpace.vue";
import IssNow from "./IssNow.vue";
import IssPass from "./IssPass.vue";
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/peoplespace",
    name: "peoplespace",
    component: PeopleSpace
  },
  {
    path: "/issnow",
    name: "issnow",
    component: IssNow
  },
  {
    path: "/isspass",
    name: "isspass",
    component: IssPass
  },
  {
    path: "/",
    redirect: "/peoplespace"
  },
  {
    path: "*",
    redirect: "/"
  }
];

const router = new VueRouter({ routes: routes });

export default {
  router
};
</script>

<style>
nav {
  background-color: var(--primary-color);
  font-size: 110%;
  text-transform: uppercase;
  font-weight: 800;
}

nav a:link {
  color: var(--header-text-color);
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-right: -5px;
}

nav a:visited {
  color: var(--header-text-color);
  text-decoration: none;
}

nav a:hover {
  background-color: var(--accent-color);
  color: blueviolet;
  text-decoration: none;
}

nav .router-link-exact-active.router-link-active {
  background-color: var(--secondary-color);
  color: blueviolet;
  text-decoration: none;
}
</style>
