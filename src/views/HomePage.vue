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
            class="bg-primary/75 text-white p-3 rounded text-center h-40 flex flex-col justify-center cursor-pointer hover:bg-primary/80 hover:shadow-lg"
            @click="$router.push('/service/1')"
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

      <h2 class="text-center font-bold section-title text-5xl text-secondary">
        Testimonials
      </h2>
      <section class="testimonial-section">
        <div class="testimonial-container">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial"
          >
            <div
              class="bg-white p-6 rounded-2xl w-1/2 mx-auto shadow-lg text-center"
            >
              <p class="text-gray-800 text-xl">{{ testimonial.text }}</p>
              <div class="mt-4">
                <h3 class="text-2xl font-semibold text-primary">
                  {{ testimonial.author }}
                </h3>
                <p class="text-gray-500 text-md">{{ testimonial.position }}</p>
              </div>
            </div>
          </div>
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
      testimonials: [
        {
          text: "This service exceeded my expectations. The team was professional, and the results were outstanding. I highly recommend them!",
          author: "Alex Johnson",
          position: "Marketing Manager at XYZ Corp",
        },
        {
          text: "An excellent experience from start to finish. The attention to detail and customer service was impeccable.",
          author: "Jessica Lee",
          position: "Freelance Graphic Designer",
        },
        {
          text: "I've never worked with a more dedicated and efficient team. They truly transformed our project and delivered exceptional quality.",
          author: "Michael Brown",
          position: "Product Owner at Tech Innovations",
        },
        {
          text: "The project was delivered on time and exceeded our expectations. Their professionalism and expertise were evident throughout.",
          author: "Emily Davis",
          position: "CEO at Creative Solutions Inc.",
        },
        {
          text: "Fantastic results and a great team to work with. Their innovative approach made a significant impact on our business.",
          author: "Daniel White",
          position: "Sales Director at Global Enterprises",
        },
      ],
      currentTestimonial: 0,
    };
  },

  mounted() {
    this.startScrolling();
  },

  methods: {
    startScrolling() {
      setInterval(() => {
        this.currentTestimonial =
          (this.currentTestimonial + 1) % this.testimonials.length;
        const container = this.$el.querySelector(".testimonial-container");
        container.style.transform = `translateX(-${
          this.currentTestimonial * 100
        }%)`;
      }, 4000); // Adjust the time (4000ms = 4 seconds) as needed
    },
  },
};
</script>

<style scoped lang="scss">
.banner {
  background-image: url("../assets/images/flight1.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 90vh;
  border-radius: 0 0 10% 10%;
}

.slogan,
.service-title,
.choose-us p:first-child,
.section-title {
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

.testimonial-section {
  width: 100%;
  padding: 4rem 0;
  position: relative;
  overflow: hidden;
  .testimonial-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
    .testimonial {
      width: 50px;
      height: 100%;
      flex: 0 0 100%;
    }
  }
}
</style>
