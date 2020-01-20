import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './styles.css';

Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
});
