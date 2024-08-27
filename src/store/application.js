import axios from "axios";

export default {
  state: {
    allApplications: [],
    userApplications: [],
    application: null,
  },

  mutations: {
    SET_APPLICATIONS(state, payload) {
      state.allApplications = payload;
    },

    ADD_APPLICATION(state, payload) {
      state.allApplications.push(payload);
    },

    SET_USER_APPLICATIONS(state, payload) {
      state.userApplications = payload;
    },

    SET_APPLICATION(state, payload) {
      state.application = payload;
    },

    CLEAR_APPLICATIONS(state) {
      state.application = null;
      state.userApplications = [];
      state.allApplications = [];
    },
  },

  actions: {
    async newApplication({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.post("/applications", payload);
        const application = res.data.result;

        if (res.status == 200) {
          commit("ADD_APPLICATION", application);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async getUserApplications({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get(`/applications/user`);
        const applications = res.data.applications;

        if (res.status == 200) {
          commit("SET_USER_APPLICATIONS", applications);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async jobsFilter({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get(`/jobs?${payload}`);

        if (res.status == 200) {
          commit("SET_JOBS", res.data.jobs);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async getApplications({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get(`/applications?${payload}`);
        const applications = res.data.applications;

        if (res.status == 200) {
          commit("SET_APPLICATIONS", applications);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async getApplication({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get(`/applications/${payload}`);
        const application = res.data.application;

        if (res.status == 200) {
          commit("SET_APPLICATION", application);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    applications: (state) => state.allApplications,
    userApplications: (state) => state.userApplications,
    application: (state) => state.application,
  },
};
