<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="nav"
    class="bg-white shadow-lg rounded-full w-9/12 py-4 px-6 flex justify-between items-center space-x-4 m-auto border"
  >
    <div class="company-logo cursor-pointer" @click="$router.push('/')">
      <p class="text-xl font-semibold">Halisi.</p>
    </div>
    <div class="nav-links">
      <ul class="">
        <li class="d-inline-block">About</li>
        <li>Job Placement</li>
        <li>Visa Application</li>
        <li>Profile</li>
      </ul>
    </div>
    <div
      class="contact-link bg-black shadow-lg text-white px-4 py-2 rounded-full"
      @click="$router.push('/contact-us')"
    >
      <p class="font-semibold">Contact Us</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
li {
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
}

li,
.contact-link {
  cursor: pointer;
}
</style>
