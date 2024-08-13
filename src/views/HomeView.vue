<template>
  <div class="home">
    <p>xnsojpsdkx</p>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  name: "HomeView",

  mounted() {
    useHead({
      title: "Homepage | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "Based in Nairobi, Kenya, Halisi Travels takes pride in offering a diverse array of flight booking, hotel booking, vacation, and job placement packages to our valued clients.",
        },
        {
          property: "og:title",
          content: "Homepage | Halisi Travels",
        },
      ],
    });
  },
};
</script>
