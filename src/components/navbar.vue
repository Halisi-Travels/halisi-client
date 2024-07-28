<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="nav"
    class="bg-white shadow-lg rounded-full w-9/12 py-4 px-6 flex justify-between items-center space-x-4 mx-auto border transition-all duration-100"
    :class="{
      'fixed top-5 left-0 right-0 shadow-lg bg-white': isFixed,
      relative: !isFixed,
    }"
  >
    <div class="company-logo cursor-pointer" @click="$router.push('/')">
      <img
        width="100px"
        :src="require('@/assets/logo.png')"
        alt="halisi logo"
      />
    </div>

    <div class="nav-links">
      <ul>
        <router-link
          class="nav-link text-gray-400 hover:text-primary"
          active-class="text-primary"
          to="/about-page"
        >
          About Us
        </router-link>

        <router-link
          class="nav-link text-gray-400 hover:text-primary"
          active-class="text-primary"
          to="/job-placement"
        >
          Job Placement
        </router-link>

        <router-link
          class="nav-link text-gray-400 hover:text-primary"
          active-class="active"
          to=""
        >
          Visa Application
        </router-link>

        <router-link
          class="nav-link text-gray-400 hover:text-primary"
          active-class="text-primary"
          to="/profile"
        >
          Profile
        </router-link>
      </ul>
    </div>

    <div
      class="contact-link bg-secondary hover:bg-primary shadow-lg text-white px-7 py-4 rounded-full"
      @click="$router.push('/contact-us')"
    >
      <p class="font-semibold">Contact Us</p>
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
    handleScroll() {
      this.isFixed = window.scrollY > 250;
    },
  },
};
</script>

<style scoped lang="scss">
.nav-link {
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
  font-weight: bold;
}

.nav-link,
.contact-link {
  cursor: pointer;
}
</style>
