<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="footer"
    class="rounded-2xl bg-slate-900 mx-4 p-6 text-white flex flex-col items-center gap-7"
  >
    <div class="logo">
      <img
        width="200px"
        :src="require('@/assets/logo.png')"
        alt="halisi travels"
      />
    </div>

    <ul class="flex gap-8">
      <li class="hover:underline underline-offset-2">About</li>
      <li class="hover:underline underline-offset-2">Job Placement</li>
      <li class="hover:underline underline-offset-2">Visa Application</li>
      <li
        class="hover:underline underline-offset-2"
        @click="$router.push('/contact-us')"
      >
        Contact Us
      </li>
    </ul>

    <ul class="socials flex gap-8">
      <li>
        <i class="fa fa-facebook text-lg text-gray-400 hover:text-white"></i>
      </li>
      <li>
        <i class="fa fa-twitter text-lg text-gray-400 hover:text-white"></i>
      </li>
      <li>
        <i class="fa fa-instagram text-lg text-gray-400 hover:text-white"></i>
      </li>
      <li>
        <i class="fa fa-linkedin text-lg text-gray-400 hover:text-white"></i>
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
