<template>
  <div id="about-page">
    <header class="flex flex-col">
      <app-navbar />

      <div
        class="mt-auto bg-black/60 py-10 px-10 text-white backdrop-blur-lg border-y-4 border-secondary"
      >
        <p
          class="page-title text-2xl md:text-4xl font-bold mb-3"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          ABOUT US
        </p>
        <p data-aos="fade-up" data-aos-duration="2900">
          Passionate About Your Next Destination
        </p>
      </div>
    </header>

    <main class="my-20 md:my-36">
      <section
        class="commitment w-11/12 md:w-9/12 text-lg mx-auto md:flex md:flex-row-reverse gap-10"
      >
        <div class="flex-1" data-aos="fade-left" data-aos-duration="1400">
          <p class="section-title text-2xl text-secondary font-semibold mb-8">
            Our Commitment
          </p>
          <p>
            We at
            <span class="text-primary font-semibold">Halisi Travels</span>
            are dedicated to providing exceptional travel experiences that are
            seamless, personalized, and memorable. Our team of travel experts
            works tirelessly to ensure that every aspect of your journey is
            meticulously planned and executed, allowing you to relax and enjoy
            your adventure.
          </p>
        </div>

        <div
          class="rounded-2xl overflow-hidden flex-1 my-10 md:my-0"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            loading="lazy"
            class="object-cover"
            width="100%"
            src="@/assets/images/commit.png"
            alt="map image"
          />
        </div>
      </section>

      <section
        class="explore md:w-9/12 w-11/12 md:px-0 text-lg mx-auto lg:mt-28 md:flex gap-10"
      >
        <div
          class="flex-1 mb-5 md:mb-0"
          data-aos="fade-right"
          data-aos-duration="2400"
        >
          <p class="section-title text-2xl text-secondary font-semibold mb-8">
            Explore The World With Us
          </p>
          <p>
            Immerse yourself in the dazzling splendor of Dubai, experience the
            vibrant culture of the USA, explore the picturesque landscapes of
            Australia, revel in the modern marvels of Qatar, savor the rich
            history of Turkey, and discover the beauty of South Africa. Our
            tailored travel packages are designed to ensure you experience the
            best each destination has to offer.
          </p>
        </div>

        <div
          class="rounded-2xl overflow-hidden flex-1"
          data-aos="fade-left"
          data-aos-duration="2400"
        >
          <img
            loading="lazy"
            class="object-cover"
            width="100%"
            src="@/assets/images/tour.jpg"
            alt="map image"
          />
        </div>
      </section>

      <section class="services mt-28">
        <div
          class="md:w-9/12 w-full mx-auto bg-black/50 md:bg-black/75 text-white p-10 rounded-lg"
        >
          <p class="text-2xl font-medium">
            Halisi Travels takes immense pride in offering a diverse array of
            travel services designed to meet the unique needs of our valued
            clients. Our offerings include:
          </p>

          <ul class="ml-5 mt-3 flex flex-col gap-5 font-semibold list-disc">
            <li data-aos="fade-up" data-aos-duration="2400">Flight Booking</li>
            <li data-aos="fade-up" data-aos-duration="2400">Hotel Booking</li>
            <li data-aos="fade-up" data-aos-duration="2400">
              Vacation Packages
            </li>
            <li data-aos="fade-up" data-aos-duration="2400">
              Job Placement Packages
            </li>
          </ul>
        </div>
      </section>

      <section
        class="set-apart mt-28 flex flex-col items-center gap-10 w-10/12 mx-auto"
      >
        <div class="our-story flex gap-4 justify-center">
          <div class="flex-initial w-[20%]">
            <div class="bg-secondary h-[3px] w-14 mb-2"></div>
            <p
              class="text-xl font-semibold section-title text-secondary"
              data-aos="fade-right"
              data-aos-duration="1800"
            >
              Our Story
            </p>
          </div>

          <p class="w-[60%]" data-aos="fade-right" data-aos-duration="3000">
            Halisi Travels was founded with a simple yet profound vision: to
            bring the world closer to you. Born out of a passion for travel and
            a deep understanding of the transformative power of exploring new
            places, we set out to create a travel agency that not only meets but
            exceeds the expectations of our clients. We are one of Kenya's most
            trusted travel agencies, known for our personalized service,
            attention to detail, and unwavering commitment to customer
            satisfaction.
          </p>
        </div>

        <div class="bespoke flex gap-4 justify-center">
          <div class="flex-initial w-[20%]">
            <div class="bg-secondary h-[3px] w-14 mb-2"></div>
            <p
              class="text-xl font-semibold section-title text-secondary"
              data-aos="fade-right"
              data-aos-duration="1800"
            >
              What Sets Us Apart?
            </p>
          </div>

          <p class="w-[60%]" data-aos="fade-right" data-aos-duration="3000">
            At Halisi Travels, we believe that every journey should be as unique
            as the traveler embarking on it. That’s why we offer bespoke travel
            packages tailored to your individual needs and desires. Whether
            you’re planning a family vacation, a romantic getaway, or an
            adventurous solo trip, our team of experienced travel experts is
            here to craft the perfect itinerary for you.
          </p>
        </div>
      </section>

      <div class="team mt-28 md:w-9/12 mx-auto">
        <p
          class="section-title text-5xl font-bold text-center mb-3 text-secondary"
        >
          Meet the Team
        </p>
        <p class="text-center text-xl md:w-3/5 w-11/12 mx-auto mb-10">
          Our dedicated team of professionals is committed to providing
          exceptional service and support at every stage of your journey.
        </p>

        <div class="images-div" data-aos="fade-up" data-aos-duration="1000">
          <member-div
            :img="require('../assets/images/director.jpeg')"
            altText="Director"
            title="Director"
            name="David Kabera"
          />
        </div>

        <div class="images-div lg:flex justify-between md:mt-20 gap-3">
          <member-div
            :img="require('../assets/images/manager.jpeg')"
            altText="Manager"
            title="Manager"
            name="Samuel Ikinya"
            data-aos="fade-up"
            data-aos-duration="1400"
          />
          <br class="lg:hidden" />
          <member-div
            :img="require('../assets/images/ac_manager.jpeg')"
            altText="ac manager"
            title="Accounts Manager"
            name="Edwin Gitonga"
            data-aos="fade-up"
            data-aos-duration="1800"
          />
          <br class="lg:hidden" />
          <member-div
            :img="require('../assets/images/mr_manager.jpeg')"
            altText="Marketing Manager"
            title="Marketing Manager"
            name="Ian Munene"
            data-aos="fade-up"
            data-aos-duration="2200"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MemberComponent from "@/components/member.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "AboutPage",

  components: {
    "member-div": MemberComponent,
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

<style scoped lang="scss">
header {
  background-image: url("@/assets/images/commitment.jpg");
  background-size: contain;
  background-attachment: fixed;
  height: 80vh;
}

// desktop and tablet devices
@media screen and (min-width: 700px) {
  header {
    height: 90vh;
  }
  .services {
    padding: 4rem;
  }
}

.services {
  background-image: url("https://ik.imagekit.io/qxekjpfx0b/Halisi%20Travels/marina_c2LJG69WrM.jpg?updatedAt=1722361000892");
  background-size: cover;
  background-attachment: fixed;
}

.page-title,
.section-title {
  font-family: "Kanit", sans-serif;
}
</style>
