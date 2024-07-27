<template>
  <div class="home">
    <main>
      <section class="banner">
        <div class="h-7"></div>
        <app-navbar />

        <div class="mt-20 flex flex-col gap-6">
          <p class="text-6xl font-bold text-center text-white">Halisi Agency</p>
          <p
            class="slogan text-2xl font-bold text-center text-white tracking-wider italic"
          >
            ~ Simple ~ Transparent ~ Reliable ~
          </p>
        </div>
      </section>

      <section
        class="intro mt-28 w-9/12 mx-auto flex justify-between items-center"
      >
        <div class="intro-image w-2/6 rounded-lg overflow-hidden">
          <img
            width="100%"
            :src="require('@/assets/images/books.jpg')"
            alt="into image"
          />
        </div>

        <div class="w-2/4">
          <p class="text-xl font-semibold text-secondary">
            Tours & Travel Agency
          </p>
          <br />
          <p>
            Based in Nairobi, Kenya, Halisi Travels takes pride in offering a
            diverse array of flight booking, hotel booking, vacation, and job
            placement packages to our valued clients. Immerse yourself in the
            dazzling splendor of Dubai, experience the vibrant culture of the
            USA, explore the picturesque landscapes of Australia, revel in the
            modern marvels of Qatar, savor the rich history of Turkey, and
            discover the beauty of South Africa. At Halisi Travels, we are
            dedicated to crafting unforgettable journeys that connect you with
            the world's most captivating destinations
          </p>
        </div>
      </section>

      <section class="my-28 services w-9/12 mx-auto">
        <p
          class="service-title text-center font-bold text-4xl underline mb-9 text-secondary"
        >
          Our Services
        </p>
        <div class="grid grid-cols-3 gap-9">
          <div
            v-for="service in services"
            :key="service.name"
            class="bg-primary text-white p-3 rounded text-center h-40 flex flex-col justify-center"
          >
            <p class="text-2xl font-semibold">{{ service.name }}</p>
            <p class="text-xl">{{ service.desc }}</p>
          </div>
        </div>
      </section>

      <section class="choose-us rounded-3xl overflow-hidden">
        <div
          class="w-full h-full mx-auto bg-black/30 text-white p-16 flex flex-col justify-end"
        >
          <p class="text-4xl text-secondary font-semibold mb-8">
            Why Choose Us
          </p>
          <p class="text-2xl tracking-wider">
            At Halisi Travels, our commitment to professionalism, reliability,
            and client satisfaction sets us apart. We excel in making the visa
            process seamless and stress-free, ensuring your international travel
            is smooth and worry-free. Choose Halisi Travels for a
            customer-focused experience that prioritizes your needs every step
            of the way.
          </p>
        </div>
      </section>
    </main>

    <app-footer />
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      services: [
        { name: "Flight Booking", desc: "Book, Fly, Enjoy, Repeat" },
        { name: "Hotel Booking", desc: "Exquisite stays. Book Now!" },
        {
          name: "Vacation Package",
          desc: "Escape, Relax, Discover, Adventure",
        },
        {
          name: "Job Placement",
          desc: "Career Compass: Navigating your Future",
        },
        { name: "Visa Application", desc: "Pilots to Your Destination" },
      ],
    };
  },
};
</script>

<style>
.banner {
  background-image: url("../assets/images/flight1.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 90vh;
  border-radius: 0 0 10% 10%;
}

.slogan,
.service-title,
.choose-us p:first-child {
  font-family: "Handlee", cursive;
}

.choose-us {
  background-image: url("../assets/images/choice.jpg");
  background-size: cover;
  background-attachment: fixed;
  width: 95%;
  margin: 0 auto 9rem auto;
  height: 60vh;
}
</style>
