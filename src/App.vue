<template>
  <div id="app">
    <nav>
      <router-link to="/peopleSpace">peopleSpace</router-link>
      <router-link to="/issNow">issNow</router-link>
      <router-link to="/issPass">issPass</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import PeopleSpace from "./PeopleSpace.vue";
import IssNow from "./IssNow.vue";
import IssPass from "./IssPass.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/peopleSpace",
    name: "peopleSpaceApp",
    component: PeopleSpace
  },
  {
    path: "/issNow",
    name: "issNowApp",
    component: IssNow
  },
  {
    path: "/issPass",
    name: "issPassApp",
    component: IssPass
  }
];

const router = new VueRouter({ routes });

export default {
  router
};
</script>

<style>
#app {
  font-size: 18px;
  font-family: "Roboto", sans-serif;
  color: blue;
}
</style>