<template>
  <div id="services-page">
    <header
      class="h-[50vh] bg-cover bg-center text-white flex items-center justify-center"
    >
      <p class="page-title font-bold text-4xl">OUR SERVICES</p>
    </header>

    <main>
      <section class="services my-16 flex flex-col gap-12 w-11/12 mx-auto">
        <h3 class="text-4xl font-semibold text-center mb-10">Our Services</h3>
        <div
          class="service flex flex-col lg:flex-row justify-around gap-20"
          v-for="(item, index) in services"
          :key="index"
          :class="{ 'lg:flex-row-reverse': item.reverse }"
          :id="`service${index + 1}`"
        >
          <div class="text lg:flex-initial lg:w-[500px]">
            <h3 class="text-xl font-semibold mb-3">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>

          <div class="image-div flex-initial lg:w-[500px] h-64">
            <img
              class="object-cover w-full h-full"
              :src="item.url"
              alt="service image"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { useHead } from "@vueuse/head";

export default {
  data() {
    return {
      services: [
        {
          url: require("@/assets/images/flight_b.jpg"),
          title: "Flight Booking",
          desc: "Our flight booking service is designed to make your travel planning seamless and stress-free. Whether you're booking a domestic flight or planning an international journey, we offer a wide range of options to suit your schedule and budget. With access to the best deals and a user-friendly booking process, we ensure you get the most value for your money.",
          reverse: false,
        },
        {
          url: require("@/assets/images/hotel_b.jpg"),
          title: "Hotel Booking",
          desc: "Our hotel booking service is tailored to provide you with the perfect stay, no matter where your travels take you. We partner with a wide selection of hotels, from luxurious resorts to budget-friendly accommodations, ensuring there's something to suit every taste and budget. Whether you're looking for a cozy boutique hotel or a family-friendly stay, we take care of every detail, so you can focus on enjoying your trip.",
          reverse: true,
        },
        {
          url: require("@/assets/images/travel.jpg"),
          title: "Vacation Packages",
          desc: "Our vacation packages are crafted to offer you a complete and worry-free travel experience. Each package is thoughtfully curated to include everything you need for an unforgettable getaway—from flights and accommodations to guided tours and unique experiences. Whether you're dreaming of a romantic escape, a family adventure, or an all-inclusive resort stay, we have options to suit every preference and budget. Let us handle the details, so you can relax and immerse yourself in the joy of your vacation.",
          reverse: false,
        },
        {
          url: require("@/assets/images/visa.jpg"),
          title: "Visa Applications",
          desc: "Our visa application service is designed to simplify the often complex and time-consuming process of obtaining a visa for any country. Whether you're planning a short vacation, a business trip, or a long-term stay, we provide comprehensive support tailored to your specific needs. Our team stays up-to-date with the latest visa requirements and regulations, so you can be confident that your application is complete and accurate.",
          reverse: true,
        },
        {
          url: require("@/assets/images/job.jpg"),
          title: "Job Placement Packages",
          desc: "Our job placement packages are designed to streamline your journey to finding the perfect career opportunity. We offer comprehensive services that include resume building, personalized job matching, interview preparation, and career coaching. Whether you're a recent graduate looking to start your career, a professional seeking advancement, or someone transitioning into a new field, our tailored packages provide the support and resources you need.",
          reverse: false,
        },
      ],
    };
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

    if (this.$route.query.scrollTo) {
      document.getElementById(this.$route.query.scrollTo).scrollIntoView();
    }
  },
};
</script>

<style scoped>
header {
  background-image: url("@/assets/images/services.jpg");
}
</style>
