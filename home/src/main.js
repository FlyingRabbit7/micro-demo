import { createApp } from "vue";
import App from "./App.vue";
import { router } from './router.js'
// console.log(App, 'apppppp')
const app = createApp(App).use(router);

app.mount("#app");

// const app = createApp({
//   el: "#app",
//   render: h => h(App)
// })