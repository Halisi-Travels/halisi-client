<template>
  <div id="services-page">
    <header
      class="h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">ABOUT US</p>
    </header>

    <main></main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  data() {
    return {};
  },

  mounted() {
    useHead({
      title: "Our Services | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "We at Halisi Travels are dedicated to providing exceptional travel experiences that are seamless, personalized, and memorable. Our team of travel experts works tirelessly to ensure that every aspect of your journey is meticulously planned and executed, allowing you to relax and enjoy your adventure.",
        },
        {
          property: "og:title",
          content: "Our Services | Halisi Travels",
        },
      ],
    });
  },
};
</script>
