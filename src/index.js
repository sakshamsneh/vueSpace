import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import './styles.css';

Vue.prototype.$http = axios;

new Vue({
  el: '#app',
  render: h => h(App),
});

var click = true;
var themeicon = document.getElementById("theme-icon");
function switchTheme(e) {
  if (click === true) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    click = false;
    themeicon.innerHTML = "brightness_5";
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    click = true;
    themeicon.innerHTML = "brightness_3";
  }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === 'dark') {
    click = false;
    themeicon.innerHTML = "brightness_5";
  }
}

function detectColorScheme() {
  var theme = "light";

  if (localStorage.getItem('theme')) {
    if (localStorage.getItem('theme') == "dark") {
      theme = "dark";
    }
  } else if (!window.matchMedia) {
    return false;
  } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    theme = "dark";
  }
  if (theme == "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    click = false;
    themeicon.innerHTML = "brightness_5";
  } else {
    click = true;
    themeicon.innerHTML = "brightness_3";
  }
}

document.getElementById("theme-switch").onclick = function () { switchTheme() };
detectColorScheme();
