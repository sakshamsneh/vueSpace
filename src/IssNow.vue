<template>
  <div class="content">
    <div id="issnow">
      <div class="title">ISS LOCATION</div>
      <div class="loc" v-if="iss_position">
        LONGITUDE:{{iss_position.longitude}}
        <br />
        LATITUDE:{{iss_position.latitude}}
        <br />
      </div>
      <div class="details">TIME:{{timestamp|time}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "#issnow",
  data() {
    return { iss_position: null, timestamp: 0 };
  },
  created() {
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