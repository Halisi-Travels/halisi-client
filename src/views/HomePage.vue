<template>
  <div class="home">
    <header>
      <app-navbar />

      <div class="carousel-div relative">
        <app-carousel />

        <div
          class="absolute top-0 bg-black/60 w-full h-full pb-4 md:pb-10 text-white gap-9"
        >
          <div class="w-6 h-[40%] hidden md:block"></div>
          <div class="w-11/12 md:w-10/12 mx-auto">
            <p
              class="header-title text-4xl md:text-6xl font-bold"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              Halisi Travel.
            </p>

            <p
              class="slogan text-2xl w-2/3 mt-5"
              data-aos="fade-up"
              data-aos-duration="2400"
            >
              At Halisi Travels, we create unforgettable experiences by
              seamlessly connecting you with the world's diverse cultures,
              landscapes, opportunities
            </p>
          </div>
        </div>
      </div>
    </header>

    <main>
      <section
        class="intro mt-28 mx-4 md:w-9/12 md:mx-auto sm:mx-2 block md:flex md:justify-between md:items-center md:gap-10"
      >
        <div
          class="intro-image md:w-3/6 rounded-lg overflow-hidden"
          data-aos="fade-right"
          data-aos-duration="2400"
        >
          <img
            loading="lazy"
            class="w-full"
            src="https://ik.imagekit.io/qxekjpfx0b/Halisi%20Travels/books_YMc5KUO-1.jpg?updatedAt=1722360997040"
            alt="into image"
          />
        </div>

        <div class="md:w-2/4 px-4 mt-4 md:mt-0">
          <p
            class="section-title text-xl font-semibold text-secondary"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            Tours & Travel Agency
          </p>
          <br />
          <p data-aos="fade-left" data-aos-duration="2400">
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

      <section class="my-16 md:my-28 services md:px-0 w-11/12 mx-auto">
        <p
          class="service-title text-center font-bold text-4xl underline mb-9 text-secondary"
        >
          Our Services
        </p>

        <div class="grid md:grid-cols-3 gap-9">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-white border-2 transition-all duration-300 overflow-hidden text-center cursor-pointer hover:bg-primary/80 hover:shadow-lg hover:text-white h-[350px]"
            data-aos="fade-up"
            :data-aos-duration="1400 + (index + 1) * 300"
            @click="$router.push('/service/1')"
          >
            <div class="bg-purple-300 w-full h-3/4">
              <img
                class="h-full w-full"
                :src="service.url"
                alt="service mage"
              />
            </div>

            <div class="p-3">
              <p class="service-title text-xl font-semibold">
                {{ service.name }}
              </p>
              <p class="text-md">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="choose-us rounded-3xl overflow-hidden mx-2 my-9 md:mx-4">
        <div
          class="w-full h-full mx-auto bg-black/30 text-white p-8 md:p-16 flex flex-col justify-end"
        >
          <p
            class="text-4xl text-secondary font-semibold mb-8"
            data-aos="zoom-in-left"
            data-aos-duration="1400"
          >
            Why Choose Us
          </p>
          <p
            class="text-2xl tracking-wider"
            data-aos="zoom-in-left"
            data-aos-duration="2400"
          >
            At Halisi Travels, our commitment to professionalism, reliability,
            and client satisfaction sets us apart. We excel in making the visa
            process seamless and stress-free, ensuring your international travel
            is smooth and worry-free. Choose Halisi Travels for a
            customer-focused experience that prioritizes your needs every step
            of the way.
          </p>
        </div>
      </section>

      <section class="newsletter flex flex-col gap-4 my-14">
        <p class="text-xl font-bold text-center">Subscibe to our News Letter</p>

        <form
          @submit.prevent=""
          class="flex w-full md:w-6/12 mx-auto p-4 flex-col lg:flex-row gap-4 md:gap-0"
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            class="flex-1 px-2"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            class="flex-1 px-2"
          />

          <button
            value="submit"
            class="bg-black text-white px-3 py-3 md:py-0 font-semibold"
          >
            Subscribe
          </button>
        </form>
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
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            <div
              class="bg-white p-6 rounded-2xl md:w-1/2 mx-4 md:mx-auto shadow-lg text-center"
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
  </div>
</template>

<script>
import Carousel from "@/components/carousel.vue";

export default {
  name: "HomePage",
  components: {
    "app-carousel": Carousel,
  },

  data() {
    return {
      services: [
        {
          name: "Flight Booking",
          desc: "Book, Fly, Enjoy, Repeat",
          url: require("@/assets/images/flight_b.png"),
        },
        {
          name: "Hotel Booking",
          desc: "Exquisite stays. Book Now!",
          url: require("@/assets/images/hotel_b.avif"),
        },
        {
          name: "Vacation Package",
          desc: "Escape, Relax, Discover, Adventure",
          url: require("@/assets/images/v_package.jpg"),
        },
        {
          name: "Job Placement",
          desc: "Career Compass: Navigating your Future",
          url: require("@/assets/images/placement.jpg"),
        },
        {
          name: "Visa Application",
          desc: "Pilots to Your Destination",
          url: require("@/assets/images/visa_app.png"),
        },
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
  background-image: url("@/assets/images/collage.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 70vh;
}

// tablet and desktop devices
@media screen and (min-width: 600px) {
  .banner {
    height: 90vh;
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

.header-title,
header p,
.service-title,
.choose-us p:first-child,
.section-title {
  font-family: "Kanit", sans-serif;
}

input {
  border: 1px solid rgb(209, 209, 209);
  &:focus {
    outline: none;
    border: 2px solid rgb(199, 197, 197);
  }
}

.choose-us {
  background-image: url("https://ik.imagekit.io/qxekjpfx0b/Halisi%20Travels/choice_I5n03eepHo.jpg?updatedAt=1722360992498");
  background-size: cover;
  background-attachment: fixed;
}

.testimonial-section {
  width: 100%;
  padding: 4rem 0;
  // position: relative;
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
