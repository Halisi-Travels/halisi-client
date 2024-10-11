import axios from "axios";

export default {
  state: { blogs: [], blog: null },

  mutations: {
    SET_BLOGS(state, payload) {
      state.blogs = payload;
    },

    ADD_BLOG(state, payload) {
      state.blogs.push(payload);
    },

    SET_BLOG(state, payload) {
      state.blog = payload;
    },

    CLEAR_BLOGS(state) {
      state.blogs = [];
      state.blog = null;
    },
  },

  actions: {
    async fetchBlogs({ commit }) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get("/blogs");

        if (res.status == 200) {
          commit("SET_BLOGS", res.data.blogs);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async fetchBlog({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.get(`/blogs/${payload}`);

        if (res.status == 200) {
          commit("SET_BLOG", res.data);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async newBlog({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        const res = await axios.post("/blogs", payload);
        const blog = res.data.result;

        if (res.status == 200) {
          commit("ADD_BLOG", blog);
        }
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },

    async removeBlog({ commit }, payload) {
      commit("SET_LOADING", true);
      commit("CLEAR_ERROR");

      try {
        await axios.delete(`/blogs/${payload}`);
      } catch (err) {
        commit("SET_ERROR", err.response.data.message);
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },

  getters: {
    blogs: (state) => state.blogs,
    blog: (state) => state.blog,
  },
};
