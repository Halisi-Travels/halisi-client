<template>
  <div>
    <router-view />
    <app-footer />
    <div class="whatsapp-btn" @click="openWhatsapp">
      <img
        class="whatsapp-logo"
        :src="require('@/assets/images/whatsapp.png')"
        alt="whatsapp chat"
      />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openWhatsapp() {
      // window.open("https://wa.me/25766518377", "_blank");
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.whatsapp-btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  .whatsapp-logo {
    width: 80px;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
