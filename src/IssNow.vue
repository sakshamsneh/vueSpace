<template>
  <div class="content">
    <div id="issnow">
      <div class="title">ISS LOCATION</div>
      <div class="loc" v-if="iss_position">
        LONGITUDE:{{iss_position.longitude}}
        <br />
        LATITUDE:{{iss_position.latitude}}
        <br />
        <HereMap lat="37.7397" lng="-121.4252" width="100%" height="30vh" style="margin:0vh" />
      </div>
      <div class="details">TIME:{{timestamp|time}}</div>
    </div>
  </div>
</template>

<script>
import HereMap from "./HereMap.vue";

export default {
  name: "#issnow",
  data() {
    return { iss_position: null, timestamp: 0 };
  },
  components: {
    HereMap
  },
  created() {
    // const issNowUrl = "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/iss-now.json";
    const issNowUrl = "http://api.open-notify.org/iss-now.json";
    this.$http
      .get(issNowUrl)
      .then(
        response => (
          (this.iss_position = response.data.iss_position),
          (this.timestamp = response.data.timestamp)
        )
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