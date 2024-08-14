<template>
  <div id="job-details-page">
    <header
      class="h-[50vh] bg-gray-600 text-white flex flex-col items-center justify-center gap-y-10 relative"
    >
      <p class="font-bold text-4xl uppercase">Civil Engineering</p>

      <div class="flex justify-center w-auto gap-5 font-semibold text-lg">
        <div class="item flex justify-center items-center gap-2">
          <i class="bx bxs-user-account text-xl"></i>
          <p>Our Client</p>
        </div>

        <div class="item flex justify-center items-center gap-2">
          <i class="bx bx-map text-xl"></i>
          <p>Nairobi, Kenya</p>
        </div>

        <div class="item flex justify-center items-center gap-2">
          <i class="bx bx-calendar text-xl"></i>
          <p>Our Client</p>
        </div>

        <button
          class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 uppercase transfom mt-10 rounded-full bg-secondary px-8 py-2 text-white font-semibold hover:shadow-lg transition-all duration-300"
        >
          Apply For Job
        </button>
      </div>

      <h4 class="uppercase font-bold">Full Time</h4>
    </header>

    <main class="w-8/12 mx-auto flex justify-between my-28">
      <div class="job-desc">
        <h3 class="uppercase font-bold text-2xl tracking-wider">Procument</h3>
        <div class="flex gap-4 items-center mt-2">
          <p
            class="rounded-full px-4 py-2 bg-green-800 text-sm uppercase text-white"
          >
            Full Time
          </p>
          <p class="text-secondary font-semibold uppercase">
            Civil Engineering
          </p>
          <p class="text-secondary font-semibold uppercase">
            <i class="bx bxs-map text-gray-400"></i>Nairobi, Kenya (Remote)
          </p>
        </div>

        <div class="text-center uppercase text-gray-400 font-semibold">
          Posted 5 days ago
        </div>

        <div class="requirements text-gray-500">
          <p class="italic font-semibold">Requirements</p>
          <ul class="flex flex-col gap-3 mt-3">
            <li v-for="(item, index) in 8" :key="index">
              <p>
                <i class="bx bx-right-arrow-alt text-lg"></i> Lorem ipsum, dolor
                amet consectetur adipisicing elit. Laboriosam, eos?
              </p>
            </li>
          </ul>
        </div>

        <div class="responsibilities mt-5 text-gray-500">
          <p class="italic font-semibold">Roles and Responsibilities</p>
          <ul class="flex flex-col gap-3 mt-3">
            <li v-for="(item, index) in 8" :key="index">
              <p>
                <i class="bx bx-right-arrow-alt text-lg"></i> Lorem ipsum, dolor
                amet consectetur adipisicing elit. Laboriosam, eos?
              </p>
            </li>
          </ul>
        </div>

        <button
          class="mt-10 rounded-full bg-secondary px-8 py-2 text-white font-semibold hover:shadow-lg transition-all duration-300"
        >
          APPLY
        </button>
      </div>
      <div class="company-details flex-1">
        <div class="border p-4 w-1/2 mx-auto">
          <img
            class="w-[200px] mx-auto"
            :src="require('@/assets/logo.png')"
            alt="company logo"
          />
          <br />
          <p class="italic font-semibold">Our Client</p>
          <p class="text-gray-500 font-medium">Engineering Company</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: "",
    };
  },
};
</script>

<style></style>
