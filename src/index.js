import Vue from 'vue';
import App from './App.vue';
// import PeopleSpace from './PeopleSpace.vue';
// import IssNow from './IssNow.vue';
// import IssPass from './IssPass.vue';

new Vue({
  el: '#app',
  // component: {
  //   PeopleSpace, IssNow, IssPass
  // },
  render: h => h(App),
});

// const routes = [
//   {
//     path: '/peopleSpace',
//     name: 'peopleSpaceApp',
//     component: peopleSpaceApp
//   },
//   {
//     path: '/issNow',
//     name: 'issNowApp',
//     component: issNowApp
//   },
//   {
//     path: '/issPass',
//     name: 'issPassApp',
//     component: issPassApp
//   },
// ];

// const router = new VueRouter({ routes });

// var app = new Vue({
//   el: '#app',
//   router
// })
