<template>
  <div>
    <div
      class="testimonials-div hidden md:block w-full mx-auto relative h-[750px] overflow-hidden py-4"
    >
      <p class="mb-10 px-10 md:w-10/12 mx-auto text-center">
        We are proud to have successfully placed numerous individuals in
        rewarding job opportunities abroad, spanning various industries and
        professions. Our candidates come from diverse backgrounds and bring
        unique skills and talents, enabling them to thrive in international
        environments.
      </p>

      <div
        class="marquee item-1 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col gap-3 items-center"
      >
        <img
          loading="lazy"
          :src="require('../assets/images/dominic.webp')"
          alt="Dominic"
          class="w-full h-full object-cover"
        />
        <p class="text-center text-sm">
          This service exceeded my expectations. The team was professional, and
          the results were outstanding. I highly recommend them!.
        </p>
        <p class="italic">~ Dominic ~</p>
        <p class="font-bold">Country: ROMANIA</p>
        <!-- <p>Cleaner</p>
      <p>2024</p> -->
      </div>

      <div
        class="marquee item-2 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col items-center gap-3"
      >
        <img
          loading="lazy"
          :src="require('../assets/images/duncan.webp')"
          alt="Dancan"
          class="w-full h-full object-contain"
        />
        <p class="text-center text-sm">
          An excellent experience from start to finish. The attention to detail
          and customer service was impeccable.
        </p>
        <p class="italic">~ Dancan Onweno ~</p>
        <p class="font-bold">Country: QATAR</p>
        <!-- <p>Security Guard</p>
      <p>2024</p> -->
      </div>

      <div
        class="marquee item-3 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col items-center gap-3"
      >
        <img
          loading="lazy"
          :src="require('../assets/images/macharia.webp')"
          alt="macharia"
          class="w-full h-full object-cover"
        />
        <p class="text-center text-sm">
          Fantastic results and a great team to work with. Their innovative
          approach made a significant impact on our business
        </p>
        <p class="italic">~ Joseph Macharia ~</p>
        <p class="font-bold">Country: MAURITIUS</p>
        <!-- <p>Waiter</p>
      <p>2024</p> -->
      </div>

      <div
        class="marquee item-4 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col gap-3 items-center"
      >
        <img
          loading="lazy"
          :src="require('../assets/images/testimonial.jpeg')"
          alt="Dominic"
          class="w-full h-full object-cover"
        />
        <p class="text-center text-sm">
          This service exceeded my expectations. The team was professional, and
          the results were outstanding. I highly recommend them!.
        </p>
        <p class="italic">~ Dominic ~</p>
        <p class="font-bold">Country: ROMANIA</p>
        <!-- <p>Cleaner</p>
      <p>2024</p> -->
      </div>

      <div
        class="marquee item-5 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col items-center gap-3"
      >
        <img
          loading="lazy"
          :src="require('../assets/images/testimonial1.jpeg')"
          alt="Dancan"
          class="w-full h-full object-contain"
        />
        <p class="text-center text-sm">
          An excellent experience from start to finish. The attention to detail
          and customer service was impeccable.
        </p>
        <p class="italic">~ Dancan Onweno ~</p>
        <p class="font-bold">Country: QATAR</p>
        <!-- <p>Security Guard</p>
      <p>2024</p> -->
      </div>

      <div
        class="marquee item-6 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col items-center gap-3"
      >
        <img
          loading="lazy"
          :src="require('../assets/images/testimonial2.jpeg')"
          alt="macharia"
          class="w-full h-full object-cover"
        />
        <p class="text-center text-sm">
          Fantastic results and a great team to work with. Their innovative
          approach made a significant impact on our business
        </p>
        <p class="italic">~ Joseph Macharia ~</p>
        <p class="font-bold">Country: MAURITIUS</p>
        <!-- <p>Waiter</p>
      <p>2024</p> -->
      </div>

      <div
        class="marquee item-7 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col items-center gap-3"
      >
        <img
          loading="lazy"
          :src="require('../assets/images/testimonial3.jpeg')"
          alt="macharia"
          class="w-full h-full object-cover"
        />
        <p class="text-center text-sm">
          Fantastic results and a great team to work with. Their innovative
          approach made a significant impact on our business
        </p>
        <p class="italic">~ Joseph Macharia ~</p>
        <p class="font-bold">Country: MAURITIUS</p>
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
        <!-- <p>Cleaner</p>
  <p>2024</p> -->
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
          name: "Dominic",
          country: "ROMAINIA",
          job: "Cleaner",
        },
        {
          image: require("../assets/images/duncan.webp"),
          text: "An excellent experience from start to finish. The attention to detail and customer service was impeccable.",
          name: "Dancan Onweno",
          country: "QATAR",
          job: "Security Guard",
        },
        {
          image: require("../assets/images/macharia.webp"),
          text: "Fantastic results and a great team to work with. Their innovative approach made my relocation process bearable",
          name: "Joseph Macharia",
          country: "MAURITIUS",
          job: "Waiter",
        },
        {
          image: require("../assets/images/testimonial.jpeg"),
          text: "This service exceeded my expectations. The team was professional, and the results were outstanding. I highly recommend them!.",
          name: "Dominic",
          country: "ROMAINIA",
          job: "Cleaner",
        },
        {
          image: require("../assets/images/testimonial1.jpeg"),
          text: "An excellent experience from start to finish. The attention to detail and customer service was impeccable.",
          name: "Dancan Onweno",
          country: "QATAR",
          job: "Security Guard",
        },
        {
          image: require("../assets/images/testimonial2.jpeg"),
          text: "Fantastic results and a great team to work with. Their innovative approach made my relocation process bearable",
          name: "Joseph Macharia",
          country: "MAURITIUS",
          job: "Waiter",
        },
        {
          image: require("../assets/images/testimonial3.jpeg"),
          text: "Fantastic results and a great team to work with. Their innovative approach made my relocation process bearable",
          name: "Joseph Macharia",
          country: "MAURITIUS",
          job: "Waiter",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
.testimonials-div {
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1),
    15%,
    rgba(0, 0, 0, 1),
    90%,
    rgba(0, 0, 0, 0)
  );
  .marquee {
    border-radius: 15px;
    img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
      border-radius: 15px;
      object-fit: cover;
    }
  }

  .item-1 {
    animation-delay: calc(270s / 7 * (7 - 1) * -1);
  }

  .item-2 {
    animation-delay: calc(270s / 7 * (7 - 2) * -1);
  }

  .item-3 {
    animation-delay: calc(270s / 7 * (7 - 3) * -1);
  }

  .item-4 {
    animation-delay: calc(270s / 7 * (7 - 4) * -1);
  }

  .item-5 {
    animation-delay: calc(270s / 7 * (7 - 5) * -1);
  }

  .item-6 {
    animation-delay: calc(270s / 7 * (7 - 6) * -1);
  }

  .item-7 {
    animation-delay: calc(270s / 7 * (7 - 7) * -1);
  }
}
</style>
