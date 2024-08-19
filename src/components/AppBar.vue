<template>
  <div
    id="app-navbar"
    class="flex justify-between z-10 items-center px-10 py-2"
    :class="{
      'fixed top-0 left-0 right-0 shadow-lg bg-white': isFixed,
      relative: !isFixed,
    }"
  >
    <div class="logo-div">
      <img
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
        active-class="text-secondary"
        to="/profile"
        class="hover:text-secondary transition-all duration-300"
      >
        MY PROFILE
      </router-link>

      <router-link
        to="/auth"
        class="rounded-full border-2 border-secondary px-4 py-2 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
      >
        LOG IN / SIGNUP
      </router-link>
    </div>

    <div
      class="mobile-menu-icon hover:cursor-pointer block lg:hidden"
      @click="openNav"
    >
      <i class="bx bx-menu text-3xl"></i>
    </div>

    <div
      class="mobile-nav absolute top-0 left-0 flex flex-col items-center gap-14 text-white font-bold text-2xl bg-black/60 backdrop-blur-lg overflow-hidden h-screen w-0 transition-all duration-500"
    >
      <i
        class="bx bx-x font-bold text-4xl text-secondary relative left-11/12 hover:cursor-pointer"
        @click="closeNav"
      ></i>
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
        active-class="text-secondary"
        to="/profile"
        class="hover:text-secondary transition-all duration-300"
      >
        MY PROFILE
      </router-link>

      <router-link
        to="/auth"
        class="rounded-full border-2 border-secondary px-4 py-2 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
      >
        LOG IN / SIGNUP
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    closeNav() {
      let navbar = document.getElementsByClassName("mobile-nav")[0];
      navbar.style.width = "0";
    },
    openNav() {
      let navbar = document.getElementsByClassName("mobile-nav")[0];
      navbar.style.width = "90%";
    },
    handleScroll() {
      this.isFixed = window.scrollY > 150;
    },
  },
};
</script>

<style scoped lang="scss"></style>
