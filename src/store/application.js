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
        console.log(payload);

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
  },

  getters: {
    applications: (state) => state.allApplications,
    userApplications: (state) => state.userApplications,
    application: (state) => state.application,
  },
};
