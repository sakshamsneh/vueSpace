<template>
  <div class="here-map">
    <div class="loc" v-if="iss_position">
      LONGITUDE:{{iss_position.lng|loc}}
      <br />
      LATITUDE:{{iss_position.lat|loc}}
      <br />
    </div>
    <div ref="map" v-bind:style="{ width: width, height: height }"></div>
    <div class="details">TIME:{{timestamp|time}}</div>
  </div>
</template>

<script>
import ISSIcon from "./ISSIcon.png";

export default {
  name: "HereMap",
  data() {
    return {
      map: {},
      platform: {},
      marker: null,
      iss_position: null,
      timestamp: null
    };
  },
  props: {
    lat: String,
    lng: String,
    width: String,
    height: String
  },
  methods: {
    loadPosition: function(iss_position) {
      this.marker.setGeometry(iss_position);
      this.map.setCenter(iss_position);
    }
  },
  created() {
    this.platform = new H.service.Platform({
      apikey: "jJxD2CHV2npBrY5Q0P4lSoawxT_lRqeVuqPd5vCCP2I"
    });
  },
  mounted() {
    this.iss_position = { lat: this.lat, lng: this.lng };
    var defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(this.$refs.map, defaultLayers.vector.normal.map, {
      zoom: 3,
      center: this.iss_position
    });
    var icon = new H.map.Icon(ISSIcon);
    this.marker = new H.map.Marker(this.iss_position, { icon: icon });
    this.map.addObject(this.marker);

    const issNowUrl = "http://api.open-notify.org/iss-now.json";
    var issp = this.iss_position;
    var time = null;
    setInterval(() => {
      this.$http.get(issNowUrl).then(function(response) {
        var coords = response.data.iss_position;
        time = response.data.timestamp;
        issp = {
          lat: parseFloat(coords.latitude),
          lng: parseFloat(coords.longitude)
        };
      });
      this.iss_position = issp;
      this.timestamp = time;
      this.loadPosition(this.iss_position);
    }, 3000);
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
