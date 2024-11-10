<template>
  <div class="tours">
    <header class="carousel relative">
      <div class="carousel-inner relative h-full w-full overflow-hidden">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-item w-full h-full object-center"
          :class="{
            block: currentSlide === index,
            hidden: currentSlide !== index,
          }"
          style="transition: display 0.5s"
        >
          <img
            :src="slide.image"
            :alt="slide.text"
            class="w-full h-full object-cover object-center"
          />
          <div
            class="absolute bottom-0 bg-opacity-50 bg-gray-900 text-white w-full h-full p-4 flex flex-col md:gap-6 justify-end"
          >
            <div class="md:w-7/12 mb-10 flex flex-col gap-6">
              <h1 class="text-2xl md:text-4xl font-bold tracking-wider">
                {{ slide.title }}
              </h1>

              <p class="tracking-wide text-xl md:text-2xl">
                {{ slide.text }}
              </p>
              <div
                class="w-[100px] text-secondary hover:cursor-pointer font-bold"
                @click="$router.push('/services-apply')"
              >
                <p>Book Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Progress Dots -->
      <div
        class="dots absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1"
      >
        <span
          v-for="(_, index) in slides"
          :key="'dot-' + index"
          @click="currentSlide = index"
          class="cursor-pointer w-12 h-[2px]"
          :class="{
            'bg-gray-300': currentSlide !== index,
            'bg-secondary': currentSlide === index,
          }"
          style="transition: background-color 0.5s"
        ></span>
      </div>
    </header>

    <main class="my-24">
      <section class="welcome w-11/12 md:w-9/12 mx-auto">
        <div class="flex gap-8 flex-col md:flex-row">
          <div class="flex-1 w-full h-full bg-red-300">
            <img
              class="w-full h-[300px] md:h-[400px]"
              :src="require('../assets/images/services.webp')"
              alt="welcome"
              loading="lazy"
            />
          </div>

          <div class="text flex-1">
            <h3 class="font-semibold text-lg text-center md:text-start">
              Welcome to Halisi Travels Destinations
            </h3>

            <h1 class="font-bold text-3xl text-center md:text-start mt-4">
              Travel the World One place at a Time
            </h1>

            <p class="text-xl">
              Embrace the beauty of slow travel. Explore the world one
              destination at a time, savoring every moment, every culture, and
              every adventure along the way.
            </p>

            <div class="flex space-x-2 mt-4">
              <div class="experience flex flex-col space-y-3 flex-1">
                <h3 class="font-bold text-xl">Best Travel Agents</h3>
                <p>
                  Work with the best in the business! Our expert travel agents
                  are here to craft the perfect itinerary, providing insider
                  knowledge and exceptional service
                </p>
              </div>
              <div class="guidelines flex flex-col space-y-3 flex-1">
                <h3 class="font-bold text-xl">Travel Guidelines</h3>
                <p>
                  Our comprehensive travel guidelines ensure you're fully
                  prepared for your trip, from entry requirements to safety
                  protocols
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        class="why-us w-full md:w-10/12 mx-auto flex flex-col items-center my-28"
      >
        <h3 class="font-semibold text-xl text-center italic mb-3">
          Travel Far, Travel Wide, Travel Often
        </h3>
        <h2 class="text-5xl font-bold text-center">
          Why Choose Halisi travels
        </h2>
        <div
          class="values flex flex-col gap-6 md:flex-row justify-between w-11/12 mt-10"
        >
          <div
            class="value flex flex-col items-center justify-center gap-2"
            v-for="(item, index) in values"
            :key="index"
          >
            <!-- avatar -->
            <div
              class="w-40 h-40 rounded-full p-10 bg-secondary/40 flex items-center justify-center"
            >
              <i class="bx text-5xl" :class="item.icon"></i>
            </div>
            <!-- title -->
            <h2 class="text-xl font-bold">{{ item.title }}</h2>
            <!-- desc -->
            <p class="text-center w-[250px]">{{ item.text }}</p>
          </div>
        </div>
      </section>

      <section class="image w-full md:w-9/12 mx-auto">
        <img
          :src="require('../assets/images/beach.jpg')"
          alt="kenyan beaches"
          class="w-full h-[300px] md:h-full object-cover object-center"
        />
      </section>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  name: "toursPage",

  data() {
    return {
      currentSlide: 0,
      slides: [
        {
          image: require("../assets/images/tour1.webp"),
          title: "Majestic Wildlife of the Maasai Mara",
          text: "Known for its breathtaking landscapes and abundant wildlife, it offers an unforgettable experience for anyone seeking to witness the Great Migration or spot the Big Five",
        },
        {
          image: require("../assets/images/coast.webp"),
          title: "Kenya’s Hidden Coastal Gems",
          text: "From the quiet allure of Watamu’s pristine shores to the rich Swahili history of Lamu Island, Kenya’s coast offers a unique blend of adventure, culture, and relaxation",
        },
        {
          image: require("../assets/images/waterfall.jpg"),
          title: "Chasing Waterfalls",
          text: "From the impressive Karuru Falls in the Aberdares to the scenic Thompson Falls in Nyahururu, these natural wonders are perfect for hikers and nature lovers looking to explore off-the-beaten-path destinations",
        },
      ],
      values: [
        {
          icon: "bx-purchase-tag",
          title: "Competitive Pricing",
          text: "Experience top-notch travel services at unbeatable prices",
        },
        {
          icon: "bx-accessibility",
          title: "Fast Booking",
          text: "Book your next adventure in just a few clicks",
        },
        {
          icon: "bxs-plane-alt",
          title: "Array of Destinations",
          text: "Wherever you want to go, we’ve got the perfect spot for you",
        },
        {
          icon: "bxs-group",
          title: "Dedicated Team",
          text: "We're committed to making your travel experience seamless and unforgettable",
        },
      ],
    };
  },

  mounted() {
    useHead({
      title: "Tours | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "your go-to company for affordable and reliable travel experiences in Kenya. We are a company that is committed to providing our clients with the best value for their money, while also introducing them to the numerous facets of Kenya's past and present",
        },
        {
          property: "og:title",
          content: "Tours | Halisi Travels",
        },
      ],
    });

    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  },
};
</script>

<style scoped lang="scss">
.carousel {
  height: 80vh;
}

h2,
h3 {
  letter-spacing: 2px;
}
</style>
