<template>
  <div class="blog">
    <header
      class="h-[50vh] bg-cover bg-center text-white flex items-center justify-center relative"
    >
      <p class="page-title font-bold text-4xl">OUR BLOG</p>

      <button
        v-if="user && role == 'admin'"
        name="post job"
        class="absolute -bottom-5 left-1/2 transform -translate-x-1/2 uppercase transfom mt-10 rounded-full bg-secondary px-8 py-2 text-white font-semibold hover:shadow-lg hover:border-b-4 border-orange-700 transition-all duration-300"
        @click="$router.push('/blogs/new')"
      >
        New
      </button>
    </header>

    <main class="my-10">
      <div class="container mx-auto p-4">
        <div
          v-if="blogs.length <= 0"
          class="empty-div h-[400px] flex items-center justify-center"
        >
          <p
            class="text-xl font-bold uppercase italic text-gray-400 text-center"
          >
            There are no blog items currently. <br />
            Check back tomorrow
          </p>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(blog, index) in blogs"
            :key="index"
            class="border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              :src="blog.image"
              alt="Blog image"
              class="w-full h-48 object-cover"
            />
            <div class="p-4">
              <h2 class="text-xl font-semibold mb-2">{{ blog.title }}</h2>
              <p class="text-gray-600 mb-4">{{ blog.excerpt }}</p>
              <router-link
                :to="`/blog/${blog.id}`"
                class="text-primary hover:text-secondary font-semibold"
              >
                Read More
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";
import { mapGetters } from "vuex";

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

  computed: {
    ...mapGetters(["user", "error", "loading", "blogs"]),
  },
};
</script>

<style scoped>
header {
  background-image: url("@/assets/images/blog.jpg");
}
</style>
