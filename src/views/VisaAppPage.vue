<template>
  <div id="visa-page">
    <header class="pb-8">
      <div class="h-7" />

      <app-navbar />

      <div class="w-8/12 mx-auto mt-28">
        <p class="page-title text-4xl text-white font-bold text-center">
          Visa Application
        </p>
      </div>
    </header>

    <main>
      <section
        class="still-pending w-full flex flex-col justify-center items-center my-20"
      >
        <img
          width="300px"
          src="@/assets/images/construction.png"
          alt="still being developed"
        />
        <router-link
          to="/"
          class="mt-6 text-primary hover:underline text-lg font-bold underline"
          ><i class="fa fa-arrow-left"></i> Go back home</router-link
        >
      </section>
    </main>
  </div>
</template>

<style scoped>
header {
  background-image: url("@/assets/images/approved.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 60vh;
  border-radius: 0 0 25% 25%;
}
</style>
