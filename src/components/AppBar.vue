<template>
  <div
    id="app-navbar"
    class="flex justify-between z-10 items-center px-10 py-2 h-[80px]"
    :class="{
      'fixed top-0 left-0 right-0 shadow-lg bg-white': isFixed,
      relative: !isFixed,
    }"
  >
    <div class="logo-div hover:cursor-pointer" @click="$router.push('/')">
      <img
        loading="lazy"
        width="100px"
        :src="require('@/assets/logo.png')"
        alt="Agency Logo"
      />
    </div>

    <div class="hidden nav-links lg:flex gap-10 items-center font-bold">
      <router-link
        exact-active-class="text-secondary"
        class="hover:text-secondary transition-all duration-300"
        to="/"
      >
        HOME
      </router-link>

      <router-link
        active-class="text-secondary  transition-all duration-500"
        to="/about"
        class="hover:text-secondary transition-all duration-300"
      >
        ABOUT US
      </router-link>

      <router-link
        active-class="text-secondary"
        to="/blog"
        class="hover:text-secondary transition-all duration-300"
      >
        BLOG
      </router-link>

      <router-link
        active-class="text-secondary  transition-all duration-500"
        to="/services"
        class="hover:text-secondary transition-all duration-300"
      >
        OUR SERVICES
      </router-link>

      <router-link
        active-class="text-secondary"
        to="/jobs"
        class="hover:text-secondary transition-all duration-300"
      >
        JOBS
      </router-link>

      <router-link
        active-class="text-secondary"
        to="/contact"
        class="hover:text-secondary transition-all duration-300"
      >
        CONTACT US
      </router-link>

      <router-link
        v-if="isAuthenticated"
        active-class="text-secondary"
        to="/profile"
        class="hover:text-secondary transition-all duration-300"
      >
        MY PROFILE
      </router-link>

      <router-link
        v-else
        to="/auth"
        class="rounded-full border-2 border-secondary px-4 py-2 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
      >
        LOG IN / SIGNUP
      </router-link>
    </div>

    <div
      class="mobile-menu-icon hover:cursor-pointer block lg:hidden"
      @click="toggleDrawer"
    >
      <i
        class="bx text-4xl transition-all duration-300"
        :class="[drawerOpen ? 'bx-x' : 'bx-menu']"
      ></i>
    </div>

    <div
      class="mobile-nav absolute top-[80px] left-0 flex flex-col items-center gap-14 text-white font-bold text-2xl bg-black/60 backdrop-blur-lg overflow-hidden w-screen h-0 transition-all duration-500"
      :class="{ 'h-[100vh]': drawerOpen }"
    >
      <router-link
        exact-active-class="text-secondary"
        class="hover:text-secondary transition-all duration-300 mt-10"
        to="/"
      >
        HOME
      </router-link>

      <router-link
        active-class="text-secondary  transition-all duration-500"
        to="/about"
        class="hover:text-secondary transition-all duration-300"
      >
        ABOUT US
      </router-link>

      <router-link
        active-class="text-secondary"
        to="/blog"
        class="hover:text-secondary transition-all duration-300"
      >
        BLOG
      </router-link>

      <router-link
        active-class="text-secondary  transition-all duration-500"
        to="/services"
        class="hover:text-secondary transition-all duration-300"
      >
        OUR SERVICES
      </router-link>

      <router-link
        active-class="text-secondary"
        to="/jobs"
        class="hover:text-secondary transition-all duration-300"
      >
        JOBS
      </router-link>

      <router-link
        active-class="text-secondary"
        to="/contact"
        class="hover:text-secondary transition-all duration-300"
      >
        CONTACT US
      </router-link>

      <router-link
        v-if="isAuthenticated"
        active-class="text-secondary"
        to="/profile"
        class="hover:text-secondary transition-all duration-300"
      >
        MY PROFILE
      </router-link>

      <router-link
        v-else
        to="/auth"
        class="rounded-full border-2 border-secondary px-4 py-2 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
      >
        LOG IN / SIGNUP
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isFixed: false,
      drawerOpen: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  computed: {
    ...mapGetters(["isAuthenticated", "user", "role"]),
  },

  watch: {
    $route() {
      this.drawerOpen = false; // Close the drawer on route change
    },
  },

  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },

    handleScroll() {
      this.isFixed = window.scrollY > 150;
    },
  },
};
</script>

<style scoped lang="scss">
a {
  font-family: "New Amsterdam", sans-serif;
  font-size: 20px;
  letter-spacing: 2px;
}
</style>
