<template>
  <div id="applications-page">
    <main class="my-28 w-8/12 mx-auto">
      <p
        v-if="applications.length <= 0"
        class="text-gray-500 font-semibold p-3 bg-gray-200 border-l-4 border-gray-500"
      >
        There are no applications!
      </p>

      <div
        v-else
        class="application rounded-lg shadow-lg p-3"
        v-for="app in applications"
        :key="app._id"
      >
        {{ app }}
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      key: "",
    };
  },

  computed: {
    ...mapGetters(["applications", "user"]),
  },
};
</script>

<style scoped lang="scss">
.application:not(:last-child) {
  margin-bottom: 2rem;
}
</style>
