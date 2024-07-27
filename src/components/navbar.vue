<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="nav"
    class="bg-white shadow-lg rounded-full w-9/12 py-4 px-6 flex justify-between items-center space-x-4 m-auto border"
  >
    <div class="company-logo cursor-pointer" @click="$router.push('/')">
      <img
        width="100px"
        :src="require('@/assets/logo.png')"
        alt="halisi logo"
      />
    </div>

    <div class="nav-links">
      <ul class="">
        <li class="text-gray-400 hover:text-primary">About</li>
        <li class="text-gray-400 hover:text-primary">Job Placement</li>
        <li class="text-gray-400 hover:text-primary">Visa Application</li>
        <li class="text-gray-400 hover:text-primary">Profile</li>
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

<style scoped lang="scss">
li {
  display: inline-block;
  margin: 0 20px;
  cursor: pointer;
  font-weight: bold;
}

li,
.contact-link {
  cursor: pointer;
}
</style>
