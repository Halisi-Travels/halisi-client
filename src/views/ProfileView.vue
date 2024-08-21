<template>
  <div id="profile-page">
    <header
      class="h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">USER PROFILE</p>
    </header>

    <main class="my-20 lg:my-28 md:w-10/12 lg:w-8/12 mx-auto">
      <div class="flex gap-1 md:gap-5">
        <section
          class="menu w-full md:4/12 bg-gray-100 text-gray-600 font-semibold"
        >
          <div
            class="p-3 hover:bg-gray-300 hover:border-l-4 hover:cursor-pointer border-gray-400 transition-all ease-in-out duration-300 flex items-center gap-2"
          >
            <i class="bx bxs-user-account text-2xl"></i>
            <p>Personal Details</p>
          </div>

          <div
            class="p-3 hover:bg-gray-300 hover:border-l-4 hover:cursor-pointer border-gray-400 transition-all ease-in-out duration-300 flex items-center gap-2"
          >
            <i class="bx bxs-badge-check text-2xl mr-2"></i>
            <p>Applications</p>
          </div>

          <div
            class="p-3 hover:bg-gray-300 hover:border-l-4 hover:cursor-pointer border-gray-400 transition-all ease-in-out duration-300 flex items-center gap-2"
          >
            <i class="bx bx-reset text-2xl mr-2"></i>
            <p>Reset Password</p>
          </div>

          <div
            class="p-3 hover:bg-gray-300 hover:border-l-4 hover:cursor-pointer border-gray-400 transition-all ease-in-out duration-300 flex items-center gap-2"
            @click="logout"
          >
            <i class="bx bx-log-out text-2xl mr-2"></i>
            <p>Logout</p>
          </div>
        </section>

        <section id="personal-details" class="details w-full">
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

        <section id="applications"></section>
        <section id="applications"></section>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user"]),
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
