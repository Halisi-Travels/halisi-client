import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles.css";
import { createHead, useHead } from "@vueuse/head";

import NavBar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

const head = createHead();

useHead({
  title: "Halisi Travels",
  meta: [
    {
      name: "description",
      content:
        "Get a brief introduction into what our company does and the services we offer.",
    },
    {
      property: "og:title",
      content: "Halisi Travels",
    },
    {
      property: "og:description",
      content: "Simple, Tranparent. Reliable",
    },
    // Add more default meta tags as needed
  ],
});
createApp(App)
  .component("app-navbar", NavBar)
  .component("app-footer", Footer)
  .use(store)
  .use(router)
  .use(head)
  .mount("#app");
