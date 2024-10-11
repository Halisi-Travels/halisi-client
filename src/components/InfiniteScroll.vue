<template>
  <div>
    <div class="testimonials-div hidden md:block w-full mx-auto relative">
      <div class="testimonials relative py-16">
        <div class="testimonials-slide flex">
          <div class="bg-gray-100 py-12">
            <div class="max-w-7xl mx-auto px-6 lg:px-8">
              <h2 class="text-3xl font-extrabold text-gray-900 text-center">
                What Our Clients Say
              </h2>

              <div class="mt-10 grid grid-cols-2 gap-8">
                <div
                  class="bg-white py-6 px-14 rounded-lg shadow-md flex flex-col items-center gap-3"
                  v-for="(ts, index) in testimonials"
                  :key="index"
                >
                  <img
                    class="w-[300px] h-[300px] rounded-full"
                    :src="ts.image"
                    alt="Avatar"
                  />
                  <p class="text-gray-600 text-center">"{{ ts.text }}."</p>
                  <div class="">
                    <div>
                      <h5 class="text-lg font-bold text-gray-900">
                        {{ ts.name }}
                      </h5>
                      <p class="text-sm text-gray-500 text-center capitalize">
                        {{ ts.country }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile-view md:hidden flex flex-col items-center gap-6">
      <div
        v-for="(item, index) in testimonials"
        :key="index"
        class="w-11/12 mx-auto flex flex-col items-center gap-3 shadow-xl rounded-xl p-3"
      >
        <img
          loading="lazy"
          :src="item.image"
          alt="Dominic"
          class="w-[250px] h-[250px] rounded-xl object-cover"
        />
        <p class="text-center text-sm">
          {{ item.text }}
        </p>
        <p class="italic text-center">~ {{ item.name }} ~</p>
        <p class="font-bold text-center">Country: {{ item.country }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          image: require("../assets/images/dominic.webp"),
          text: "This service exceeded my expectations. The team was professional, and the results were outstanding. I highly recommend them!.",
          name: "Dominic Otieno",
          country: "ROMAINIA",
        },
        // {
        //   image: require("../assets/images/duncan.webp"),
        //   text: "An excellent experience from start to finish. The attention to detail and customer service was impeccable.",
        //   name: "Dancan Onweno",
        //   country: "QATAR",
        // },
        // {
        //   image: require("../assets/images/macharia.webp"),
        //   text: "Fantastic results and a great team to work with. Their innovative approach made my relocation process bearable",
        //   name: "Joseph Macharia",
        //   country: "MAURITIUS",
        // },
        {
          image: require("../assets/images/testimonial.jpeg"),
          text: "The agency guided me through every step, from preparation to visa processing. I’m now happily working and couldn’t be more grateful!.",
          name: "John Musemi",
          country: "SAUDI ARABIA",
        },
        {
          image: require("../assets/images/testimonial1.jpeg"),
          text: "The team connected me with the perfect opportunity in Turkey. They displayed professionalism.",
          name: "Evans Mulumba",
          country: "TURKEY",
        },
        {
          image: require("../assets/images/testimonial2.jpeg"),
          text: "Thanks to Halisi Travels, my dream of working abroad has come true. They took care of all the details, and the entire process felt effortless.",
          name: "Susan Makena",
          country: "KUWAIT",
        },
        // {
        //   image: require("../assets/images/testimonial3.jpeg"),
        //   text: "The recruitment process was seamless, and the support was incredible. I am now working in Qatar. They helped me at every stage",
        //   name: "Joan Musembi",
        //   country: "QATAR",
        // },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
