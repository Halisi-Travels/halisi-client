<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="footer"
    class="rounded-2xl bg-slate-700 mx-4 p-6 text-white flex flex-col items-center gap-7"
  >
    <div class="logo">
      <p class="text-center">Halisi Travels.</p>
    </div>

    <ul class="flex gap-8">
      <li>About</li>
      <li>Job Placement</li>
      <li>Visa Application</li>
      <li>Contact Us</li>
    </ul>

    <ul class="socials flex gap-8">
      <li>
        <i class="fa fa-facebook text-lg text-gray-400"></i>
      </li>
      <li>
        <i class="fa fa-twitter text-lg text-gray-400"></i>
      </li>
      <li>
        <i class="fa fa-instagram text-lg text-gray-400"></i>
      </li>
      <li>
        <i class="fa fa-linkedin text-lg text-gray-400"></i>
      </li>
    </ul>

    <div class="bg-gray-600 w-full h-[1px]"></div>

    <p class="text-gray-500">&copy; {{ year }}, All Rights Reserved</p>
    <p class="text-gray-500">Licenses</p>
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
