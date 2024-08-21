<template>
  <div id="application-page">
    <header
      class="relative h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold md:text-4xl text-3xl">
        Application Details
      </p>
    </header>

    <main class="mt-10 mb-20">
      <section
        class="w-11/12 lg:w-8/12 mx-auto job-details text-gray-500 flex flex-col gap-3"
      >
        <h2 class="font-bold text-3xl md:text-5xl">{{ job.title }}</h2>
        <div class="job-detail">
          <h3 class="font-bold text-lg">Job Description</h3>
          <p class="italic">{{ job.desc }}</p>
        </div>
        <div class="job-detail">
          <h3 class="font-bold text-lg">Job Location</h3>
          <p>
            {{ job.location }}, {{ job.country }}
            <span>({{ job.remote ? "Remote" : "On-Site" }})</span>
          </p>
        </div>

        <hr class="my-6" />
      </section>

      <form method="POST" enctype="multipart/form-data" @submit.prevent>
        <section class="w-11/12 lg:w-8/12 mx-auto">
          <div class="flex justify-between py-5 text-gray-400" v-if="user">
            <h4 class="text-xl font-semibold">Your Account</h4>
            <p class="flex-initial w-3/4">
              You are currently signed in as
              <span class="font-semibold"
                >{{ user ? user.email : "Null" }}
              </span>
              <span
                class="font-semibold text-secondary/90 uppercase text-sm hover:cursor-pointer"
                @click="logout"
              >
                <i class="bx bx-key text-lg"></i>
                Sign out
              </span>
            </p>
          </div>

          <hr v-if="user" />

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
              <input
                v-model="location"
                type="text"
                name="location"
                id="location"
              />
            </div>
          </div>

          <hr />

          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Country</h4>
            <div class="w-3/4">
              <input
                v-model="country"
                type="text"
                name="country"
                id="country"
              />
            </div>
          </div>

          <hr />

          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Professional title</h4>
            <div class="w-3/4">
              <input
                v-model="pTitle"
                type="text"
                name="pTitle"
                id="pTitle"
                placeholder="e.g. 'Data analyst'"
              />
            </div>
          </div>

          <hr />

          <!-- skills -->
          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Skills (optional)</h4>
            <div class="w-3/4">
              <input
                v-model="skill"
                type="text"
                name="skill"
                id="skill"
                @keyup.enter.prevent="addSkill"
              />
              <p class="text-gray-400 text-sm mt-2">Add up to 5 skills</p>
              <div class="flex gap-3">
                <div
                  class="skill px-2 py-1 rounded-md bg-secondary/20 text-secondary"
                  v-for="(item, index) in skills"
                  :key="index"
                >
                  <p class="flex items-center">
                    {{ item }}
                    <span @click="removeSkill(index)">
                      <i class="bx bx-x text-xl"></i>
                    </span>
                  </p>
                </div>
              </div>
              <p>{{ skills.length }}</p>
            </div>
          </div>

          <hr />

          <!-- online urls -->
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
                    <input
                      v-model="urlName"
                      type="text"
                      name="urlName"
                      id="urlName"
                    />
                  </div>
                </div>

                <hr class="my-5" />

                <div class="url-div flex justify-between">
                  <h4 class="font-bold">URL</h4>
                  <div class="w-3/4">
                    <input v-model="url" type="text" name="url" id="url" />
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="text-secondary hover:bg-secondary/30 p-2 rounded-sm"
                @click.prevent="addUrlCount"
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

          <!-- resume upload -->
          <div class="flex justify-between py-5 text-gray-400">
            <h4 class="text-xl font-semibold">Resume file</h4>
            <div class="w-3/4">
              <input
                type="file"
                ref="file"
                name="cv"
                @change="handleFileUpload"
              />
              <p class="text-gray-400 text-sm mt-2">
                Upload your resume for employers to view. Only
                <strong>pdf</strong>
                files allowed.
              </p>
            </div>
          </div>
        </section>

        <section
          class="submit-btn w-11/12 lg:w-8/12 mx-auto flex flex-col md:flex-row gap-4 justify-between mt-10"
        >
          <button
            type="button"
            class="bg-primary rounded flex-initial lg:w-[180px] px-4 py-2 text-white font-semibold uppercase hover:bg-secondary transition-all duration-500 ease-in-out"
            @click.prevent="submitApplication"
          >
            APPLY
          </button>

          <div
            v-if="showSuccessMessage"
            class="p-3 bg-green-200 text-green-700 border-r-4 border-green-700 md:w-10/12 lg:w-1/2 font-bold uppercase text-sm text-center"
          >
            The application has been submitted succesfully
          </div>

          <div
            v-if="error"
            class="p-3 bg-red-200 text-red-700 border-r-4 border-red-700 md:w-10/12 lg:w-1/2 font-bold uppercase text-sm text-center"
          >
            {{ error }}
          </div>
        </section>
      </form>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NewJobPage",

  data() {
    return {
      showSuccessMessage: false,
      urlsCount: 0,

      name: "",
      location: "",
      country: "",
      pTitle: "",
      skill: "",
      skills: [],
      urls: [],
      cv: null,
    };
  },

  computed: {
    ...mapGetters(["user", "error", "loading", "job"]),
  },

  methods: {
    ...mapActions(["newApplication"]),

    addUrlCount() {
      this.urlsCount++;
    },

    removeSkill(index) {
      if (index > -1) {
        this.skills.splice(index, 1);
      }
    },

    addSkill() {
      if (this.skills.length < 5) {
        this.skills.push(this.skill);
      } else {
        alert("cannot add more skills");
      }
      this.skill = "";
    },

    handleFileUpload(e) {
      this.cv = e.target.files[0];
    },

    async submitApplication() {
      const formData = new FormData();

      formData.append("jobId", this.job._id);
      formData.append("name", this.name);
      formData.append("location", this.location);
      formData.append("country", this.country);
      formData.append("skills", this.skills);
      formData.append("pTitle", this.pTitle);
      formData.append("urls", this.urls);
      formData.append("cv", this.cv);

      await this.newApplication(formData);

      if (!this.error) {
        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
          if (this.user) {
            // this.$router.push("/profile");
          }
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
