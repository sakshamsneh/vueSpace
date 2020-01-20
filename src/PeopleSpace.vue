<template>
  <div class="content">
    <div id="peopleSpaceApp">
      <div class="title">DETAILS</div>
      <table>
        <tr>
          <th>NAME</th>
          <th>SHIP</th>
        </tr>
        <tr v-for="p of people" v-bind:key="p">
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
  name: "peopleSpaceApp",
  data() {
    return { people: null, count: 0 };
  },
  created() {
    const peopleSpaceUrl = "http://api.open-notify.org/astros.json";
    axios
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
