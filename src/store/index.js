import { createStore } from "vuex";

import persistedState from "vuex-persistedstate";

import Jobs from "./jobs";
import Auth from "./auth";
import Shared from "./shared";
import Application from "./application";
import Feedback from "./feedback";

export default createStore({
  modules: {
    Jobs,
    Auth,
    Shared,
    Application,
    Feedback,
  },
  plugins: [persistedState()],
});
