<template>
  <div class="home">
    <header class="h-[50vh] md:h-[70vh] bg-cover bg-fixed">
      <div
        class="w-full h-full bg-black/30 flex flex-col items-center justify-center text-white gap-8 p-4 md:p-0"
      >
        <h1 class="page-title text-3xl md:text-6xl font-bold">
          Halisi Recruitment Agency
        </h1>
        <p class="slogan font-semibold text-sm md:text-xl text-center">
          YOUR GLOBAL RECRUITMENT PARTNER IN KENYA, UK, DUBAI
        </p>

        <div class="search container flex w-auto mt-7">
          <div
            class="md:flex gap-4 p-3 bg-white/40 rounded-tl-md rounded-bl-md"
          >
            <input
              type="text"
              name="keywords"
              id="keywords"
              placeholder="KEYWORDS"
            />
            <input
              type="text"
              name="location"
              id="location"
              placeholder="LOCATION"
            />
            <input
              type="text"
              name="category"
              id="category"
              placeholder="CATEGORY"
            />
          </div>

          <button
            class="bg-secondary text-white p-3 rounded-tr-md rounded-br-md font-semibold"
          >
            SEARCH
          </button>
        </div>
      </div>
    </header>

    <main class="my-20">
      <section class="jobs-table w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
        <JobsTable />
      </section>

      <hr class="my-20" />

      <section
        class="job-search flex flex-col-reverse lg:flex-row justify-between gap-3 w-11/12 md:2-10/12 lg:w-8/12 mx-auto"
      >
        <div
          class="info lg:w-2/4 flex flex-col items-center lg:items-start gap-7"
        >
          <h3 class="text-xl font-semibold">LOOKING FOR A JOB</h3>
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
            class="bg-secondary text-white p-3 rounded-md font-semibold w-full lg:w-6/12 mt-2"
            @click="$router.push('/jobs')"
          >
            SEARCH
          </button>
        </div>

        <div class="image lg:w-[400px] h-[300px] overflow-hidden">
          <img
            class="w-full h-full object-cover"
            :src="require('@/assets/images/job_search.webp')"
            alt="job search image"
          />
        </div>
      </section>

      <section
        class="vacation flex lg:flex-row-reverse flex-col-reverse justify-between gap-3 w-11/12 md:2-10/12 lg:w-8/12 mx-auto my-20"
      >
        <div
          class="info lg:w-2/4 flex flex-col items-center lg:items-start gap-7"
        >
          <h3 class="text-xl font-semibold">PLANNING YOUR NEXT VACATION</h3>
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
            class="border-2 border-secondary text-secondary p-3 rounded-md font-semibold w-full lg:w-6/12 mt-2"
            @click="$router.push('/contact')"
          >
            CONTACT US
          </button>
        </div>

        <div class="image lg:w-[400px] h-[300px] overflow-hidden">
          <img
            class="w-full h-full object-cover"
            :src="require('@/assets/images/vacation.png')"
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
              class="rounded-full px-5 py-3 bg-white text-black font-bold hover:border-b-4 border-gray-600 transition-all duration-300"
            >
              SIGN UP TO JOIN
            </button>
          </div>
        </div>
      </section>

      <section class="testimonials mt-20 w-11/12 md:10/12 lg:w-8/12 mx-auto">
        <h3 class="text-2xl font-semibold text-center mb-10">TESTIMONIALS</h3>

        <Testimonials />
      </section>
    </main>
  </div>
</template>

<script>
import Testimonials from "@/components/Testimonials.vue";
import JobsTable from "@/components/JobsTable.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "HomeView",

  components: {
    Testimonials,
    JobsTable,
  },

  mounted() {
    useHead({
      title: "Homepage | Halisi Travels",
      meta: [
        {
          name: "description",
          content:
            "Based in Nairobi, Kenya, Halisi Travels takes pride in offering a diverse array of flight booking, hotel booking, vacation, and job placement packages to our valued clients.",
        },
        {
          property: "og:title",
          content: "Homepage | Halisi Travels",
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped>
header {
  background-image: url("@/assets/images/h_banner.webp");
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
.page-title,
.slogan {
  font-family: "Montserrat Subrayada";
}

.dream-job {
  background-image: url("@/assets/images/job_banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
