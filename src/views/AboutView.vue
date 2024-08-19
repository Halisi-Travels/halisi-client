<template>
  <div class="about">
    <header
      class="h-[50vh] bg-gray-600 text-white flex items-center justify-center"
    >
      <p class="font-bold text-4xl">ABOUT US</p>
    </header>

    <main class="my-10">
      <section
        class="intro flex flex-col gap-5 text-lg w-11/12 text-center lg:text-start md:w-10/12 mx-auto"
      >
        <p>
          We at Halisi Travels are dedicated to providing exceptional travel
          experiences that are seamless, personalized, and memorable. Our team
          of travel experts works tirelessly to ensure that every aspect of your
          journey is meticulously planned and executed, allowing you to relax
          and enjoy your adventure.
        </p>

        <p>
          Halisi Travels was founded with a simple yet profound vision: to bring
          the world closer to you. Born out of a passion for travel and a deep
          understanding of the transformative power of exploring new places, we
          set out to create a travel agency that not only meets but exceeds the
          expectations of our clients. We are one of Kenya's most trusted travel
          agencies, known for our personalized service, attention to detail, and
          unwavering commitment to customer satisfaction.
        </p>

        <p>
          At Halisi Travels, we believe that every journey should be as unique
          as the traveler embarking on it. That’s why we offer bespoke travel
          packages tailored to your individual needs and desires. Whether you’re
          planning a family vacation, a romantic getaway, or an adventurous solo
          trip, our team of experienced travel experts is here to craft the
          perfect itinerary for you.
        </p>
      </section>

      <section class="services my-16 flex flex-col gap-12 w-11/12 mx-auto">
        <h3 class="text-4xl font-semibold text-center mb-10">Our Services</h3>
        <div
          class="service flex flex-col lg:flex-row justify-center gap-20"
          v-for="(item, index) in services"
          :key="index"
          :class="{ 'lg:flex-row-reverse': item.reverse }"
        >
          <div class="text lg:flex-initial lg:w-[500px]">
            <h3 class="text-xl font-semibold mb-3">{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>

          <div class="image-div flex-initial lg:w-[500px] h-56">
            <img
              class="object-cover w-full h-full"
              :src="item.url"
              alt="service image"
            />
          </div>
        </div>
      </section>

      <section class="staff mb-28 lg:w-11/12 mx-auto">
        <h3 class="text-4xl font-semibold text-center mb-10">Meet The Team</h3>
        <p class="text-center text-lg w-11/12 mx-auto">
          Our dedicated team of professionals is committed to providing
          exceptional service and support at every stage of your journey.
        </p>

        <div class="flex justify-between flex-col lg:flex-row mt-16">
          <div
            class="flex flex-col items-center"
            v-for="(item, index) in staff"
            :key="index"
          >
            <div
              class="rounded-full w-[280px] lg:w-[200px] h-[280px] lg:h-[200px] overflow-hidden bg-red-600"
            >
              <img
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
      services: [
        {
          url: require("@/assets/images/flight_b.jpg"),
          title: "Flight Booking",
          desc: "Our flight booking service is designed to make your travel planning seamless and stress-free. Whether you're booking a domestic flight or planning an international journey, we offer a wide range of options to suit your schedule and budget. With access to the best deals and a user-friendly booking process, we ensure you get the most value for your money. Our team is here to assist you with any special requests, from selecting preferred seats to arranging in-flight amenities, so you can enjoy a smooth and comfortable travel experience from takeoff to landing.",
          reverse: false,
        },
        {
          url: require("@/assets/images/hotel_b.jpg"),
          title: "Hotel Booking",
          desc: "Our hotel booking service is tailored to provide you with the perfect stay, no matter where your travels take you. We partner with a wide selection of hotels, from luxurious resorts to budget-friendly accommodations, ensuring there's something to suit every taste and budget. With our easy-to-use booking platform, you can compare prices, read reviews, and choose the amenities that matter most to you. Whether you're looking for a cozy boutique hotel or a family-friendly stay, we take care of every detail, so you can focus on enjoying your trip. Let us help you find the ideal place to rest and recharge during your travels.",
          reverse: true,
        },
        {
          url: require("@/assets/images/travel.jpg"),
          title: "Vacation Packages",
          desc: "Our vacation packages are crafted to offer you a complete and worry-free travel experience. Each package is thoughtfully curated to include everything you need for an unforgettable getaway—from flights and accommodations to guided tours and unique experiences. Whether you're dreaming of a romantic escape, a family adventure, or an all-inclusive resort stay, we have options to suit every preference and budget. With our vacation packages, you can explore new destinations, indulge in local cultures, and enjoy seamless travel planning, all while saving time and money. Let us handle the details, so you can relax and immerse yourself in the joy of your vacation.",
          reverse: false,
        },
        {
          url: require("@/assets/images/job.jpg"),
          title: "Job Placement Packages",
          desc: "Our job placement packages are designed to streamline your journey to finding the perfect career opportunity. We offer comprehensive services that include resume building, personalized job matching, interview preparation, and career coaching. Whether you're a recent graduate looking to start your career, a professional seeking advancement, or someone transitioning into a new field, our tailored packages provide the support and resources you need. With our expertise, you'll gain access to exclusive job openings, receive guidance on navigating the job market, and ultimately secure a position that aligns with your skills, experience, and career goals. Let us help you take the next step towards your dream job.",
          reverse: true,
        },
      ],
      staff: [
        {
          name: "David Kabera",
          title: "Director",
          url: require("@/assets/images/director.jpeg"),
        },
        {
          name: "Samuel Ikinya",
          title: "Manager",
          url: require("@/assets/images/manager.jpeg"),
        },
        {
          name: "Edwin Gitonga",
          title: "Accounts Manager",
          url: require("@/assets/images/ac_manager.jpeg"),
        },
        {
          name: "Ian Munene",
          title: "Marketing Manager",
          url: require("@/assets/images/mr_manager.jpeg"),
        },
      ],
    };
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
