<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-gray-800">404</h1>
      <p class="text-2xl text-gray-600 mt-4">Page Not Found</p>
      <router-link to="/" class="mt-6 text-blue-500 hover:underline"
        >Go back home</router-link
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
