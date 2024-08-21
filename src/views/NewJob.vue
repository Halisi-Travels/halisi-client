<template>
  <div id="jobs-page">
    <header
      class="relative h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">Post A Job</p>
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
          <h4 class="text-xl font-semibold">Job Title*</h4>
          <div class="w-3/4">
            <input v-model="title" type="text" name="title" id="title" />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Location (optional)</h4>
          <div class="w-3/4">
            <input
              v-model="location"
              type="text"
              name="location"
              id="location"
            />
            <p class="text-gray-400 text-sm mt-2">
              Leave this blank if location is not important
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Country*</h4>
          <div class="w-3/4">
            <input v-model="country" type="text" name="country" id="country" />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Job Type*</h4>
          <div class="w-3/4">
            <input
              v-model="type"
              type="text"
              name="type"
              id="type"
              placeholder="e.g. Full Time, Contract e.t.c..."
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Remote Position?*</h4>
          <div class="w-3/4">
            <input v-model="remote" type="checkbox" name="remote" id="remote" />
            <p class="text-gray-400 text-sm mt-2">
              Check the box if this is a remote job
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Job Requirements*</h4>
          <div class="w-3/4">
            <input
              v-model="requirements"
              type="text"
              name="requirements"
              id="requirements"
            />
            <p class="text-gray-400 text-sm mt-2">
              Comma separated values e.g. 5+ years experience, verbal skills
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Job Roles & Responsibilities*</h4>
          <div class="w-3/4">
            <input v-model="roles" type="text" name="roles" id="roles" />
            <p class="text-gray-400 text-sm mt-2">
              Comma separated values e.g. Analyze big data, supervisory role
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Job tags</h4>
          <div class="w-3/4">
            <input
              v-model="tags"
              type="text"
              name="tags"
              id="tags"
              placeholder="e.g. Engineering, Software, Caregiving"
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Description*</h4>
          <div class="w-3/4">
            <textarea
              v-model="desc"
              type="text"
              name="description"
              id="description"
              rows="8"
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Application Email/URL</h4>
          <div class="w-3/4">
            <input
              v-model="applicationEmail"
              type="email"
              name="email"
              id="email"
              placeholder="e.g. apply@company.com"
            />
          </div>
        </div>
      </section>

      <section
        class="company-details w-11/12 lg:w-8/12 mx-auto text-gray-500 mt-10"
      >
        <h1 class="font-bold text-4xl mb-4">COMPANY DETAILS</h1>

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Company Name</h4>
          <div class="w-3/4">
            <input
              v-model="companyName"
              type="text"
              name="companyName"
              id="companyName"
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Website (optional)</h4>
          <div class="w-3/4">
            <input
              v-model="website"
              type="url"
              name="website"
              id="website"
              placeholder="http://"
            />
          </div>
        </div>
      </section>

      <section
        class="submit-btn w-11/12 lg:w-8/12 mx-auto flex justify-between mt-10"
      >
        <button
          @click="uploadJob"
          :disabled="loading"
          class="bg-primary rounded flex-initial lg:w-[180px] px-4 py-2 text-white font-semibold uppercase hover:bg-secondary transition-all duration-500 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          upload
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NewJobPage",

  data() {
    return {
      showSuccessMessage: false,

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
    ...mapActions(["logout", "newJob"]),

    async uploadJob() {
      const jobData = {
        title: this.title,
        location: this.location,
        country: this.country,
        type: this.type,
        remote: this.remote,
        applicationEmail: this.applicationEmail,
        companyName: this.companyName,
        website: this.website,
        requirements: this.requirements,
        tags: this.tags,
        desc: this.desc,
        roles: this.roles,
      };

      await this.newJob(jobData);

      if (!this.error) {
        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
          this.$router.push(`/jobs`);
        }, 2000);
      }
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
