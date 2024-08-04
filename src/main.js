import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles.css";
import { createHead } from "@vueuse/head";

import NavBar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

const head = createHead();

createApp(App)
  .component("app-navbar", NavBar)
  .component("app-footer", Footer)
  .use(store)
  .use(router)
  .use(head)
  .mount("#app");
