<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <img
        width="200px"
        class="mb-5"
        :src="require('@/assets/logo.png')"
        alt="halisi logo"
      />
      <h1 class="text-6xl font-bold text-gray-800">404</h1>
      <p class="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <router-link
        to="/"
        class="mt-6 text-primary hover:underline text-lg font-bold underline"
        ><i class="fa fa-arrow-left"></i> Go back home</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "NotFound",
};
</script>

<style scoped lang="scss"></style>
