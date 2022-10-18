import { createApp } from "vue";
import router from "./router/routes";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css";
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/line-awesome/line-awesome.css";

// Import Quasar css
import "quasar/src/css/index.sass";

// import Home from "./views/Home.vue";
import App from "./App.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

myApp.use(router);
myApp.mount("#app");
