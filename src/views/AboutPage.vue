<template>
  <div id="about-page">
    <header>
      <div class="h-7" />

      <app-navbar />

      <div class="w-8/12 mx-auto mt-28">
        <p class="page-title text-4xl text-white font-bold text-center mb-3">
          ABOUT US
        </p>
      </div>
    </header>

    <main class="my-20 md:my-36">
      <section
        class="commitment w-11/12 md:w-9/12 text-lg mx-auto md:flex md:flex-row-reverse gap-10"
      >
        <div class="flex-1">
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

        <div class="rounded-2xl overflow-hidden flex-1 my-10 md:my-0">
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
        <div class="flex-1 mb-5 md:mb-0">
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

        <div class="rounded-2xl overflow-hidden flex-1">
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
            <li>Flight Booking</li>
            <li>Hotel Booking</li>
            <li>Vacation Packages</li>
            <li>Job Placement Packages</li>
          </ul>
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

        <div class="images-div">
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
          />
          <br class="lg:hidden" />
          <member-div
            :img="require('../assets/images/ac_manager.jpeg')"
            altText="ac manager"
            title="Accounts Manager"
            name="Edwin Gitonga"
          />
          <br class="lg:hidden" />
          <member-div
            :img="require('../assets/images/mr_manager.jpeg')"
            altText="Marketing Manager"
            title="Marketing Manager"
            name="Ian Munene"
          />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import MemberComponent from "@/components/member.vue";

export default {
  name: "AboutPage",
  components: {
    "member-div": MemberComponent,
  },
};
</script>

<style scoped lang="scss">
header {
  background-image: url("@/assets/images/about.webp");
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0 0 25% 25%;
  height: 40vh;
}

@media screen and (min-width: 700px) {
  header {
    height: 70vh;
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
  font-family: "Handlee", cursive;
}
</style>
