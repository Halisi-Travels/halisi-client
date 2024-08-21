<template>
  <div id="application-page">
    <header
      class="relative h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">Application Details</p>
    </header>

    <main class="mt-10 mb-20">
      <section class="w-11/12 lg:w-8/12 mx-auto">
        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Your Account</h4>
          <p class="flex-initial w-3/4">
            You are currently signed in as
            <span class="font-semibold">{{ user ? user.email : "Null" }} </span>
            <span
              class="font-semibold text-secondary/90 uppercase text-sm hover:cursor-pointer"
              @click="logout"
            >
              <i class="bx bx-key text-lg"></i>
              Sign out
            </span>
          </p>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Your name</h4>
          <div class="w-3/4">
            <input v-model="name" type="text" name="name" id="name" />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Location (optional)</h4>
          <div class="w-3/4">
            <input v-model="email" type="email" name="email" id="email" />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Country</h4>
          <div class="w-3/4">
            <input v-model="country" type="text" name="country" id="country" />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Professional title</h4>
          <div class="w-3/4">
            <input
              v-model="pType"
              type="text"
              name="pType"
              id="pType"
              placeholder="e.g. 'Data analyst'"
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Skills (optional)</h4>
          <div class="w-3/4">
            <input v-model="roles" type="text" name="roles" id="roles" />
            <p class="text-gray-400 text-sm mt-2">
              Comma separated values e.g. Analyze big data, supervisory role
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">URL(s) (optional)</h4>
          <div class="w-3/4 pl-10">
            <div
              class="url-item mb-8 border-b-4 pb-4"
              v-for="(item, index) in urlsCount"
              :key="index"
            >
              <div class="url-div flex justify-between">
                <h4 class="font-bold">Name</h4>
                <div class="w-3/4">
                  <input v-model="roles" type="text" name="roles" id="roles" />
                </div>
              </div>

              <hr class="my-5" />

              <div class="url-div flex justify-between">
                <h4 class="font-bold">URL</h4>
                <div class="w-3/4">
                  <input v-model="roles" type="text" name="roles" id="roles" />
                </div>
              </div>
            </div>

            <button
              class="text-secondary hover:bg-secondary/30 p-2 rounded-sm"
              @click="addUrlCount"
            >
              <i class="bx bx-plus"></i>
              Add URL
            </button>
            <p class="text-gray-400 text-sm mt-2">
              Optionally provide links to any of your websites or social
              profiles.
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Resume file</h4>
          <div class="w-3/4">
            <input type="file" name="resume" id="resume" />
            <p class="text-gray-400 text-sm mt-2">
              Upload your resume for employers to view. Only
              <strong>pdf</strong>
              files allowed.
            </p>
          </div>
        </div>
      </section>

      <section
        class="submit-btn w-11/12 lg:w-8/12 mx-auto flex justify-between mt-10"
      >
        <button
          @click="toggleView"
          class="bg-primary rounded flex-initial lg:w-[180px] px-4 py-2 text-white font-semibold uppercase hover:bg-secondary transition-all duration-500 ease-in-out"
        >
          Preview
        </button>

        <div
          v-if="showSuccessMessage"
          class="p-3 bg-green-200 text-green-700 border-r-4 border-green-700 w-1/2 font-bold uppercase text-sm text-center"
        >
          The job has been successfully Posted
        </div>

        <div
          v-if="error"
          class="p-3 bg-red-200 text-red-700 border-r-4 border-red-700 w-1/2 font-bold uppercase text-sm text-center"
        >
          {{ error }}
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "NewJobPage",

  data() {
    return {
      showSuccessMessage: false,
      urlsCount: 0,

      title: "",
      location: "",
      country: "",
      type: "",
      remote: false,
      requirements: "",
      roles: "",
      tags: "",
      desc: "",
      applicationEmail: "",
      companyName: "",
      website: "",
    };
  },

  computed: {
    ...mapGetters(["user", "error", "loading", "job"]),
  },

  methods: {
    addUrlCount() {
      this.urlsCount++;
    },
  },
};
</script>

<style scoped lang="scss">
input,
textarea {
  border: 2px solid rgb(205, 205, 205);
  padding: 10px 10px;
  border-radius: 5px;
  color: black;
  width: 100%;
  &:focus {
    outline: none;
  }
}

textarea {
  resize: none;
}
</style>
