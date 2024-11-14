import axios from "axios";

export default {
  state: {
    user: null,
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },

    LOGOUT(state) {
      state.user = null;
      state.applications = [];
      state.error = null;
      state.userApplications = [];
    },
  },

  actions: {
    async signup({ commit }, payload) {
      try {
        commit("SET_LOADING", true);
        commit("CLEAR_ERROR");

        await axios.post("/auth/register", {
          name: payload.get("name"),
          email: payload.get("email"),
          phone: payload.get("phone"),
          role: payload.get("role"),
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

        const res = await axios.post("/auth/login", {
          email: payload.get("email"),
          password: payload.get("password"),
        });

        if (res.status == 200) {
          let user = res.data.user;

          commit("SET_USER", user);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async cvUpload({ commit }, payload) {
      try {
        commit("SET_LOADING", true);
        commit("CLEAR_ERROR");

        const res = await axios.post("/auth/upload", payload);

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
      commit("LOGOUT");
    },

    async getMe({ commit }) {
      try {
        commit("SET_LOADING", true);
        commit("CLEAR_ERROR");

        const res = await axios.post("/auth/me");

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
