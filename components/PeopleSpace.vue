const peopleSpaceUrl = 'http://api.open-notify.org/astros.json';

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
