<template>
  <div class="home">
    <header>
      <div
        class="w-full h-full bg-black/30 flex flex-col items-center justify-center text-white gap-8"
      >
        <h1 class="page-title text-6xl font-bold">Halisi Recruitment Agency</h1>
        <p class="slogan font-semibold text-xl">
          YOUR GLOBAL RECRUITMENT PARTNER IN KENYA, UK, DUBAI
        </p>

        <div class="search container flex w-auto mt-7">
          <div class="flex gap-4 p-3 bg-white/40 rounded-tl-md rounded-bl-md">
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
      <section class="jobs-table w-8/12 mx-auto">
        <JobsTable />
      </section>

      <hr class="my-20" />

      <section class="job-search flex justify-between gap-3 w-8/12 mx-auto">
        <div class="info w-2/4 flex flex-col gap-7">
          <h3 class="text-xl font-semibold">LOOKING FOR A JOB</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            tenetur vel in quibusdam praesentium, animi ex laborum dignissimos
            odio culpa quia vero odit accusamus fugit at quos explicabo
            architecto unde?
          </p>
          <button
            class="bg-secondary text-white p-3 rounded-md font-semibold w-6/12 mt-2"
          >
            SEARCH
          </button>
        </div>

        <div class="image w-[400px] h-[300px] overflow-hidden">
          <img
            class="w-full h-full object-cover"
            :src="require('@/assets/images/job_search.webp')"
            alt="job search image"
          />
        </div>
      </section>

      <section
        class="vacation flex flex-row-reverse justify-between gap-3 w-8/12 mx-auto my-20"
      >
        <div class="info w-2/4 flex flex-col gap-7">
          <h3 class="text-xl font-semibold">PLANNING YOUR NEXT VACATION</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            tenetur vel in quibusdam praesentium, animi ex laborum dignissimos
            odio culpa quia vero odit accusamus fugit at quos explicabo
            architecto unde?
          </p>
          <button
            class="bg-secondary text-white p-3 rounded-md font-semibold w-6/12 mt-2"
          >
            CONTACT US
          </button>
        </div>

        <div class="image w-[400px] h-[300px] overflow-hidden">
          <img
            class="w-full h-full object-cover"
            :src="require('@/assets/images/vacation.png')"
            alt="job search image"
          />
        </div>
      </section>

      <section class="dream-job">
        <div class="bg-black/60 p-8 text-white">
          <div class="w-1/2 mx-auto flex flex-col items-center gap-8">
            <h2 class="text-2xl font-semibold">
              LET'S FIND YOU THAT DREAM JOB
            </h2>
            <p class="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
              odit asperiores dolorem eligendi repellat, possimus optio
              provident quae tenetur est totam vel quasi illum laboriosam fugit
              debitis quisquam tempore sapiente modi aspernatur dolorum. Debitis
              voluptatibus delectus dolor laborum eveniet eius nam ratione
              repellat pariatur minus, modi nihil? Est harum voluptate
              asperiores facere vero, aut tempora mollitia necessitatibus ipsam
              commodi? Adipisci?
            </p>
            <button
              class="rounded-full px-5 py-3 bg-white text-black font-bold hover:border-b-4 border-gray-600 transition-all duration-300"
            >
              SIGN UP TO JOIN
            </button>
          </div>
        </div>
      </section>

      <section class="testimonials my-28">
        <h3 class="text-2xl font-semibold text-center mb-20">TESTIMONIALS</h3>

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
  height: 80vh;
  background-image: url("@/assets/images/h_banner.webp");
  background-size: cover;
  background-attachment: fixed;
}

input {
  padding: 5px 10px;
  border-radius: 0.375rem;
  color: black;
  &:focus {
    outline: none;
  }
}

.dream-job {
  background-image: url("@/assets/images/job_banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
</style>
