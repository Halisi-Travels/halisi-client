<template>
  <div id="app-navbar" class="flex justify-between px-10 py-2">
    <div class="logo-div">
      <img
        width="100px"
        :src="require('@/assets/logo.png')"
        alt="Agency Logo"
      />
    </div>

    <div class="nav-links flex gap-10 items-center font-bold">
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
        to="/"
        class="rounded-full border-2 border-secondary px-4 py-2 text-secondary hover:bg-secondary hover:text-white transition-all duration-300"
      >
        LOG IN / SIGNUP
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
