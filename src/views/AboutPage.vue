<template>
  <div id="about-page">
    <header>
      <div class="h-7" />

      <app-navbar />

      <div class="w-[20rem] mx-auto mt-28">
        <p class="page-title text-4xl text-black font-bold text-center">
          ABOUT US
        </p>
      </div>
    </header>

    <main></main>

    <app-footer />
  </div>
</template>

<script>
export default {
  name: "AboutPage",
};
</script>

<style scoped lang="scss">
header {
  background-image: url("../assets/images/airport.jpg");
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0 0 25% 25%;
  height: 60vh;
}

.page-title {
  font-family: "Handlee", cursive;
}
</style>
