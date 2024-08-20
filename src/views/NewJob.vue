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
            <span class="font-semibold">{{ user.email }}. </span>
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
          <h4 class="text-xl font-semibold">Job Title</h4>
          <div class="w-3/4">
            <input type="text" name="title" id="title" />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Location (optional)</h4>
          <div class="w-3/4">
            <input type="text" name="location" id="location" />
            <p class="text-gray-400 text-sm mt-2">
              Leave this blank if location is not important
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Country</h4>
          <div class="w-3/4">
            <input type="text" name="country" id="country" />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Job Type</h4>
          <div class="w-3/4">
            <input
              type="text"
              name="type"
              id="type"
              placeholder="e.g. Full Time, Contract e.t.c..."
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Remote Position?</h4>
          <div class="w-3/4">
            <input type="checkbox" name="remote" id="remote" />
            <p class="text-gray-400 text-sm mt-2">
              Check the box if this is a remote job
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Job Requirements</h4>
          <div class="w-3/4">
            <input type="text" name="requirements" id="requirements" />
            <p class="text-gray-400 text-sm mt-2">
              Comma separated values e.g. 5+ years experience, verbal skills
            </p>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Job Roles & Responsibilities</h4>
          <div class="w-3/4">
            <input type="text" name="roles" id="roles" />
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
              type="text"
              name="tags"
              id="tags"
              placeholder="e.g. Engineering, Software, Caregiving"
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Application Email/URL</h4>
          <div class="w-3/4">
            <input
              :value="user.email"
              type="text"
              name="email"
              id="email"
              placeholder="KEYWORDS"
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
            <input type="text" name="companyName" id="companyName" />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Website (optional)</h4>
          <div class="w-3/4">
            <input
              type="url"
              name="website"
              id="website"
              placeholder="http://"
            />
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Company Email</h4>
          <div class="w-3/4">
            <input type="email" name="companyEmail" id="companyEmail" />
          </div>
        </div>
      </section>

      <section
        class="submit-btn w-11/12 lg:w-8/12 mx-auto flex justify-end mt-10"
      >
        <button
          type="submit"
          class="bg-primary rounded flex-initial lg:w-[180px] px-4 py-2 text-white font-semibold uppercase hover:bg-secondary transition-all duration-500 ease-in-out"
        >
          upload
        </button>
      </section>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NewJobPage",

  computed: {
    ...mapGetters(["user"]),
  },

  methods: {
    ...mapActions(["logout"]),
  },
};
</script>

<style scoped lang="scss">
input {
  border: 2px solid rgb(205, 205, 205);
  padding: 10px 10px;
  border-radius: 5px;
  color: black;
  width: 100%;
  &:focus {
    outline: none;
  }
}
</style>
