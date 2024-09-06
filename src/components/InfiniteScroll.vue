<template>
  <div
    class="partner-logos w-12/12 mx-auto max-w-screen-2xl relative h-[550px] overflow-hidden py-4"
  >
    <p class="mb-10 px-10 text-center">
      We are proud to have successfully placed numerous individuals in rewarding
      job opportunities abroad, spanning various industries and professions. Our
      candidates come from diverse backgrounds and bring unique skills and
      talents, enabling them to thrive in international environments.
    </p>

    <div
      class="marquee item-1 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col items-center font-bold"
    >
      <img
        :src="require('../assets/images/dominic.jpeg')"
        alt="Dominic"
        class="w-full h-full object-contain"
      />
      <p>Dominic</p>
      <p>ROMANIA</p>
      <p>Cleaner</p>
      <p>2024</p>
    </div>

    <div
      class="marquee item-2 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col items-center font-bold"
    >
      <img
        :src="require('../assets/images/duncan.jpeg')"
        alt="Dancan"
        class="w-full h-full object-contain"
      />
      <p>Dancan Onweno</p>
      <p>QATAR</p>
      <p>Security Guard</p>
      <p>2024</p>
    </div>

    <div
      class="marquee item-3 h-[300px] w-[300px] rounded-lg absolute left-full animate-scrollLeft flex flex-col items-center font-bold"
    >
      <img
        :src="require('../assets/images/macharia.jpeg')"
        alt="macharia"
        class="w-full h-full object-cover"
      />
      <p>Joseph Macharia</p>
      <p>MAURITIUS</p>
      <p>Waiter</p>
      <p>2024</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partner-logos {
  mask-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1),
    20%,
    rgba(0, 0, 0, 1),
    80%,
    rgba(0, 0, 0, 0)
  );
  .marquee {
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .item-1 {
    animation-delay: calc(80s / 3 * (3 - 1) * -1);
  }

  .item-2 {
    animation-delay: calc(80s / 3 * (3 - 2) * -1);
  }

  .item-3 {
    animation-delay: calc(80s / 3 * (3 - 3) * -1);
  }
}
</style>
