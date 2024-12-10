import axios from "axios";

export default {
  state: {
    user: null,
    token: localStorage.getItem("token") || null,
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload.user;
      state.token = payload.token;
    },

    LOGOUT(state) {
      state.user = null;
      state.applications = [];
      state.error = null;
      state.userApplications = [];
    },
  },

  actions: {
    async signup({ commit, dispatch }, payload) {
      try {
        commit("SET_LOADING", true);
        commit("CLEAR_ERROR");

        await axios.post("/users/register", {
          name: payload.get("name"),
          email: payload.get("email"),
          phone: payload.get("phone"),
          role: payload.get("role"),
          password: payload.get("password"),
        });

        await dispatch("login", {
          email: payload.get("email"),
          password: payload.get("password"),
        });
      } catch (err) {
        commit("SET_ERROR", err.response?.data?.message || "signup failed");
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async login({ commit }, payload) {
      try {
        commit("SET_LOADING", true);
        commit("CLEAR_ERROR");

        const res = await axios.post("/users/login", {
          email: payload.get("email"),
          password: payload.get("password"),
        });

        if (res.status == 200) {
          let user = res.data.user;
          let token = res.data.token;

          commit("SET_USER", { user, token });

          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
        localStorage.removeItem("token");
      }
    },

    async cvUpload({ commit }, payload) {
      try {
        commit("SET_LOADING", true);
        commit("CLEAR_ERROR");

        const res = await axios.post("/users/upload", payload);

        if (res.status == 201) {
          let user = res.data.updatedUser;

          commit("SET_USER", user);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
        localStorage.removeItem("token");
      } finally {
        commit("SET_LOADING", false);
      }
    },

    logout({ commit }) {
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];

      commit("LOGOUT");
    },

    async getMe({ commit }) {
      try {
        commit("SET_LOADING", true);
        commit("CLEAR_ERROR");

        const res = await axios.post("/users/me");

        if (res.status == 200) {
          let user = res.data.user;

          commit("SET_USER", user);
        }
      } catch (err) {
        commit("LOGOUT");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
  },
};
