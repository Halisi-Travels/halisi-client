<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="carousel relative w-full max-w-lg overflow-hidden">
    <div
      class="flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="flex-none w-full h-[90vh]"
      >
        <img :src="image" alt="carousel image" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        require("../assets/images/vacay.jpg"),
        require("@/assets/images/business.jpg"),
        require("@/assets/images/balloons.jpg"),
        require("@/assets/images/tour.jpg"),
      ],
    };
  },

  mounted() {
    this.startAutoScroll();
  },

  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    startAutoScroll() {
      this.interval = setInterval(() => {
        this.next();
      }, 3000); // Adjust the interval time as needed (3000ms = 3 seconds)
    },
  },
};
</script>
