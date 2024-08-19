import { createStore } from "vuex";

import persistedState from "vuex-persistedstate";

import Jobs from "./jobs";
import Auth from "./auth";
import Shared from "./shared";

export default createStore({
  modules: {
    Jobs,
    Auth,
    Shared,
  },
  plugins: [persistedState()],
});
