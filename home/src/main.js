import { createApp } from "vue";
import App from "./App.vue";
console.log(App, 'apppppp')
// const app = createApp(App);
// app.mount("#app");

const app = createApp({
  el: "#app",
  render: h => h(App)
})