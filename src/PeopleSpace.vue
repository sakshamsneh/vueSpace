<template>
  <div class="content">
    <div id="peoplespace">
      <div class="title">DETAILS</div>
      <table>
        <tr>
          <th>NAME</th>
          <th>SHIP</th>
        </tr>
        <tr v-for="p of people" v-bind:key="p.name">
          <td>{{p.name|uppercase}}</td>
          <td>{{p.craft}}</td>
        </tr>
      </table>
      <div class="details">TOTAL PEOPLE: {{count}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "peoplespace",
  data() {
    return { people: null, count: 0 };
  },
  created() {
    const peopleSpaceUrl = "https://cors-anywhere.herokuapp.com/http://api.open-notify.org/astros.json";
    this.$http
      .get(peopleSpaceUrl)
      .then(
        response => (
          (this.people = response.data.people),
          (this.count = response.data.number)
        )
      );
  },
  filters: {
    uppercase: function(text) {
      return text.toUpperCase();
    }
  }
};
</script>
