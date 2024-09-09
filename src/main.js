import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import { format } from "date-fns";
import { createHead, useHead } from "@vueuse/head";
// import lazyload from "./directives/lazyload";

// import tailwind
import "./index.css";

// global components
import Navbar from "@/components/AppBar.vue";
import Footer from "@/components/Footer.vue";

axios.defaults.withCredentials = false;
axios.defaults.baseURL = process.env.VUE_APP_API_URL;

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
  ],
});

createApp(App)
  .mixin({
    methods: {
      formatDate: function (date) {
        return format(new Date(date), "MMMM do, yyyy");
      },
    },
  })
  .use(store)
  .use(router)
  .use(head)
  // .directive(lazyload)
  .component("AppNav", Navbar)
  .component("AppFooter", Footer)
  .mount("#app");
