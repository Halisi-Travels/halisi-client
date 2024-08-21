<template>
  <div id="unknown-page">
    <main
      class="h-screen bg-gray-200 flex flex-col justify-center items-center gap-2"
    >
      <i class="bx bx-block text-9xl text-gray-400"></i>
      <p class="text-3xl font-light tracking-widest text-gray-400">
        404: PAGE CANNOT BE FOUND
      </p>

      <p
        class="underline text-2xl hover:cursor-pointer hover:text-secondary transition-colors duration-500 ease-linear"
        @click="$router.push('/')"
      >
        <span><i class="bx bx-left-arrow-alt"></i></span>Go Back to Home
      </p>
    </main>
  </div>
</template>
