<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="visa-page">
    <header class="pb-8">
      <app-navbar />

      <div class="w-8/12 mx-auto mt-28">
        <p
          class="page-title text-2xl md:text-4xl text-white font-bold text-center"
        >
          Destinations
        </p>
      </div>
    </header>

    <main class="my-10 md:my-28 w-11/12 md:w-8/12 mx-auto">
      <section
        class="midle-east md:flex justify-between mb-10 gap-10"
        v-for="(country, index) in countries"
        :key="index"
        :class="[country.reverse ? 'flex-row-reverse' : '']"
      >
        <div class="section-title flex-1 mb-4">
          <p class="text-xl font-semibold text-secondary mb-4">
            {{ country.name }}
          </p>

          <p>{{ country.desc }}</p>
          <p
            class="text-sm text-secondary mt-2 hover:underline hover:cursor-pointer"
          >
            More Info...
          </p>
        </div>
        <div class="w-full md:w-[400px] rounded-lg">
          <img width="100%" :src="country.flag" alt="middle east" />
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  mounted() {
    useHead({
      title: "Countries | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "Get a chance to visit the world and emerse yourself in different sceneries and cultures",
        },
        {
          property: "og:title",
          content: "countries | Halisi Travels",
        },
      ],
    });
  },

  data() {
    return {
      countries: [
        {
          flag: require("@/assets/images/uae.jpeg"),
          name: "Middle East",
          reverse: false,
          desc: "Explore the Middle East's modern marvels and ancient wonders, where futuristic cities like Dubai meet the timeless beauty of desert landscapes and historic sites.",
        },
        {
          flag: require("@/assets/images/usa.jpg"),
          name: "USA",
          reverse: true,
          desc: "Experience the diverse landscapes and cultures of the USA, from the bustling streets of New York City to the serene national parks and iconic landmarks like the Golden Gate Bridge.",
        },
        {
          flag: require("@/assets/images/canada.jpg"),
          name: "Canada",
          reverse: false,
          desc: "Immerse yourself in the breathtaking natural beauty of Canada, with its towering mountains, pristine lakes, and vibrant cities like Toronto and Vancouver that offer a perfect blend of nature and urban life.",
        },
        {
          flag: require("@/assets/images/europe.png"),
          name: "Europe",
          reverse: true,
          desc: "Discover the rich history, stunning architecture, and vibrant cultures of Europe. From the romantic streets of Paris to the ancient ruins of Rome, every corner offers a unique experience.",
        },
      ],
    };
  },
};
</script>

<style scoped>
header {
  background-image: url("@/assets/images/destination.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 60vh;
  border-radius: 0 0 25% 25%;
}

@media screen and (min-width: 700px) {
  header {
    height: 70vh;
  }
}

@keyframes appear {
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

.intro,
.midle-east {
  animation: appear 5s linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}
</style>
