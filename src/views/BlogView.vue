<template>
  <div class="blog">
    <header
      class="h-[50vh] bg-cover bg-center text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">OUR BLOG</p>
    </header>

    <main class="my-10">
      <div></div>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  name: "blogPage",

  data() {
    return {};
  },

  mounted() {
    useHead({
      title: "Our Blog | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "Learn more about us, our vision and values, and get to know our team",
        },
        {
          property: "og:title",
          content: "Our Blog | Halisi Travels",
        },
      ],
    });
  },
};
</script>

<style scoped>
header {
  background-image: url("@/assets/images/about_b.webp");
}
</style>
