<template>
  <div id="app">
    <nav>
      <router-link to="/peoplespace">peoplespace</router-link><!-- 
      --><router-link to="/issnow">issnow</router-link><!-- 
      --><router-link to="/isspass">isspass</router-link>
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
  /* margin-right: -5px; */
}

a:visited {
  color: white;
  text-decoration: none;
}

a:hover {
  background-color: lavender;
  color: mediumslateblue;
  text-decoration: none;
}

a:active {
  background-color: lavender;
  color: mediumslateblue;
  text-decoration: none;
}
.router-link-exact-active.router-link-active {
  background-color: lavender;
  color: mediumslateblue;
  text-decoration: none;
}
</style>
