import { createStore } from "vuex";

import persistedState from "vuex-persistedstate";

import Jobs from "./jobs";
import Auth from "./auth";
import Shared from "./shared";
import Application from "./application";
import Feedback from "./feedback";
import Blog from "./blogs";

export default createStore({
  modules: {
    Jobs,
    Auth,
    Shared,
    Application,
    Feedback,
    Blog,
  },
  plugins: [persistedState()],
});
