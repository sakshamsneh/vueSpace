<template>
  <div class="content">
    <div id="issnow">
      <div class="title">ISS LOCATION</div>
      <HereMap lat="0" lng="0" width="100%" height="30vh" style="margin:0vh" />
    </div>
  </div>
</template>

<script>
import HereMap from "./HereMap.vue";

export default {
  name: "#issnow",
  components: {
    HereMap
  }
};
</script>