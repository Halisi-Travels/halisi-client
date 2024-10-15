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
            <span class="font-semibold">{{ user ? user.name : "" }} </span>
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
          <h4 class="text-xl font-semibold">Job Requirements*</h4>
          <div class="w-3/4">
            <input
              v-model="req"
              type="text"
              name="requirements"
              id="requirements"
              @keyup.enter="addReq"
            />
            <p class="text-gray-400 text-sm mt-2 hidden md:block">
              Press <strong>"enter"</strong> to add a requirement to the list
            </p>
            <p class="text-gray-400 text-sm mt-2 md:hidden">
              Separate the requirements with commas e.g. example 1, example 2
              etc...
            </p>
            <div class="flex gap-3">
              <div
                class="requirement px-2 py-1 rounded-md bg-secondary/20 text-secondary"
                v-for="(item, index) in requirements"
                :key="index"
              >
                <p class="flex items-center">
                  {{ item }}
                  <span @click="removeReq(index)">
                    <i class="bx bx-x text-xl hover:cursor-pointer"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Job Roles & Responsibilities*</h4>
          <div class="w-3/4">
            <input
              v-model="role"
              type="text"
              name="roles"
              id="roles"
              @keyup.enter="addRole"
            />
            <p class="text-gray-400 text-sm mt-2 hidden md:block">
              Press <strong>"enter"</strong> to add a role to the list
            </p>
            <p class="text-gray-400 text-sm mt-2 md:hidden">
              Separate the roles with commas e.g. example 1, example 2 etc...
            </p>
            <div class="flex gap-3">
              <div
                class="role px-2 py-1 rounded-md bg-secondary/20 text-secondary"
                v-for="(item, index) in roles"
                :key="index"
              >
                <p class="flex items-center">
                  {{ item }}
                  <span @click="removeRole(index)">
                    <i class="bx bx-x text-xl hover:cursor-pointer"></i>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr />

        <div class="flex justify-between py-5 text-gray-400">
          <h4 class="text-xl font-semibold">Salary</h4>
          <div class="w-3/4">
            <input v-model="salary" type="text" name="salary" id="salary" />
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
      </section>

      <section
        class="submit-btn w-11/12 lg:w-8/12 mx-auto flex justify-between mt-10"
      >
        <button
          name="upload"
          @click="uploadJob"
          :disabled="loading"
          class="bg-primary rounded flex-initial w-auto lg:w-[180px] px-4 py-3 text-white font-semibold uppercase hover:bg-secondary transition-all duration-500 ease-in-out disabled:cursor-not-allowed disabled:bg-gray-600"
        >
          SUBMIT
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
      country: "",
      salary: "",
      type: "Full Time",
      req: "",
      requirements: [],
      role: "",
      roles: [],
      desc: "",
    };
  },

  computed: {
    ...mapGetters(["user", "error", "loading", "job"]),
  },

  methods: {
    ...mapActions(["logout", "newJob"]),

    removeReq(index) {
      if (index > -1) {
        this.requirements.splice(index, 1);
      }
    },

    addReq() {
      this.requirements.push(this.req);
      this.req = "";
    },

    removeRole(index) {
      if (index > -1) {
        this.roles.splice(index, 1);
      }
    },

    addRole() {
      this.roles.push(this.role);
      this.role = "";
    },

    async uploadJob() {
      const jobData = {
        title: this.title,
        country: this.country,
        salary: this.salary,
        type: this.type,
        requirements: this.requirements,
        desc: this.desc,
        role: this.role,
        reqs: this.req,
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
