<template>
  <div id="profile-page">
    <header
      class="h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">USER PROFILE</p>
    </header>

    <main class="my-20 lg:my-28 md:w-10/12 lg:w-8/12 mx-auto">
      <div class="flex gap-5">
        <section
          class="menu w-1/2 lg:w-4/12 bg-gray-100 text-gray-600 font-semibold"
        >
          <div
            class="p-3 hover:bg-primary/30 hover:border-l-4 hover:cursor-pointer hover:text-primary border-primary transition-all ease-in-out duration-300 flex items-center gap-2"
            @click="showPersonalDetails = true"
            :class="{
              'bg-primary/30 text-primary border-l-4': showPersonalDetails,
            }"
          >
            <i class="bx bxs-user-account text-2xl"></i>
            <p>Personal Details</p>
          </div>

          <div
            class="p-3 hover:bg-primary/30 hover:border-l-4 hover:cursor-pointer hover:text-primary border-primary transition-all ease-in-out duration-300 flex items-center gap-2"
            @click="showPersonalDetails = false"
            :class="{
              'bg-primary/30 text-primary border-l-4': !showPersonalDetails,
            }"
          >
            <i class="bx bxs-badge-check text-2xl mr-2"></i>
            <p>Applications</p>
          </div>

          <div
            class="p-3 hover:bg-secondary/30 hover:border-l-4 hover:cursor-pointer hover:text-secondary border-secondary transition-all ease-in-out duration-300 flex items-center gap-2"
            @click="logout"
          >
            <i class="bx bx-log-out text-2xl mr-2"></i>
            <p>Logout</p>
          </div>
        </section>

        <section
          v-if="showPersonalDetails"
          id="personal-details"
          class="personal-details w-full"
        >
          <div
            class="flex flex-col md:flex-row md:gap-14 gap-5 md:p-4 items-end"
          >
            <div class="overflow-hidden h-[200px] w-[200px]">
              <img
                :src="require('@/assets/images/avatar.png')"
                alt=""
                class="w-full h-full object-cover"
              />
            </div>

            <div>
              <p class="text-4xl lg:text-6xl font-semibold text-secondary">
                Welcome,
              </p>
              <p class="text-2xl lg:text-4xl font-semibold">
                {{ user ? user.name : "Null" }}
              </p>
              <p class="mt-2 text-gray-600">
                <span class="font-semibold">0</span> applications
              </p>
            </div>
          </div>

          <hr class="my-10" />

          <div class="more-info text-gray-600">
            <div class="flex gap-1">
              <p class="font-bold">Email:</p>
              <p>{{ user ? user.email : "Null" }}</p>
            </div>
            <div class="flex gap-1">
              <p class="font-bold">Role:</p>
              <p>{{ user ? user.role : "Null" }}</p>
            </div>
          </div>
        </section>

        <section v-else id="applications" class="applications w-full">
          <h3 class="text-2xl font-bold mb-3 text-gray-600">
            {{ userApplications.length }} Applications
          </h3>

          <hr class="my-5" />

          <div class="grid md:grid-cols-2 gap-4">
            <div
              class="rounded-md p-3 text-gray-500 hover:cursor-pointer hover:bg-orange-100 shadow-md hover:shadow-lg transition-all duration-300 ease-linear"
              v-for="(app, index) in userApplications"
              :key="index"
            >
              <p class="text-secondary font-bold text-xl">
                {{ app.jobId.title }}
              </p>
              <p class="font-semibold">{{ app.jobId.client.name }}</p>
              <p class="italic text-sm">{{ app.createdAt }}</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      showPersonalDetails: true,
    };
  },

  computed: {
    ...mapGetters(["user", "userApplications"]),
  },

  watch: {
    user(val) {
      if (val == null || val == undefined) {
        this.$router.push("/auth");
      }
    },
  },

  methods: {
    ...mapActions(["logout"]),
  },
};
</script>
