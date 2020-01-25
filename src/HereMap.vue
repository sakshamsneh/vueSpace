<template>
  <div class="here-map">
    <div ref="map" v-bind:style="{ width: width, height: height }"></div>
  </div>
</template>

<script>
import api_key from "./.env";
export default {
  name: "HereMap",
  data() {
    return {
      map: {},
      platform: {},
      // iss_position: null,
      marker: null
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
      apikey: api_key
    });
  },
  mounted() {
    var iss_position = { lat: this.lat, lng: this.lng };
    var defaultLayers = this.platform.createDefaultLayers();
    this.map = new H.Map(this.$refs.map, defaultLayers.vector.normal.map, {
      zoom: 3,
      center: iss_position
    });
    var icon = new H.map.Icon("./src/ISSIcon.png");
    this.marker = new H.map.Marker(iss_position, { icon: icon });
    this.map.addObject(this.marker);

    const issNowUrl = "http://api.open-notify.org/iss-now.json";
    setInterval(() => {
      this.$http.get(issNowUrl).then(function(response) {
        var coords = response.data.iss_position;
        iss_position = {
          lat: parseFloat(coords.latitude),
          lng: parseFloat(coords.longitude)
        };
      });
      this.loadPosition(iss_position);
    }, 3000);
  }
};
</script>
