<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="testimonials"
    class="relative w-full max-w-5xl mx-auto overflow-hidden"
  >
    <div class="flex transition-transform duration-500" :style="wrapperStyle">
      <div
        class="min-w-full box-border p-8 bg-primary/60 text-center rounded-lg"
        v-for="(tst, index) in testimonials"
        :key="index"
      >
        <p class="text-lg font-semibold text-gray-100">{{ tst.message }}</p>
        <h3 class="mt-4 text-gray-200 font-bold">{{ tst.author }}</h3>
      </div>
    </div>

    <div class="flex justify-center mt-4">
      <span
        v-for="(_, index) in testimonials"
        :key="index"
        class="w-3 h-3 bg-secondary rounded-full mx-1 cursor-pointer transition-colors duration-300"
        :class="{ 'bg-gray-700': currentIndex == index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      autoScroll: null,
      testimonials: [
        {
          message:
            "This service exceeded my expectations. The team was professional, and the results were outstanding. I highly recommend them!.",
          author: "John Doe",
        },
        {
          message:
            "Fantastic results and a great team to work with. Their innovative approach made a significant impact on our business.",
          author: "Jane Smith",
        },
        {
          message:
            "An excellent experience from start to finish. The attention to detail and customer service was impeccable.",
          author: "Chris Evans",
        },
      ],
    };
  },

  mounted() {
    this.startAutoScroll();
  },

  beforeUnmount() {
    this.stopAutoScroll();
  },

  computed: {
    wrapperStyle() {
      return {
        transform: `translateX(-${this.currentIndex * 100}%)`,
      };
    },
  },

  methods: {
    goToSlide(index) {
      this.currentIndex = index;
    },

    startAutoScroll() {
      this.autoScroll = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
      }, 3000);
    },

    stopAutoScroll() {
      clearInterval(this.autoScroll);
    },
  },
};
</script>
