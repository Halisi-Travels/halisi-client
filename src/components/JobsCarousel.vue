<template>
  <div
    class="carousel-container relative w-full mx-auto overflow-hidden bg-center bg-cover"
  >
    <!-- Carousel Items -->
    <div
      class="flex transition-transform duration-500 ease-out text-white"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(job, index) in jobs"
        :key="index"
        class="bg-black/50 flex-none w-full flex flex-col items-center gap-6 my-4 py-4 border-y-4"
      >
        <h3 class="font-bold text-4xl capitalize">{{ job.title }}</h3>
        <h4 class="font-semibold font-xl capitalize">
          Our Client: {{ job.client.name }}
        </h4>
        <p class="font-semibold text-lg capitalize">
          {{ job.location }}, {{ job.country }}
        </p>
        <p class="font-semibold uppercase">{{ job.type }}</p>
        <button
          name="see more"
          class="border-b hover:text-secondary hover:border-secondary"
          @click="$router.push(`/jobs/${job._id}`)"
        >
          See More...
        </button>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <button
      name="previous"
      class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      @click="prevSlide"
    >
      &#10094;
    </button>

    <button
      name="next"
      class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      @click="nextSlide"
    >
      &#10095;
    </button>

    <!-- Dots Navigation -->
    <!-- <div
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
    >
      <span
        v-for="(_, index) in jobs"
        :key="index"
        class="w-3 h-3 bg-gray-400 rounded-full"
        :class="{ 'bg-white': currentIndex == index }"
        @click="goToSlide(index)"
      ></span>
    </div> -->
  </div>
</template>

<script>
export default {
  props: ["jobs"],

  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.jobs.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.jobs.length) % this.jobs.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.carousel-container {
  background-image: url("@/assets/images/job_banner.webp");
}
</style>
