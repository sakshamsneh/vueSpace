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
import Vue from "vue";
import VueRouter from "vue-router";

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
nav {
  background-color: blueviolet;
  font-size: 110%;
  text-transform: uppercase;
  font-weight: 800;
}

a:link {
  color: white;
  text-decoration: none;
  padding: 5px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  color: white;
  background-color: lavender;
  color: mediumslateblue;
}

a:active {
  color: white;
  text-decoration: none;
}
</style>
