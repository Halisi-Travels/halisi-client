<template>
  <div id="app">
    <AppNav />

    <router-view />

    <AppFooter />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["user"]),
  },

  watch: {
    user(val) {
      if (val != null || val != undefined) {
        this.$router.push("/profile");
      } else {
        this.$router.push("/auth");
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-title,
.slogan {
  font-family: "Montserrat Subrayada";
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
