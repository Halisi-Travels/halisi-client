<template>
  <div class="about">
    <header
      class="h-[50vh] bg-cover bg-center text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">ABOUT US</p>
    </header>

    <main class="my-10">
      <section
        class="intro flex flex-col gap-5 text-lg w-11/12 lg:text-start md:w-8/12 mx-auto"
      >
        <p class="text-center">
          We at Halisi Travels are dedicated to providing exceptional travel
          experiences that are seamless, personalized, and memorable. Our team
          of travel experts works tirelessly to ensure that every aspect of your
          journey is meticulously planned and executed, allowing you to relax
          and enjoy your adventure.
        </p>

        <p class="text-center">
          Halisi Travels was founded with a simple yet profound vision: to bring
          the world closer to you. Born out of a passion for travel and a deep
          understanding of the transformative power of exploring new places, we
          set out to create a travel agency that not only meets but exceeds the
          expectations of our clients. We are one of Kenya's most trusted travel
          agencies, known for our personalized service, attention to detail, and
          unwavering commitment to customer satisfaction.
        </p>

        <p class="text-center">
          At Halisi Travels, we believe that every journey should be as unique
          as the traveler embarking on it. That’s why we offer bespoke travel
          packages tailored to your individual needs and desires. Whether you’re
          planning a family vacation, a romantic getaway, or an adventurous solo
          trip, our team of experienced travel experts is here to craft the
          perfect itinerary for you.
        </p>
      </section>

      <section class="staff mb-28 mt-16 lg:w-9/12 mx-auto">
        <h3 class="text-4xl font-semibold text-center mb-10">Meet The Team</h3>
        <p class="text-center text-lg w-11/12 mx-auto">
          Our dedicated team of professionals is committed to providing
          exceptional service and support at every stage of your journey.
        </p>

        <div class="flex justify-between flex-col lg:flex-row mt-16">
          <div
            class="flex flex-col items-center mb-10 lg:mb-0"
            v-for="(item, index) in staff"
            :key="index"
          >
            <div
              class="rounded-full w-[280px] lg:w-[200px] h-[280px] lg:h-[200px] overflow-hidden bg-red-600"
            >
              <img
                loading="lazy"
                :src="item.url"
                alt="staff profile"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="flex flex-col items-center mt-3">
              <h3 class="text-xl font-bold">{{ item.name }}</h3>
              <p class="font-semibold text-gray-400">{{ item.title }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  name: "contactPage",

  data() {
    return {
      staff: [
        {
          name: "Samuel Ikinya",
          title: "CEO",
          url: require("@/assets/images/manager.webp"),
        },
        {
          name: "Edwin Gitonga",
          title: "Accounts Manager",
          url: require("@/assets/images/ac_manager.webp"),
        },
        {
          name: "Ian Munene",
          title: "Marketing Manager",
          url: require("@/assets/images/mr_manager.jpeg"),
        },
      ],
    };
  },

  watch: {
    "$route.hash"(newHash) {
      if (newHash) {
        this.$nextTick(() => {
          const element = document.querySelector(newHash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        });
      }
    },
  },

  mounted() {
    useHead({
      title: "About Us | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "Learn more about us, our vision and values, and get to know our team",
        },
        {
          property: "og:title",
          content: "About Us | Halisi Travels",
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
