import axios from "axios";

export default {
  state: {
    user: null,
    token: localStorage.getItem("token") || "",
  },

  mutations: {
    SET_USER(state, payload) {
      state.user = payload;
    },

    SET_TOKEN(state, payload) {
      state.token = payload;
    },

    LOGOUT(state) {
      state.user = null;
      state.token = "";
      state.error = null;
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
          let user = res.data.loadedUser;
          let token = res.data.token;

          commit("SET_USER", user);
          commit("SET_TOKEN", token);

          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = token;
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
        localStorage.removeItem("token");
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
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");
      commit("CLEAR_JOBS");
      commit("CLEAR_APPLICATIONS");
      commit("LOGOUT");

      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];

      commit("SET_LOADING", false);
    },
  },

  getters: {
    user: (state) => state.user,
    isAuthenticated: (state) => !!state.user,
    role: (state) => state.user.role,
  },
};
