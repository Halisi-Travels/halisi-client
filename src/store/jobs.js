import axios from "axios";

export default {
  state: { jobs: [], job: null },

  mutations: {
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },

    ADD_JOB(state, payload) {
      state.jobs.push(payload);
    },

    SET_JOB(state, payload) {
      state.job = payload;
    },

    CLEAR_JOBS(state) {
      state.jobs = [];
      state.job = null;
    },
  },

  actions: {
    async fetchJobs({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get("/jobs");

        if (res.status == 200) {
          commit("SET_JOBS", res.data.jobs);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async jobsFilter({ commit }, payload) {
      console.log(payload);

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

    async fetchJob({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get(`/jobs/${payload}`);

        if (res.status == 200) {
          commit("SET_JOB", res.data);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async newJob({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.post("/jobs", payload);
        const job = res.data.result;

        if (res.status == 200) {
          commit("ADD_JOB", job);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async removeJob({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        await axios.delete(`/jobs/${payload}`);
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    jobs: (state) => state.jobs,
    job: (state) => state.job,
  },
};
