<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="accordion">
    <div
      class="cursor-pointer px-4 py-2 bg-gray-200 border-b border-gray-300 flex justify-between items-center"
      @click="togglePanel"
    >
      <p class="text-lg font-semibold">{{ title }}</p>
      <svg
        :class="['w-6 h-6 transition-transform', { 'rotate-180': isActive }]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>

    <transition name="fade">
      <div v-if="isActive" class="px-4 py-2 bg-white border-b border-gray-300">
        <p>{{ content }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    panelIndex: {
      type: Number,
      required: true,
    },
  },

  methods: {
    togglePanel() {
      this.$emit("toggle-panel", this.panelIndex);
    },
  },
};
</script>

<style scoped>
/* Add custom styles for the transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>
