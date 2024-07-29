<template>
  <div id="about-page">
    <header>
      <div class="h-7" />

      <app-navbar />

      <div class="w-[20rem] mx-auto mt-28">
        <p class="page-title text-4xl text-black font-bold text-center">
          ABOUT US
        </p>
      </div>
    </header>

    <main>
      <section class="w-9/12 text-lg mx-auto lg:mt-28 flex gap-10">
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

        <div class="rounded-2xl overflow-hidden flex-1">
          <img
            class="object-cover"
            width="100%"
            :src="require('@/assets/images/time.jpg')"
            alt="map image"
          />
        </div>
      </section>

      <section class="w-9/12 text-lg mx-auto lg:mt-28 flex gap-10">
        <div class="rounded-2xl overflow-hidden flex-1">
          <img
            class="object-cover"
            width="100%"
            :src="require('@/assets/images/dubai.jpg')"
            alt="map image"
          />
        </div>

        <div class="flex-1">
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
      </section>

      <section class="services text-xl mt-28">
        <div class="w-9/12 mx-auto bg-black/75 text-white p-10 rounded-lg">
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

      <div class="team mt-28 w-9/12 mx-auto">
        <p
          class="section-title text-5xl font-bold text-center mb-3 text-secondary"
        >
          Meet the Team
        </p>
        <p class="text-center text-xl w-3/5 mx-auto mb-10">
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

        <div class="images-div flex justify-between mt-20">
          <member-div
            :img="require('../assets/images/manager.jpeg')"
            altText="Manager"
            title="Manager"
            name="Samuel Ikinya"
          />
          <member-div
            :img="require('../assets/images/ac_manager.jpeg')"
            altText="ac manager"
            title="Accounts Manager"
            name="Edwin Gitonga"
          />
          <member-div
            :img="require('../assets/images/mr_manager.jpeg')"
            altText="Marketing Manager"
            title="Marketing Manager"
            name="Ian Munene"
          />
        </div>
      </div>
    </main>

    <app-footer />
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
  background-image: url("../assets/images/airport.jpg");
  background-size: cover;
  background-attachment: fixed;
  border-radius: 0 0 25% 25%;
  height: 60vh;
}

.services {
  background-image: url("../assets/images/explore.jpg");
  background-size: cover;
  background-attachment: fixed;
  padding: 4rem;
}

.page-title,
.section-title {
  font-family: "Handlee", cursive;
}
</style>
