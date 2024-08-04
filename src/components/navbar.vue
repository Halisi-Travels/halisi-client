<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="nav"
    class="bg-white shadow-lg z-10 w-full h-auto md:h-[10vh] py-4 px-6 flex justify-between items-center space-x-4 transition-all duration-100"
    :class="{
      'fixed top-0 left-0 right-0 shadow-lg bg-white': isFixed,
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

    <div class="nav-links hidden lg:block">
      <ul class="flex">
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
          to="/countries-page"
        >
          Destinations
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
          active-class="text-primary"
          to="/contact-us"
        >
          Contact Us
        </router-link>
      </ul>
    </div>

    <!-- nav drawer -->
    <div
      class="p-4 mobile-nav"
      :class="[
        'fixed inset-0 transition-transform duration-300 nav-links',
        drawerClass,
      ]"
    >
      <button
        @click="toggleDrawer"
        class="text-white shadow-lg px-4 py-2 bg-secondary rounded-full"
      >
        <i class="fa fa-close text-2xl"></i>
      </button>

      <ul class="flex flex-col gap-10 text-center text-2xl mt-28">
        <router-link
          class="nav-link text-gray-400 hover:text-primary"
          active-class="md:text-primary text-white"
          to="/about-page"
        >
          About Us
        </router-link>

        <router-link
          class="nav-link text-gray-400 hover:text-primary"
          active-class="md:text-primary text-white"
          to="/countries-page"
        >
          Destinations
        </router-link>

        <router-link
          class="nav-link text-gray-400 hover:text-primary"
          active-class="md:text-primary text-white"
          to="/job-placement"
        >
          Job Placement
        </router-link>

        <router-link
          class="nav-link text-gray-400 hover:text-primary"
          active-class="md:text-primary text-white"
          to="/contact-us"
        >
          Contact Us
        </router-link>
      </ul>

      <div
        class="contact-link bg-secondary hover:bg-primary shadow-lg text-white px-7 py-4 rounded-full mt-28"
        @click="$router.push('/apply')"
      >
        <p class="font-semibold text-center">Apply Now</p>
      </div>
    </div>

    <div
      class="shadow-lg px-4 py-3 bg-black rounded-full lg:hidden"
      @click="toggleDrawer"
    >
      <i class="fa fa-bars text-white"></i>
    </div>

    <div
      class="lg:block hidden contact-link bg-secondary hover:bg-primary shadow-lg text-white px-7 py-4 rounded-full"
      @click="$router.push('/apply')"
    >
      <p class="font-semibold">Apply Now</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
      drawer: false,
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  computed: {
    drawerClass() {
      return this.drawer ? "translate-x-0" : "translate-x-full";
    },
  },

  methods: {
    handleScroll() {
      this.isFixed = window.scrollY > 150;
    },

    toggleDrawer() {
      this.drawer = !this.drawer;
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
  transition: all 0.5s ease-in-out;
}

.contact-link:hover {
  transform: scale(1.1);
}

.mobile-nav {
  backdrop-filter: blur(32px);
}
</style>
