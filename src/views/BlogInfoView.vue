<template>
  <div class="blog">
    <header
      class="h-[50vh] bg-cover bg-center text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">OUR BLOG</p>
    </header>

    <main class="my-10">
      <div class="container mx-auto p-4">
        <div class="mb-6">
          <img
            :src="blog.image"
            alt="Blog image"
            class="w-full h-64 object-cover mb-4"
          />
          <h1 class="text-4xl font-bold mb-4">{{ blog.title }}</h1>
          <p class="text-gray-600">{{ blog.date }}</p>
        </div>
        <div class="prose max-w-none">
          <p>{{ blog.content }}</p>
        </div>
        <router-link
          to="/blogs"
          class="inline-block mt-6 text-primary hover:text-secondary font-semibold"
          >Back to Blogs</router-link
        >
      </div>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";
import { mapGetters } from "vuex";

export default {
  name: "blogInfoPage",

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

  computed: {
    ...mapGetters(["user", "error", "loading", "blog"]),
  },
};
</script>

<style scoped>
header {
  background-image: url("@/assets/images/about_b.webp");
}
</style>
