const peopleSpaceUrl = 'http://api.open-notify.org/astros.json';
const issNowUrl = 'http://api.open-notify.org/iss-now.json';
const issPassUrlCors = 'https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=';
const issPassUrlCors2 = 'http://crossorigin.me/http://api.open-notify.org/iss-pass.json?lat=';
const issPassUrl = 'http://api.open-notify.org/iss-pass.json?lat=';

var peopleSpaceApp = new Vue({
  el: '#peopleSpaceApp',
  data() {
    return { people: null, count: 0 };
  },
  created() {
    axios
      .get(peopleSpaceUrl)
      .then(response => (this.people = response.data.people, this.count = response.data.number));
  },
  filters: {
    uppercase: function (text) {
      return text.toUpperCase();
    }
  },
});

var issNowApp = new Vue({
  el: '#issNowApp',
  data() {
    return { iss_position: null, timestamp: 0 };
  },
  created() {
    axios
      .get(issNowUrl)
      .then(response => (this.iss_position = response.data.iss_position, this.timestamp = response.data.timestamp));
  },
  filters: {
    time: function (timestamp) {
      return Date(timestamp);
    },
    loc: function (location) {
      return location.toFixed(2);
    }
  },
});

var issPassApp = new Vue({
  el: '#issPassApp',
  data() {
    return { iss_pass: null, request: null };
  },
  created() {
    navigator.geolocation.getCurrentPosition(pos => {
      var url = issPassUrlCors + pos.coords.latitude + "&lon=" + pos.coords.longitude;
      axios
        .get(url)
        .then(response => (this.iss_pass = response.data.response, this.request = response.data.request),
          err => {
            alert("Cannot access API!");
          });
    }, err => {
      alert('Cannot access location!');
    })
  },
  filters: {
    time: function (timestamp) {
      return Date(timestamp);
    },
    loc: function (location) {
      return location.toFixed(2);
    }
  },
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
