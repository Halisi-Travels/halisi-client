<template>
  <div id="applications-page">
    <main class="my-28 w-8/12 mx-auto">
      <div
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
    ...mapGetters(["applications"]),
  },
};
</script>

<style scoped lang="scss">
.application:not(:last-child) {
  margin-bottom: 2rem;
}
</style>
