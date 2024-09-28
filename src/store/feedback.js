import axios from "axios";

export default {
  actions: {
    async sendFeedback({ commit }, payload) {
      try {
        commit("SET_LOADING", true);

        await axios.post("/feedback", payload);
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};
