<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div
    id="app-footer"
    class="relative bg-secondary bg-cover bg-fixed bg-center"
  >
    <div class="bg-black/40 text-white">
      <div class="w-11/12 md:w-9/12 mx-auto">
        <section
          class="find-job flex flex-col md:flex-row gap-10 items-center justify-between py-10"
        >
          <div class="text-3xl font-bold md:w-8/12 mt-8 lg:mt-0">
            <p class="text-center md:text-start uppercase">
              Enhanced Career, Enhanced Life—Connect with Us and Discover
            </p>
          </div>

          <button
            name="find job"
            class="rounded-full bg-secondary px-8 py-1 h-[50px] text-sm lg:text-lg text-white font-semibold hover:border-b-4 border-orange-900 transition-all duration-300"
            @click="$router.push('/jobs')"
          >
            FIND A JOB
          </button>
        </section>

        <button
          name="scroll to top"
          class="bg-secondary rounded-full py-3 px-4 absolute top-[-1.5rem] right-7"
          @click="scrollToTop"
        >
          <i class="bx bx-chevron-up text-2xl text-white"></i>
        </button>

        <hr />

        <section
          class="info flex flex-col lg:flex-row gap-8 justify-between my-20"
        >
          <div class="our-info flex-initial lg:w-[300px]">
            <p class="text-xl font-bold">WHO WE ARE</p>
            <div class="divider w-1/12 h-[3px] bg-secondary mt-2 mb-4" />
            <p class="text-gray-400">
              Based in Nairobi, Kenya, Halisi Travels takes pride in offering a
              diverse array of flight booking, hotel booking, vacation, and job
              placement packages to our valued clients. Immerse yourself in the
              dazzling splendor of Dubai, experience the vibrant culture of the
              USA, explore the picturesque landscapes of Australia, revel in the
              modern marvels of Qatar, savor the rich history of Turkey, and
              discover the beauty of South Africa.
            </p>
          </div>

          <div class="our-work flex-initial lg:w-[300px]">
            <p class="text-xl font-bold">OUR SERVICES</p>
            <div class="divider w-1/12 h-[3px] bg-secondary mt-2 mb-4" />

            <div class="border-b border-gray-200 w-full py-3">
              <router-link
                class="text-gray-400 hover:text-white hover:cursor-pointer"
                :to="{ path: '/services', params: { scrollTo: 'service1' } }"
              >
                Flight Booking
              </router-link>
            </div>
            <div class="border-b border-gray-200 w-full py-3">
              <router-link
                class="text-gray-400 hover:text-white hover:cursor-pointer"
                :to="{ path: '/services', params: { scrollTo: 'service2' } }"
              >
                Hotel Booking
              </router-link>
            </div>
            <div class="border-b border-gray-200 w-full py-3">
              <router-link
                class="text-gray-400 hover:text-white hover:cursor-pointer"
                :to="{ path: '/services', params: { scrollTo: 'service3' } }"
              >
                Vacation Packages
              </router-link>
            </div>
            <div class="border-b border-gray-200 w-full py-3">
              <router-link
                class="text-gray-400 hover:text-white hover:cursor-pointer"
                :to="{ path: '/services', params: { scrollTo: 'service4' } }"
              >
                Visa Applications
              </router-link>
            </div>
            <div class="border-b border-gray-200 w-full py-3">
              <router-link
                class="text-gray-400 hover:text-white hover:cursor-pointer"
                :to="{ name: 'our services', params: { scrollTo: service5 } }"
              >
                Job Placement Packages
              </router-link>
            </div>
          </div>

          <div class="find-us">
            <p class="text-xl font-bold">WHERE TO FIND US</p>
            <div class="divider w-1/12 h-[3px] bg-secondary mt-2 mb-4" />

            <div class="head-office text-gray-400 mb-4">
              <p class="font-bold">Head Office Address:</p>
              <em>
                Cianda Hse 10th Flr, Suite 1011 <br />
                Koinange Str, Opp CJ's Restaurant Nairobi Kenya
              </em>
            </div>

            <div class="contacts text-gray-400 mb-4">
              <p class="font-bold">Email Address:</p>
              <em class="text-gray-400">bookings@halisitravels.com, </em>
              <em class="text-gray-400">jobs@halisitravels.com</em>
            </div>

            <div class="phone text-gray-400 mb-4">
              <p class="font-bold">Phone Number:</p>
              <em class="">0745313519/0747393209/0797385816</em>
            </div>

            <div class="hours text-gray-400">
              <p class="font-bold">Hours</p>
              <p>
                <em>
                  <span class="font-semibold">Monday - Friday: </span>8.00am -
                  5.00pm
                </em>
              </p>
              <p>
                <em>
                  <span class="font-semibold">Saturday & Sunday: </span>11.00am
                  - 3.00pm
                </em>
              </p>
            </div>
          </div>
        </section>

        <hr />

        <section class="social-media flex flex-col gap-6 items-center py-12">
          <div class="social-icons flex gap-9">
            <a
              href="https://www.whatsapp.com/channel/0029VaLOeK4HVvTYWRSC6v28"
              target="_blank"
            >
              <i class="bx bxl-whatsapp text-3xl"></i>
            </a>
            <a href="https://www.tiktok.com/@halisi.travel" target="_blank">
              <i class="bx bxl-tiktok text-3xl"></i>
            </a>
            <a href="https://www.instagram.com/halisi.travels" target="_blank">
              <i class="bx bxl-instagram text-3xl"></i>
            </a>
          </div>

          <p class="font-bold text-xl">LET US DISCUSS YOUR CAREER GOALS</p>
        </section>
      </div>

      <div class="copyright p-6 bg-black/40 text-gray-400 flex justify-between">
        <p>Halisi Travel Agency &copy; {{ year }}</p>
        <p>
          Developed by
          <span class="font-semibold">
            <a href="https://mawira.netlify.app" target="_blank">Mawira</a>
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },

  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped lang="scss">
#app-footer {
  background-image: url("@/assets/images/choice.jpg");
}
</style>
