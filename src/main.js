import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./styles.css";

import NavBar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhoenixSquadron } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhoenixSquadron);

createApp(App)
  .component("app-navbar", NavBar)
  .component("app-footer", Footer)
  .component("fa-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount("#app");
