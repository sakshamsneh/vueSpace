<template>
  <div class="content">
    <div id="isspass">
      <div class="title" v-if="request">
        ISS PASSING TIME AT YOUR LOCATION
        <br />
        LONGITUDE:{{request.longitude|loc}}
        <br />
        LATITUDE:{{request.latitude|loc}}
        <br />
      </div>
      <table>
        <tr>
          <th>RISETIME</th>
          <th>DURATION</th>
        </tr>
        <tr v-for="p of iss_pass" v-bind:key="p.duration">
          <td>{{p.risetime|time}}</td>
          <td>{{p.duration}}s</td>
        </tr>
      </table>
      <div class="details" v-if="request">TOTAL PASSES: {{request.passes}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "#isspass",
  data() {
    return { iss_pass: null, request: null };
  },
  created() {
    const issPassUrlCors =
      "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-pass.json?lat=";
    const issPassUrlCors2 =
      "http://crossorigin.me/http://api.open-notify.org/iss-pass.json?lat=";

    navigator.geolocation.getCurrentPosition(
      pos => {
        var url =
          issPassUrlCors + pos.coords.latitude + "&lon=" + pos.coords.longitude;
        this.$http.get(url).then(
          response => (
            (this.iss_pass = response.data.response),
            (this.request = response.data.request)
          ),
          err => {
            alert("Cannot access API!");
          }
        );
      },
      err => {
        alert("Cannot access location!");
      }
    );
  },
  filters: {
    time: function(timestamp) {
      return Date(timestamp);
    },
    loc: function(location) {
      return location.toFixed(2);
    }
  }
};
</script>