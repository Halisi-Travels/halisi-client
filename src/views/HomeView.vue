<template>
  <div class="home">
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

    <main class="my-20">
      <section
        class="vacation flex lg:flex-row-reverse flex-col-reverse justify-between gap-3 w-11/12 md:2-10/12 lg:w-8/12 mx-auto my-20"
      >
        <div
          class="info lg:w-2/4 flex flex-col items-center lg:items-start gap-7"
        >
          <h3 class="section-title text-xl font-semibold">
            PLANNING YOUR NEXT VACATION
          </h3>
          <p>
            Planning your next vacation can be an exciting and fulfilling
            experience. Start by envisioning your ideal getaway—whether it's a
            relaxing beach retreat, an adventurous mountain trek, or an
            immersive cultural exploration. Consider your budget, travel dates,
            and the type of experience you're seeking. Research destinations
            that match your preferences, and explore accommodations, activities,
            and local attractions. Don’t forget to check for travel deals and
            packages that can offer great value. With careful planning, you can
            create a memorable vacation that perfectly suits your desires and
            needs.
          </p>
          <button
            name="contact us"
            class="border-2 border-secondary text-secondary p-3 rounded-md font-semibold w-full lg:w-6/12 mt-2"
            @click="$router.push('/contact')"
          >
            CONTACT US
          </button>
        </div>

        <div class="image lg:w-[400px] h-[300px] overflow-hidden">
          <img
            loading="lazy"
            class="w-full h-full object-cover"
            :src="require('@/assets/images/vacation.webp')"
            alt="job search image"
          />
        </div>
      </section>

      <hr class="my-20" />

      <section
        class="visa-applications w-11/12 lg:w-7/12 mx-auto text-center mb-20"
      >
        <h2 class="section-title text-3xl font-bold mb-6 uppercase">
          Visa Applications
        </h2>
        <p class="text-xl">
          Planning to explore new opportunities or enjoy a vacation abroad? Our
          visa application services for the
          <span class="font-semibold">USA, Canada</span> and
          <span class="font-semibold">Europe</span> are designed to make your
          travel process seamless and stress-free. Whether you're applying for a
          tourist, business, student, or work visa, our team of experts is here
          to guide you through each step. We offer comprehensive assistance,
          including document preparation, submission, and tracking, ensuring
          that you meet all requirements and deadlines. Start your journey with
          confidence, knowing that your visa application is in capable hands.
        </p>

        <button
          class="mt-4 text-secondary p-2"
          @click="$router.push('/services-apply')"
        >
          Apply With Us...
        </button>
      </section>

      <section
        class="job-search flex flex-col-reverse lg:flex-row justify-between gap-3 w-11/12 md:2-10/12 lg:w-8/12 mx-auto"
      >
        <div
          class="info lg:w-2/4 flex flex-col items-center lg:items-start gap-7"
        >
          <h3 class="section-title text-xl font-semibold">LOOKING FOR A JOB</h3>
          <p class="text-center lg:text-start">
            We excel at connecting you with the right job at the right time,
            ensuring a perfect match between your skills and the ideal company.
            Our approach is thorough and strategic, covering every aspect of the
            hiring process. From identifying potential job openings to
            understanding the specific requirements, evaluating candidates,
            conducting interviews, and ultimately matching the best fit for both
            the company and the candidate, we are dedicated to your success.
            Whether you’re looking for the next step in your career, exploring
            new opportunities, or aiming for a significant career move, our
            expertise guarantees a smooth and successful transition.
          </p>
          <button
            name="search job"
            class="bg-secondary text-white p-3 rounded-md font-semibold w-full lg:w-6/12 mt-2"
            @click="$router.push('/jobs')"
          >
            SEARCH
          </button>
        </div>

        <div class="image lg:w-[400px] h-[300px] overflow-hidden">
          <img
            loading="lazy"
            class="w-full h-full object-cover"
            :src="require('@/assets/images/job_search.webp')"
            alt="job search image"
          />
        </div>
      </section>

      <section
        class="recruiter flex lg:flex-row-reverse flex-col-reverse justify-between gap-3 w-11/12 md:2-10/12 lg:w-8/12 mx-auto my-20"
      >
        <div
          class="info lg:w-2/4 flex flex-col items-center lg:items-start gap-7"
        >
          <h3 class="section-title text-xl font-bold uppercase">
            are you a recruiter
          </h3>
          <p>
            At <strong>Halisi Agency</strong>, we connect top talent with
            leading organizations. As a recruiter, you'll have access to a
            diverse pool of qualified candidates ready to meet your hiring
            needs. Whether you're filling entry-level positions or executive
            roles, our platform makes it easy to post jobs, manage applications,
            and find the perfect fit for your team. Partner with us today to
            streamline your hiring process and build a stronger workforce
          </p>
          <button
            name="post job"
            class="border-2 border-secondary text-secondary p-3 rounded-md font-semibold w-full lg:w-6/12 mt-2"
            @click="$router.push('/jobs/new')"
          >
            POST JOB
          </button>
        </div>

        <div class="image lg:w-[400px] h-[300px] overflow-hidden">
          <img
            loading="lazy"
            class="w-full h-full object-cover"
            :src="require('@/assets/images/recruit.webp')"
            alt="job search image"
          />
        </div>
      </section>

      <section class="dream-job">
        <div class="bg-black/60 p-4 md:p-8 text-white">
          <div
            class="w-11/12 md:2-10/12 lg:w-1/2 mx-auto flex flex-col items-center gap-8"
          >
            <h2 class="text-xl md:text-2xl font-semibold text-center">
              LET'S FIND YOU THAT DREAM JOB
            </h2>
            <p class="text-center">
              Start by identifying your strengths, skills, and passions—what
              makes you unique in the job market? With this clarity, we can
              target the right opportunities that align with your aspirations.
              From refining your resume and crafting compelling cover letters to
              preparing you for interviews and negotiations, we're here to
              support you every step of the way. Together, we'll navigate the
              job search process, connect you with the best opportunities, and
              help you secure a position that not only matches your
              qualifications but also fulfills your career ambitions.
            </p>
            <button
              @click="
                {
                  {
                    user ? $router.push('/jobs') : $router.push('/auth');
                  }
                }
              "
              name="signup"
              class="rounded-full px-5 py-3 bg-white text-black font-bold hover:border-b-4 border-gray-600 transition-all duration-300"
            >
              {{ user ? "SEEK JOBS" : "SIGN UP TO JOIN" }}
            </button>
          </div>
        </div>
      </section>

      <section
        v-if="filteredJobs.length > 0"
        class="jobs-table w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-28"
      >
        <h2 class="section-title text-3xl font-bold mb-6 uppercase text-center">
          Available Jobs
        </h2>

        <p
          v-if="filteredJobs.length <= 0"
          class="text-gray-500 font-semibold p-3 bg-gray-200 border-l-4 border-gray-500"
        >
          There are no jobs posted!
        </p>

        <SlickCarousel v-else :jobs="filteredJobs" />
      </section>

      <hr class="my-20" />

      <section class="testimonials mt-20 w-12/12 md:10/12 lg:w-10/12 mx-auto">
        <InfiniteScroll />
      </section>

      <section
        class="job-apply mt-20 w-12/12 md:10/12 lg:w-10/12 mx-auto bg-gray-400 p-5 rounded-lg"
      >
        <p class="slogan font-semibold text-md md:text-xl text-center">
          FIND YOUR NEXT JOB
        </p>

        <div class="search container flex justify-center w-auto mt-7">
          <div
            class="flex flex-col lg:flex-row gap-4 p-3 bg-white/40 rounded-tl-md rounded-bl-md"
          >
            <input
              v-model="filters.country"
              type="text"
              name="country"
              id="country"
              placeholder="COUNTRY"
            />
            <input
              v-model="filters.location"
              type="text"
              name="position"
              id="position"
              placeholder="POSITION"
            />
            <input
              v-model="filters.category"
              type="text"
              name="salary"
              id="salary"
              placeholder="SALARY"
            />
          </div>

          <button
            name="search"
            :disabled="loading"
            class="bg-secondary text-white p-3 rounded-tr-md rounded-br-md font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            @click="filterJobs"
          >
            SEARCH
          </button>
        </div>

        <div
          class="cv-upload flex gap-2 items-center justify-center bg-white text-black p-2 rounded-md hover:cursor-pointer font-bold w-[300px] mx-auto mt-5"
          @click="$router.push('/profile')"
        >
          <i class="bx bx-upload text-xl"></i>
          <p>Upload CV</p>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// import Testimonials from "@/components/Testimonials.vue";
import InfiniteScroll from "@/components/InfiniteScroll.vue";
import SlickCarousel from "@/components/JobsCarousel.vue";
import { useHead } from "@vueuse/head";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "HomeView",

  components: {
    SlickCarousel,
    InfiniteScroll,
  },

  data() {
    return {
      filters: {
        country: "",
        salary: "",
        position: "",
      },
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
    };
  },

  computed: {
    ...mapGetters(["jobs", "loading", "user"]),

    filteredJobs() {
      return this.jobs.slice(0, 5);
    },
  },

  mounted() {
    useHead({
      title: "Homepage | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "Halisi Travels is a job recruitment agency that offers a diverse array of services like flight booking, hotel booking, vacation, and job placement packages to our valued clients.",
        },
        {
          property: "og:title",
          content: "Homepage | Halisi Travels",
        },
      ],
    });

    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 3000);

    // fetch jobs
    this.$store.dispatch("fetchJobs");
  },

  methods: {
    ...mapActions(["jobsFilter"]),

    async filterJobs() {
      const params = new URLSearchParams(this.filters).toString();
      await this.jobsFilter(params);
      this.$router.push("/jobs");
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel {
  height: 80vh;
}

input {
  padding: 5px 10px;
  border-radius: 0.375rem;
  color: black;
  width: 100%;
  &:focus {
    outline: none;
  }
}

@media screen and (max-width: 700px) {
  input:not(:last-child) {
    margin-bottom: 10px;
  }
}

.dream-job {
  background-image: url("@/assets/images/happiness.webp");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
