import axios from "axios";

export default {
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
  },

  mutations: {
    setUser(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },

    logout(state) {
      state.user = null;
      state.token = "";
      state.error = null;
    },
  },

  actions: {
    async login({ commit }, payload) {
      try {
        commit("setLoading", true);

        const res = await axios.post("/owner/login", {
          email: payload.get("email"),
          password: payload.get("password"),
        });

        if (res.status == 200) {
          let user = res.data.loadedUser;
          let token = res.data.token;

          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;

          commit("setUser", { user, token });
          commit("clearError");
        }
      } catch (err) {
        commit("setError", err.response.data.message);
        localStorage.removeItem("token");
      } finally {
        commit("setLoading", false);
      }
    },

    logout({ commit }) {
      commit("setLoading", true);

      commit("logout");
      commit("clearError");

      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];

      commit("setLoading", false);
    },
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },
};
