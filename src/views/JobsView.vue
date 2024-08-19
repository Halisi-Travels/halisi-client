<template>
  <div id="jobs-page">
    <header
      class="h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="font-bold text-4xl">Find A Job</p>
    </header>

    <main class="my-28">
      <section class="jobs-table w-11/12 lg:w-8/12 mx-auto">
        <div class="filter flex justify-between items-end mb-5 gap-2">
          <div class="inputs w-3/4 grid grid-cols-1 md:grid-cols-2 gap-2.5">
            <input
              type="text"
              name="keywords"
              id="keywords"
              placeholder="KEYWORDS"
            />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="LOCATION"
            />
            <input
              type="text"
              name="category"
              id="category"
              placeholder="CATEGORY"
            />
          </div>

          <button
            class="bg-secondary px-3 rounded h-[40px] font-bold text-center text-sm md:text-lg text-white"
          >
            SEARCH JOBS
          </button>
        </div>

        <JobsTable />
      </section>
    </main>
  </div>
</template>

<script>
import JobsTable from "@/components/JobsTable.vue";

export default {
  name: "JobsPage",

  components: {
    JobsTable,
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
