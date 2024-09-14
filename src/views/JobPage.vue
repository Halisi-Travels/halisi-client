<template>
  <div id="job-details-page">
    <header
      class="h-[50vh] bg-gray-600 text-white flex flex-col items-center justify-center gap-y-10 relative"
    >
      <p class="page-title font-bold text-xl md:text-2xl lg:text-4xl uppercase">
        {{ job.title }}
      </p>

      <div
        class="flex justify-center flex-col lg:flex-row w-auto gap-5 font-semibold text-lg"
      >
        <div class="item flex justify-center items-center gap-2">
          <i class="bx bx-map text-xl"></i>
          <p class="capitalize">
            {{ job.country }}
          </p>
        </div>

        <div class="item flex justify-center items-center gap-2">
          <i class="bx bx-calendar text-xl"></i>
          <p>Posted on {{ formatDate(job.createdAt) }}</p>
        </div>

        <button
          name="apply"
          class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 uppercase transfom mt-10 rounded-full bg-secondary px-8 py-2 text-white font-semibold hover:shadow-lg transition-all duration-300"
          @click="$router.push('/apply')"
        >
          Apply For Job
        </button>
      </div>

      <h4 class="uppercase font-bold">
        {{ job.type }}
      </h4>
    </header>

    <main
      class="w-11/12 md:w-10/12 lg:w-8/12 mx-auto flex flex-col lg:flex-row gap-9 justify-between my-28"
    >
      <section class="job flex-1">
        <h3 class="uppercase font-bold text-2xl tracking-wider">
          {{ job.title }}
        </h3>
        <div class="flex flex-col lg:flex-row gap-4 lg:items-center mt-2">
          <p
            class="rounded-full px-4 py-2 bg-green-800 w-auto md:w-1/2 lg:w-auto text-sm uppercase text-white font-bold"
          >
            {{ job.type }}
          </p>
          <p class="text-secondary font-semibold uppercase">
            <i class="bx bxs-map text-gray-400"></i>{{ job.country }}
          </p>
        </div>

        <div class="text-center uppercase text-gray-400 font-semibold">
          Posted on {{ formatDate(job.createdAt) }}
        </div>

        <div class="job-desc text-gray-500 mt-5">
          <p class="italic font-semibold">Job Description</p>
          <p class="text-sm">{{ capitalize(job.desc) }}</p>
        </div>

        <div class="requirements text-gray-500 mt-5">
          <p class="italic font-semibold">Requirements</p>
          <ul class="flex flex-col gap-3 mt-3">
            <li
              v-for="(item, index) in job.requirements"
              :key="index"
              class="flex gap-1"
            >
              <i class="bx bx-right-arrow-alt text-lg"></i>
              <p>
                {{ capitalize(item) }}
              </p>
            </li>
          </ul>
        </div>

        <div class="roles mt-5 text-gray-500">
          <p class="italic font-semibold">Roles and Responsibilities</p>
          <ul class="flex flex-col gap-3 mt-3">
            <li
              v-for="(item, index) in job.roles"
              :key="index"
              class="flex gap-1"
            >
              <i class="bx bx-right-arrow-alt text-lg"></i>
              <p>
                {{ capitalize(item) }}
              </p>
            </li>
          </ul>
        </div>

        <div class="btns flex justify-between">
          <button
            name="apply"
            class="mt-10 rounded-full bg-secondary px-8 py-2 text-white font-semibold hover:shadow-lg transition-all duration-300"
            @click="$router.push('/apply')"
          >
            APPLY
          </button>

          <button
            name="delete"
            v-if="user && (role == 'admin' || user._id === job.postedBy)"
            class="mt-10 rounded-full bg-red-600 px-8 py-2 text-white font-semibold hover:shadow-lg transition-all duration-300 uppercase"
            @click="showDeleteDialog = true"
          >
            Delete
          </button>

          <div
            v-if="showDeleteDialog"
            class="fixed inset-0 z-10 flex items-center justify-center bg-black/50"
          >
            <div
              class="bg-white p-12 rounded shadow-lg flex flex-col items-center w-4/12"
            >
              <i class="bx bx-alarm-exclamation text-9xl text-red-700"></i>
              <p class="mb-4 text-2xl font-semibold uppercase">Are you sure?</p>
              <div class="flex justify-center gap-2">
                <button
                  name="delete"
                  @click="deleteJob"
                  class="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Yes
                </button>
                <button
                  name="cancel"
                  @click="showDeleteDialog = false"
                  class="bg-gray-200 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="company-details flex-1">
        <div class="border p-4 mx-auto">
          <img
            loading="lazy"
            class="w-[200px] mx-auto"
            :src="require('@/assets/logo.png')"
            alt="company logo"
          />
          <br />
          <p class="italic font-semibold">Posted By</p>
          <p class="text-gray-500 font-semibold capitalize">
            Halisi Recruitment Admin
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      showDeleteDialog: false,
    };
  },

  computed: {
    ...mapGetters(["job", "user", "role"]),
  },

  methods: {
    ...mapActions(["removeJob"]),

    capitalize(text) {
      if (!text) return "";
      return text.charAt(0).toUpperCase() + text.slice(1);
    },

    async deleteJob() {
      await this.removeJob(this.job._id);

      this.$router.push("/jobs");
    },
  },
};
</script>
