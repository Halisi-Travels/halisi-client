<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="member flex flex-col items-center">
    <div class="rounded-full overflow-hidden w-[250px] h-[250px]">
      <img :src="img" :alt="altText" class="object-cover" />
    </div>

    <p class="text-xl font-semibold mt-2">{{ title }}</p>
    <p class="text-lg">{{ name }}</p>
  </div>
</template>

<script>
export default {
  props: ["img", "altText", "title", "name"],
};
</script>
