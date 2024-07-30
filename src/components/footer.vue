<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="footer"
    class="rounded-2xl bg-slate-900 m-4 p-6 text-white flex flex-col items-center gap-7"
  >
    <div class="logo">
      <img
        width="200px"
        :src="require('@/assets/logo.png')"
        alt="halisi travels"
      />
    </div>

    <ul class="md:flex gap-8 hidden">
      <router-link class="hover:underline underline-offset-2" to="/about-page"
        >About</router-link
      >
      <router-link
        class="hover:underline underline-offset-2"
        to="/job-placement"
        >Job Placement</router-link
      >
      <router-link class="hover:underline underline-offset-2" to="/">
        Visa Application
      </router-link>
      <router-link class="hover:underline underline-offset-2" to="/contact-us">
        Contact Us
      </router-link>
    </ul>

    <ul class="socials flex gap-8">
      <li>
        <a
          href="https://whatsapp.com/channel/0029VaLOeK4HVvTYWRSC6v28"
          target="_blank"
        >
          <i class="fa fa-whatsapp text-lg text-gray-400 hover:text-white"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/halisi.travels?igsh=MW5pOW9iMDVweHZjcA=="
          target="_blank"
        >
          <span
            class="fa fa-instagram text-lg text-gray-400 hover:text-white"
          ></span
        ></a>
      </li>
      <li>
        <span
          class="fa fa-tiktok text-lg text-gray-400 hover:text-white"
        ></span>
      </li>
    </ul>

    <div class="bg-gray-600 w-full h-[1px]"></div>

    <p class="text-gray-500">&copy; {{ year }}, All Rights Reserved</p>
    <p class="text-gray-500">
      Developed By
      <span class="underline text-secondary"
        ><a href="http://mawira.netlify.app" target="_blank"
          >Mawira Corp.</a
        ></span
      >
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
}
</style>
