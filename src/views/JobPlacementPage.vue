<template>
  <div id="job-page">
    <header class="banner">
      <div class="h-7" />

      <app-navbar />

      <div class="w-8/12 mx-auto mt-28">
        <p class="page-title text-2xl text-white font-bold text-center mb-3">
          JOB PLACEMENT
        </p>
      </div>
    </header>

    <main class="my-16 md:my-36">
      <section class="w-11/12 md:w-7/12 mx-auto">
        <p class="section-title text-secondary text-4xl mb-4">
          Launch Your International Career
        </p>

        <p>
          Whether you're looking to work in the bustling cities of Dubai, the
          dynamic environments of the USA, or the diverse landscapes of
          Australia, our dedicated team will provide comprehensive support every
          step of the way. From visa assistance to accommodation arrangements,
          we handle the details so you can focus on embarking on your new
          professional journey with confidence and ease. Explore the world of
          possibilities with Halisi Travels and take the first step towards your
          global career today.
        </p>
      </section>

      <section
        class="w-11/12 md:w-9/12 mx-auto mt-16 md:mt-28 flex flex-col gap-3"
      >
        <p class="section-title text-4xl text-secondary text-center">
          Comprehensive Support Services
        </p>

        <div class="flex mt-10 md:flex-row flex-col gap-5">
          <div class="flex-1 px-4">
            <p class="section-title text-xl text-secondary mb-2">
              Career Consultation
            </p>
            <li>
              Personalized career advice based on your skills, qualifications,
              and aspirations.
            </li>
            <li>
              Detailed information about job markets in your destination country
            </li>
          </div>

          <div
            class="h-36 md:rounded-tr-xl md:rounded-br-xl overflow-hidden flex-1"
          >
            <img
              loading="lazy"
              width="100%"
              :src="require('@/assets/images/career.jpg')"
            />
          </div>
        </div>

        <div class="flex md:flex-row-reverse flex-col gap-5 mt-10 md:mt-0">
          <div class="flex-1 px-4">
            <p class="section-title text-xl text-secondary mb-2">
              Job Matching
            </p>
            <li>
              Access to a wide network of reputable employers across various
              industries
            </li>
            <li>Job placements in high-demand sectors</li>
          </div>

          <div
            class="h-36 md:rounded-tl-xl md:rounded-bl-xl overflow-hidden flex-1"
          >
            <img
              width="100%"
              :src="require('@/assets/images/matching.jpg')"
              alt=""
            />
          </div>
        </div>

        <div class="flex mt-10 md:mt-0 md:flex-row flex-col gap-5">
          <div class="flex-1 px-4 py-2">
            <p class="section-title text-xl text-secondary mb-2">
              Visa and Documentation Support
            </p>
            <ul>
              <li>
                Expert assistance with visa applications and work permits.
              </li>
              <li>
                Guidance on necessary documentation and legal requirements.
              </li>
            </ul>
          </div>

          <div
            class="h-36 md:rounded-tr-xl md:rounded-br-xl overflow-hidden flex-1"
          >
            <img
              class="object-contain"
              width="100%"
              :src="require('@/assets/images/visa.png')"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSection(sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>

<style scoped lang="scss">
.banner {
  background-image: url("../assets/images/strips.webp");
  background-size: cover;
  background-attachment: fixed;
  height: 60vh;
  border-radius: 0 0 25% 25%;
}

@media screen and (min-width: 700px) {
  .banner {
    height: 70vh;
  }
}

.page-title,
.section-title {
  font-family: "Handlee", cursive;
}
</style>
