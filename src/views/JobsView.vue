<template>
  <div id="jobs-page">
    <header
      class="relative h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">Find A Job</p>

      <button
        class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 uppercase transfom mt-10 rounded-full bg-secondary px-8 py-2 text-white font-semibold hover:shadow-lg hover:border-b-4 border-orange-700 transition-all duration-300"
        @click="$router.push('/jobs/new')"
      >
        Post A Job
      </button>
    </header>

    <main class="my-20">
      <section class="jobs-table w-11/12 lg:w-8/12 mx-auto">
        <div
          v-if="jobs.length > 0"
          class="filter flex justify-between items-end mb-5 gap-2"
        >
          <div class="inputs w-3/4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <input
              v-model="filters.tags"
              type="text"
              name="tags"
              id="tags"
              placeholder="TAGS"
            />
            <input
              v-model="filters.location"
              type="text"
              name="location"
              id="location"
              placeholder="LOCATION"
            />
            <input
              v-model="filters.category"
              type="text"
              name="category"
              id="category"
              placeholder="CATEGORY"
            />
          </div>

          <button
            class="bg-secondary px-3 rounded h-[40px] font-bold text-center text-sm md:text-lg text-white"
            @click="filterJobs"
          >
            SEARCH JOBS
          </button>
        </div>
        <p
          v-if="jobs.length <= 0"
          class="text-gray-500 font-semibold p-3 bg-gray-200 border-l-4 border-gray-500"
        >
          There are no jobs posted!
        </p>

        <div v-else class="job-count">
          <p class="text-gray-400 font-semibold text-xl mb-4">
            (Available jobs: {{ jobs.length }})
          </p>
          <JobsTable :jobs="jobs" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import JobsTable from "@/components/JobsTable.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "JobsPage",

  components: {
    JobsTable,
  },

  data() {
    return {
      filters: {
        tags: "",
        location: "",
        category: "",
      },
    };
  },

  computed: {
    ...mapGetters(["jobs", "user"]),
  },

  methods: {
    ...mapActions(["jobsFilter"]),

    async filterJobs() {
      const params = new URLSearchParams(this.filters).toString();
      await this.jobsFilter(params);
    },
  },
};
</script>

<style scoped lang="scss">
input {
  border: 2px solid rgb(205, 205, 205);
  padding: 5px 10px;
  border-radius: 5px;
  color: black;
  &:focus {
    outline: none;
  }
}
</style>
